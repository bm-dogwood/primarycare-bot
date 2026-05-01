import drThorne from "@/public/t.jpeg";
import drVance from "@/public/v.jpeg";
import drMercer from "@/public/m.jpeg";
import drOkafor from "@/public/o.jpeg";

export type Doctor = {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  subSpecialty: string;
  portrait: string;
  matchIndex: number;
  nextAvailable: string;
  distance: string;
  telehealth: boolean;
  acceptingNew: boolean;
  rating: number;
  reviews: number;
  insurances: string[];
  education: string;
  yearsPractice: number;
  npi: string;
  address: string;
  zip: string;
  bio: string;
  languages: string[];
};

export const doctors: Doctor[] = [
  {
    id: "thorne",
    name: "Silas Thorne",
    credentials: "MD, FACP",
    specialty: "Internal Medicine",
    subSpecialty: "Preventive & Lifestyle",
    portrait: drThorne.src,
    matchIndex: 98.4,
    nextAvailable: "Oct 14",
    distance: "1.2 mi",
    telehealth: true,
    acceptingNew: true,
    rating: 4.9,
    reviews: 412,
    insurances: [
      "Aetna",
      "Blue Cross Blue Shield",
      "Cigna",
      "United Healthcare",
      "Medicare",
    ],
    education: "Johns Hopkins University School of Medicine",
    yearsPractice: 22,
    npi: "1457382910",
    address: "412 Cypress Avenue, Suite 7",
    zip: "02906",
    bio: "Twenty-two years of practice with a focus on preventive medicine, longitudinal patient relationships, and integrative diagnostic protocols.",
    languages: ["English", "French"],
  },
  {
    id: "vance",
    name: "Alara Vance",
    credentials: "DO",
    specialty: "Family Medicine",
    subSpecialty: "Pediatric & Adult",
    portrait: drVance.src,
    matchIndex: 94.1,
    nextAvailable: "Oct 22",
    distance: "4.7 mi",
    telehealth: false,
    acceptingNew: true,
    rating: 4.8,
    reviews: 287,
    insurances: [
      "Blue Cross Blue Shield",
      "Cigna",
      "Humana",
      "Tufts Health Plan",
    ],
    education: "Mayo Clinic Alix School of Medicine",
    yearsPractice: 14,
    npi: "1932847651",
    address: "88 Westminster Street",
    zip: "02903",
    bio: "Family medicine practitioner serving multi-generational households with a particular interest in pediatric continuity of care.",
    languages: ["English", "Spanish"],
  },
  {
    id: "mercer",
    name: "Priya Mercer",
    credentials: "MD",
    specialty: "Internal Medicine",
    subSpecialty: "Telehealth Primary Care",
    portrait: drMercer.src,
    matchIndex: 91.7,
    nextAvailable: "Today, 4:15 PM",
    distance: "Telehealth",
    telehealth: true,
    acceptingNew: true,
    rating: 4.9,
    reviews: 538,
    insurances: ["Aetna", "Cigna", "United Healthcare", "Oscar", "Kaiser"],
    education: "Stanford University School of Medicine",
    yearsPractice: 9,
    npi: "1284756390",
    address: "Virtual Practice — Multi-state",
    zip: "—",
    bio: "Builds longitudinal relationships exclusively through video consultation. Serves patients across nine states with same-week availability.",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: "okafor",
    name: "Ezekiel Okafor",
    credentials: "MD, MPH",
    specialty: "Geriatric Medicine",
    subSpecialty: "Primary Care for Aging Adults",
    portrait: drOkafor.src,
    matchIndex: 89.2,
    nextAvailable: "Oct 19",
    distance: "2.8 mi",
    telehealth: true,
    acceptingNew: false,
    rating: 4.9,
    reviews: 624,
    insurances: [
      "Medicare",
      "Medicare Advantage",
      "Blue Cross Blue Shield",
      "Aetna",
    ],
    education: "Yale School of Medicine",
    yearsPractice: 31,
    npi: "1098273645",
    address: "210 Broadway, Floor 4",
    zip: "02904",
    bio: "Three decades of dedicated geriatric primary care. Specializes in polypharmacy review and chronic condition coordination.",
    languages: ["English", "Igbo"],
  },
];

export const insurances = [
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "United Healthcare",
  "Humana",
  "Kaiser Permanente",
  "Medicare",
  "Medicaid",
  "Oscar Health",
  "Tufts Health Plan",
  "Anthem",
  "Molina Healthcare",
];

export const specialties = [
  "Internal Medicine",
  "Family Medicine",
  "General Practice",
  "Geriatric Medicine",
  "Pediatric Primary Care",
  "Women's Health",
  "Preventive Medicine",
  "Adolescent Medicine",
];
