// src/app/primary-care-near-me/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.primaryCareNearMe.title,
  description: SEO_PAGES.primaryCareNearMe.description,
  keywords: SEO_PAGES.primaryCareNearMe.keywords,
  alternates: { canonical: SEO_PAGES.primaryCareNearMe.canonical },
  openGraph: {
    title: SEO_PAGES.primaryCareNearMe.title,
    description: SEO_PAGES.primaryCareNearMe.description,
    url: SEO_PAGES.primaryCareNearMe.canonical,
  },
};

const faqs = [
  {
    question: "How do I find a good primary care doctor near me?",
    answer:
      "Search by your ZIP code on PrimaryCare.Bot, then filter by insurance, specialty, and ratings. Look for doctors with 4+ star ratings, verified credentials, and strong patient reviews for communication and wait times.",
  },
  {
    question: "What is a primary care physician (PCP)?",
    answer:
      "A primary care physician is your first point of contact for healthcare. They provide preventive care, diagnose and treat common illnesses, manage chronic conditions, and refer you to specialists when needed. PCPs include family medicine doctors, internists, and general practitioners.",
  },
  {
    question: "Should I choose a family doctor or an internist?",
    answer:
      "Family medicine doctors treat patients of all ages, making them ideal for families. Internists specialize in adult medicine and are excellent for adults with complex medical histories. Either can serve as your primary care provider.",
  },
  {
    question: "How far should my primary care doctor be from home?",
    answer:
      "Most patients prefer a primary care doctor within 5–15 miles of home or work. However, with telehealth options now widely available, distance matters less for routine visits. Use PrimaryCare.Bot to find doctors in your preferred range.",
  },
];

export default function PrimaryCareNearMePage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: "Primary Care Near Me", url: "/primary-care-near-me" },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Primary Care Doctors Near Me: Find Local Physicians You Can Trust</h1>

      <p className="lead">
        Finding a primary care doctor close to home means better access to care
        when you need it most. PrimaryCare.Bot searches thousands of local
        physicians so you can compare availability, ratings, and insurance
        acceptance in seconds.
      </p>

      <h2>Why Having a Local Primary Care Doctor Matters</h2>
      <p>
        Research consistently shows that patients with a regular primary care
        provider have better health outcomes, fewer emergency room visits, and
        lower overall healthcare costs. A local PCP who knows your health
        history can catch problems early, coordinate specialist care, and
        provide personalized guidance that urgent care clinics and ERs simply
        cannot.
      </p>
      <p>
        Studies from the Milken Institute School of Public Health found that
        states with higher primary care physician density have lower rates of
        mortality for conditions like heart disease, cancer, and stroke. Access
        to a nearby primary care doctor is not just convenient — it can be
        lifesaving.
      </p>

      <h2>Types of Primary Care Doctors</h2>
      <p>
        When searching for a local primary care provider, you'll encounter
        several physician types:
      </p>

      <h3>Family Medicine Physicians</h3>
      <p>
        Family medicine doctors provide comprehensive care for patients of all
        ages — from newborns to seniors. They are the most versatile choice and
        ideal for households with multiple generations needing a single trusted
        provider.
      </p>

      <h3>Internal Medicine Physicians (Internists)</h3>
      <p>
        Internists specialize in adult medicine and are trained to manage
        complex, multi-system conditions. They are a strong choice for adults
        over 40 or anyone with multiple chronic conditions like diabetes, heart
        disease, or autoimmune disorders.
      </p>

      <h3>General Practitioners (GPs)</h3>
      <p>
        General practitioners offer broad-scope primary care similar to family
        medicine physicians. Many have decades of community practice experience
        and maintain long-term relationships with their patients.
      </p>

      <h3>Geriatricians</h3>
      <p>
        Specializing in the care of older adults, geriatricians are ideal for
        patients 65+ with complex medication regimens or age-related health
        challenges.
      </p>

      <h2>What to Look for When Choosing a Primary Care Doctor</h2>
      <ul>
        <li>
          <strong>Board certification</strong> — Confirm your doctor is
          board-certified in their specialty
        </li>
        <li>
          <strong>Insurance acceptance</strong> — Verify they accept your
          specific plan, not just your insurer
        </li>
        <li>
          <strong>New patient availability</strong> — Confirm they have open
          slots for new patients
        </li>
        <li>
          <strong>Patient reviews</strong> — Look for consistent ratings above
          4.0 across multiple platforms
        </li>
        <li>
          <strong>Hospital affiliations</strong> — Know which hospital they're
          affiliated with in case you need inpatient care
        </li>
        <li>
          <strong>Communication style</strong> — Reviews mentioning good
          listening skills and clear explanations matter
        </li>
        <li>
          <strong>Office hours</strong> — Ensure their hours work with your
          schedule
        </li>
      </ul>

      <h2>How to Use PrimaryCare.Bot to Find Doctors Near You</h2>
      <p>
        Our search engine combines data from multiple verified directories,
        patient review platforms, and insurer networks to give you a complete
        picture of every doctor in your area.
      </p>
      <ol>
        <li>Enter your ZIP code or allow location access</li>
        <li>Set your search radius (5, 10, or 25 miles)</li>
        <li>Filter by your insurance provider</li>
        <li>Sort by rating, distance, or earliest availability</li>
        <li>
          Click any profile to see full details, patient reviews, and booking
          options
        </li>
      </ol>

      <h2>Average Wait Times to See a Primary Care Doctor</h2>
      <p>
        In major metro areas, the average wait time for a new patient primary
        care appointment is 21 to 26 days according to healthcare staffing
        surveys. In rural areas, waits can exceed 60 days. This makes it
        critical to find a doctor before you're sick.
      </p>
      <p>
        PrimaryCare.Bot highlights doctors with same-week and same-day
        availability so you never have to wait longer than necessary.
      </p>

      <div className="cta-block">
        <h2>Search Local Primary Care Doctors Now</h2>
        <p>
          Enter your ZIP code to instantly browse top-rated primary care
          physicians near you.
        </p>
        <a href="/find-doctor" className="btn-primary">
          Find Doctors Near Me →
        </a>
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </SeoPageLayout>
  );
}
