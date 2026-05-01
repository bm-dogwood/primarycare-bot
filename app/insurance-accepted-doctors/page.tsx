// src/app/insurance-accepted-doctors/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.insuranceAccepted.title,
  description: SEO_PAGES.insuranceAccepted.description,
  keywords: SEO_PAGES.insuranceAccepted.keywords,
  alternates: { canonical: SEO_PAGES.insuranceAccepted.canonical },
  openGraph: {
    title: SEO_PAGES.insuranceAccepted.title,
    description: SEO_PAGES.insuranceAccepted.description,
    url: SEO_PAGES.insuranceAccepted.canonical,
  },
};

const supportedInsurers = [
  "Aetna",
  "Anthem BlueCross BlueShield",
  "BlueCross BlueShield (all plans)",
  "Cigna",
  "Humana",
  "Kaiser Permanente",
  "Medicare (Original)",
  "Medicare Advantage",
  "Medicaid / Medi-Cal",
  "UnitedHealthcare",
  "Molina Healthcare",
  "Centene / WellCare",
  "Oscar Health",
  "Ambetter",
  "Health Net",
  "Tricare (military)",
  "CHIP (Children's Health Insurance)",
  "Federal Employee Program (BCBS-FEP)",
];

const faqs = [
  {
    question: "How do I verify a doctor accepts my insurance?",
    answer:
      "On PrimaryCare.Bot, select your insurance provider from the dropdown during search. Our system cross-references live insurer directories to confirm which doctors in your area accept your specific plan — not just the insurance company, but your exact plan type.",
  },
  {
    question: "What's the difference between in-network and out-of-network?",
    answer:
      "In-network doctors have a contract with your insurer to provide care at pre-negotiated rates, meaning lower out-of-pocket costs for you. Out-of-network doctors don't have this contract, which typically means significantly higher costs or no coverage at all, depending on your plan type.",
  },
  {
    question: "Can my doctor drop my insurance plan mid-year?",
    answer:
      "Yes, doctors can leave an insurer's network at any time. This is why it's important to verify in-network status at least once a year during open enrollment and before any major procedure. PrimaryCare.Bot pulls real-time data to minimize this risk.",
  },
  {
    question: "Does Medicare cover primary care visits?",
    answer:
      "Yes. Original Medicare (Part B) covers most primary care services including annual wellness visits, preventive screenings, and medically necessary office visits. Medicare Advantage plans include the same or additional primary care benefits. Always confirm your specific plan's cost-sharing structure.",
  },
];

export default function InsuranceAcceptedPage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          name: "Insurance Accepted Doctors",
          url: "/insurance-accepted-doctors",
        },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Find Primary Care Doctors That Accept Your Insurance</h1>

      <p className="lead">
        Showing up to a doctor&apos;s appointment only to learn they don&apos;t
        take your insurance is a costly mistake. PrimaryCare.Bot verifies
        insurance acceptance before you book — supporting 200+ insurance plans
        including Medicare, Medicaid, and all major private insurers.
      </p>

      <h2>Why Insurance Verification Matters Before Your Visit</h2>
      <p>
        Out-of-pocket costs for an out-of-network primary care visit can range
        from $150 to $500 or more — even when you have insurance. Insurer
        directories are frequently outdated: a 2022 investigation by the
        Department of Health and Human Services found that nearly half of
        provider directory listings contained at least one error, including
        incorrect insurance acceptance information.
      </p>
      <p>
        PrimaryCare.Bot combines data from multiple verified sources — including
        real-time insurer feeds and practice-confirmed listings — to give you
        the most accurate insurance information available.
      </p>

      <h2>Insurance Plans We Support</h2>
      <p>
        Our insurance lookup covers 200+ insurance plans. Here are some of the
        most commonly searched:
      </p>
      <ul>
        {supportedInsurers.map((insurer) => (
          <li key={insurer}>{insurer}</li>
        ))}
        <li>...and 180+ additional plans</li>
      </ul>

      <h2>Understanding Your Primary Care Benefits</h2>
      <h3>Co-pays vs. Coinsurance</h3>
      <p>
        Most insurance plans charge either a flat co-pay (e.g., $25 per visit)
        or coinsurance (e.g., you pay 20% of the allowed amount after meeting
        your deductible) for primary care visits. Many plans waive cost-sharing
        entirely for annual preventive wellness visits.
      </p>

      <h3>Deductibles and Primary Care</h3>
      <p>
        If your plan has a high deductible, you may pay the full allowed amount
        for primary care visits until your deductible is met. However, many
        plans exempt preventive care visits from the deductible entirely, as
        required by the Affordable Care Act.
      </p>

      <h3>HMO vs. PPO Primary Care</h3>
      <p>
        HMO plans require you to choose a primary care physician (PCP) who
        coordinates all your care and provides referrals to specialists. PPO
        plans give you more flexibility to see any provider, but you'll pay less
        when staying in-network. PrimaryCare.Bot shows which plan types each
        doctor accepts.
      </p>

      <h2>Medicare and Medicaid Primary Care</h2>
      <p>
        Medicare Part B covers preventive screenings, annual wellness visits,
        and medically necessary primary care services. Medicaid coverage varies
        by state, but all state programs cover basic primary care visits. Use
        PrimaryCare.Bot's Medicare and Medicaid filters to find doctors in your
        area who specifically accept government insurance programs.
      </p>

      <h2>Tips for Minimizing Primary Care Costs</h2>
      <ul>
        <li>
          Always schedule your Annual Wellness Visit, which is covered at 100%
          by most plans
        </li>
        <li>
          Ask your doctor to code routine screenings as preventive care when
          applicable
        </li>
        <li>Use an in-network lab when your doctor orders blood work</li>
        <li>
          Consider a Health Savings Account (HSA) if you have a high-deductible
          health plan
        </li>
        <li>
          Ask about generic prescriptions when your PCP prescribes medication
        </li>
      </ul>

      <div className="cta-block">
        <h2>Search by Your Insurance Plan</h2>
        <p>
          Enter your ZIP code and insurance plan to instantly see in-network
          primary care doctors near you.
        </p>
        <a href="/find-doctor?filter=insurance" className="btn-primary">
          Find In-Network Doctors →
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
