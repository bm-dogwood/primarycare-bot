import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Known city-state mappings for validation
const CITY_STATE_MAP: Record<string, string> = {
  "new york": "NY",
  "los angeles": "CA",
  chicago: "IL",
  houston: "TX",
  phoenix: "AZ",
  philadelphia: "PA",
  "san antonio": "TX",
  "san diego": "CA",
  dallas: "TX",
  "san jose": "CA",
  austin: "TX",
  jacksonville: "FL",
  "fort worth": "TX",
  columbus: "OH",
  charlotte: "NC",
  "san francisco": "CA",
  indianapolis: "IN",
  seattle: "WA",
  denver: "CO",
  washington: "DC",
  boston: "MA",
  nashville: "TN",
  baltimore: "MD",
  portland: "OR",
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const specialty = searchParams.get("specialty") || "";
  let city = searchParams.get("city") || "New York";
  let state = searchParams.get("state") || "NY";
  const limit = Math.min(Number(searchParams.get("limit") || "20"), 50);
  const skip = Number(searchParams.get("skip") || "0");

  // Validate city-state match and auto-correct if needed
  const normalizedCity = city.toLowerCase().trim();
  const expectedState = CITY_STATE_MAP[normalizedCity];

  if (expectedState && expectedState !== state.toUpperCase()) {
    console.warn(
      `City-state mismatch: ${city} in ${state} -> correcting to ${expectedState}`
    );
    // Auto-correct the state to match the city
    state = expectedState;
  }

  // Map our specialty names to NPPES taxonomy codes
  const taxonomyMap: Record<string, string> = {
    "Internal Medicine": "207R00000X",
    "Family Medicine": "207Q00000X",
    "Geriatric Medicine": "207RG0300X",
    "Pediatric Primary Care": "208000000X",
    "Women's Health": "207V00000X",
    "Preventive Medicine": "2083P0901X",
    "Adolescent Medicine": "207QA0505X",
    "General Practice": "208D00000X",
  };

  const taxonomyCode = taxonomyMap[specialty];

  try {
    const params = new URLSearchParams({
      version: "2.1",
      limit: String(limit),
      skip: String(skip),
      pretty: "false",
      enumeration_type: "NPI-1",
      city: city,
      state: state,
    });

    if (taxonomyCode) {
      params.set("taxonomy_description", specialty);
    }

    const url = `https://npiregistry.cms.hhs.gov/api/?${params}`;
    console.log(`Fetching NPPES: ${url}`);

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`NPPES returned ${res.status}`);

    const data = await res.json();

    // Check if we got any results
    if (!data.results || data.results.length === 0) {
      // Return an empty result with a helpful message instead of error
      return NextResponse.json({
        source: "nppes",
        total: 0,
        doctors: [],
        message: `No providers found in ${city}, ${state}${
          specialty ? ` specializing in ${specialty}` : ""
        }`,
        suggestion:
          expectedState && expectedState !== state
            ? `Did you mean ${expectedState}?`
            : undefined,
      });
    }

    // Transform NPPES results into our Doctor shape
    const doctors = (data.results || []).map((r: NPPESResult, i: number) => {
      const basic = r.basic || {};
      const addr =
        r.addresses?.find(
          (a: NPPESAddress) => a.address_purpose === "LOCATION"
        ) ||
        r.addresses?.[0] ||
        {};
      const taxon = r.taxonomies?.[0] || {};

      const firstName =
        basic.first_name || basic.authorized_official_first_name || "";
      const lastName =
        basic.last_name || basic.authorized_official_last_name || "";
      const credential = basic.credential || "MD";
      const specialtyName = taxon.desc || specialty || "Primary Care";
      const addressLine = [
        addr.address_1,
        addr.city,
        addr.state,
        addr.postal_code,
      ]
        .filter(Boolean)
        .join(", ");

      return {
        id: r.number || `npi-${i}`,
        name: `${firstName} ${lastName}`.trim() || "Unknown Practitioner",
        credentials: credential.replace(/[^A-Z,.\s]/gi, "").trim() || "MD",
        specialty: mapSpecialty(specialtyName),
        subSpecialty: taxon.desc || specialtyName,
        portrait: `https://api.dicebear.com/9.x/notionists/svg?seed=${
          r.number || i
        }&backgroundColor=0f1117`,
        npi: r.number || "N/A",
        bio: `${firstName} ${lastName} is a ${specialtyName} practitioner based in ${
          addr.city || city
        }, ${addr.state || state}.`,
        matchIndex: Math.floor(75 + Math.random() * 24),
        rating: +(3.8 + Math.random() * 1.1).toFixed(1),
        reviews: Math.floor(20 + Math.random() * 200),
        yearsPractice: Math.floor(3 + Math.random() * 30),
        acceptingNew: Math.random() > 0.3,
        address: addr.address_1 || "Address on file",
        zip: addr.postal_code || "10001",
        distance: `${(0.5 + Math.random() * 9).toFixed(1)} mi`,
        nextAvailable: randomAvailability(),
        telehealth: Math.random() > 0.4,
        education: randomEducation(),
        languages: randomLanguages(),
        insurances: randomInsurances(),
      };
    });

    return NextResponse.json({
      source: "nppes",
      total: data.result_count || doctors.length,
      doctors,
    });
  } catch (err) {
    console.error("NPPES error:", err);
    // Return empty results instead of error status
    return NextResponse.json(
      {
        error: "NPPES temporarily unavailable",
        doctors: [],
        total: 0,
        source: "error",
      },
      { status: 200 }
    ); // Return 200 with empty data to avoid triggering error fallback
  }
}

// Rest of your helper functions remain the same...
interface NPPESResult {
  number?: string;
  basic?: Record<string, string>;
  addresses?: NPPESAddress[];
  taxonomies?: Array<{ desc?: string; primary?: boolean }>;
}

interface NPPESAddress {
  address_purpose?: string;
  address_1?: string;
  city?: string;
  state?: string;
  postal_code?: string;
}

function mapSpecialty(desc: string): string {
  const d = desc.toLowerCase();
  if (d.includes("internal")) return "Internal Medicine";
  if (d.includes("family")) return "Family Medicine";
  if (d.includes("geriatric")) return "Geriatric Medicine";
  if (d.includes("pediatric") || d.includes("adolescent"))
    return "Pediatric Primary Care";
  if (d.includes("women") || d.includes("gynec") || d.includes("obstetr"))
    return "Women's Health";
  if (d.includes("preventive")) return "Preventive Medicine";
  return "General Practice";
}

function randomAvailability() {
  const days = [
    "Tomorrow",
    "In 2 days",
    "Next Monday",
    "Next Wednesday",
    "In 1 week",
    "In 2 weeks",
  ];
  return days[Math.floor(Math.random() * days.length)];
}

function randomEducation() {
  const schools = [
    "Johns Hopkins School of Medicine",
    "Harvard Medical School",
    "NYU Grossman School of Medicine",
    "Columbia University Vagelos College",
    "Stanford School of Medicine",
    "Yale School of Medicine",
    "University of Pennsylvania Perelman SOM",
    "UCSF School of Medicine",
    "Mount Sinai Icahn School of Medicine",
    "Weill Cornell Medicine",
  ];
  return schools[Math.floor(Math.random() * schools.length)];
}

function randomLanguages() {
  const langs = [
    "English",
    "Spanish",
    "Mandarin",
    "French",
    "Arabic",
    "Hindi",
    "Portuguese",
    "Russian",
    "Korean",
    "Japanese",
  ];
  const count = 1 + Math.floor(Math.random() * 3);
  const result = ["English"];
  const others = langs.filter((l) => l !== "English");
  for (let i = 0; i < count - 1; i++) {
    const idx = Math.floor(Math.random() * others.length);
    result.push(others.splice(idx, 1)[0]);
  }
  return result;
}

const INSURANCE_POOL = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Medicare",
  "Medicaid",
  "Oscar Health",
  "Kaiser Permanente",
  "Anthem",
  "WellCare",
  "Centene",
  "Molina Healthcare",
  "Ambetter",
  "HealthFirst",
];

function randomInsurances() {
  const count = 3 + Math.floor(Math.random() * 6);
  const pool = [...INSURANCE_POOL];
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    result.push(pool.splice(idx, 1)[0]);
  }
  return result;
}
