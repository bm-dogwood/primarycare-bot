// src/lib/seo.ts
export const SITE_URL = "https://primarycare.bot";
export const SITE_NAME = "PrimaryCare.Bot";

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
  ogImage?: string;
}

export const SEO_PAGES: Record<string, PageSEO> = {
  home: {
    title: "Find Primary Care Doctors Near You | PrimaryCare.Bot",
    description:
      "Search primary care doctors by zip code, insurance, and specialty. Filter by telehealth or in-person, check availability, and find doctors accepting new patients near you.",
    canonical: SITE_URL,
    keywords:
      "primary care doctor near me, find a primary care physician, primary care doctor search, doctors accepting new patients, primary care telehealth",
    ogImage: `${SITE_URL}/og-home.png`,
  },
  findDoctor: {
    title: "Find a Primary Care Doctor | Search by Zip, Insurance & Specialty",
    description:
      "Use our doctor finder to search primary care physicians by zip code, accepted insurance, and specialty. See real-time availability and book appointments online.",
    canonical: `${SITE_URL}/find-doctor`,
    keywords:
      "find a doctor by zip code, primary care doctor search, doctor finder tool, search doctors by insurance, primary care physician finder",
    ogImage: `${SITE_URL}/og-find-doctor.png`,
  },
  telehealthDoctors: {
    title: "Telehealth Primary Care Doctors | Virtual Visits Available Now",
    description:
      "Find primary care doctors offering telehealth appointments. Compare virtual vs in-person options, check availability, and connect with board-certified physicians from home.",
    canonical: `${SITE_URL}/telehealth-doctors`,
    keywords:
      "telehealth primary care doctor, virtual primary care, online doctor visit, telemedicine primary care, virtual doctor appointment",
    ogImage: `${SITE_URL}/og-telehealth.png`,
  },
  primaryCareNearMe: {
    title: "Primary Care Doctors Near Me | Find Local Physicians",
    description:
      "Discover top-rated primary care doctors in your area. Search by location, compare ratings, verify insurance acceptance, and schedule your first appointment today.",
    canonical: `${SITE_URL}/primary-care-near-me`,
    keywords:
      "primary care doctors near me, local primary care physician, find primary care near me, nearby primary care doctor, general practitioner near me",
    ogImage: `${SITE_URL}/og-near-me.png`,
  },
  acceptingNewPatients: {
    title: "Primary Care Doctors Accepting New Patients | Open Availability",
    description:
      "Find primary care doctors currently accepting new patients in your area. Filter by availability, insurance, and visit type. No referral needed — book direct.",
    canonical: `${SITE_URL}/doctors-accepting-new-patients`,
    keywords:
      "doctors accepting new patients near me, primary care accepting new patients, find a doctor taking new patients, physician accepting new patients",
    ogImage: `${SITE_URL}/og-new-patients.png`,
  },
  insuranceAccepted: {
    title: "Find Doctors by Insurance | Primary Care Insurance Lookup",
    description:
      "Search primary care doctors who accept your insurance plan. Verify coverage for Aetna, BlueCross, Cigna, Humana, Medicare, Medicaid, and 200+ more insurance plans.",
    canonical: `${SITE_URL}/insurance-accepted-doctors`,
    keywords:
      "doctors that accept my insurance, primary care doctor insurance lookup, find doctor by insurance plan, insurance accepted primary care, does my doctor take my insurance",
    ogImage: `${SITE_URL}/og-insurance.png`,
  },
  bestRated: {
    title: "Best Rated Primary Care Doctors | Top-Reviewed Physicians",
    description:
      "Browse the highest-rated primary care doctors based on aggregated patient reviews. Find 5-star rated family medicine and internal medicine physicians near you.",
    canonical: `${SITE_URL}/best-rated-primary-care`,
    keywords:
      "best primary care doctor near me, top rated primary care physician, highest rated family doctor, patient reviews primary care, best reviewed doctor",
    ogImage: `${SITE_URL}/og-best-rated.png`,
  },
  urgentCareVsPrimary: {
    title: "Urgent Care vs Primary Care | Which Should You Choose?",
    description:
      "Learn when to visit urgent care vs your primary care doctor. Understand costs, wait times, and when each option is right for your health needs.",
    canonical: `${SITE_URL}/urgent-care-vs-primary-care`,
    keywords:
      "urgent care vs primary care, when to see primary care doctor, urgent care or primary care, difference between urgent care and primary care, should I go to urgent care",
    ogImage: `${SITE_URL}/og-urgent-vs-primary.png`,
  },
  withoutInsurance: {
    title: "Primary Care Without Insurance | Affordable Doctor Options",
    description:
      "Find affordable primary care options without insurance. Explore sliding scale clinics, direct primary care memberships, community health centers, and low-cost telehealth.",
    canonical: `${SITE_URL}/primary-care-without-insurance`,
    keywords:
      "primary care without insurance, affordable doctor no insurance, uninsured primary care, cheap doctor visit without insurance, free clinic near me",
    ogImage: `${SITE_URL}/og-no-insurance.png`,
  },
};

// JSON-LD Schema generators
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "A healthcare search platform helping patients find primary care doctors by zip code, insurance, and specialty.",
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@primarycare.bot",
    },
    sameAs: [
      "https://twitter.com/primarycarebot",
      "https://www.facebook.com/primarycarebot",
    ],
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/find-doctor?zip={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Find primary care doctors by zip, insurance, and specialty. Check availability and book appointments.",
    url: SITE_URL,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
