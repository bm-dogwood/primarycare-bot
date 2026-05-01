// src/app/primary-care-without-insurance/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.withoutInsurance.title,
  description: SEO_PAGES.withoutInsurance.description,
  keywords: SEO_PAGES.withoutInsurance.keywords,
  alternates: { canonical: SEO_PAGES.withoutInsurance.canonical },
  openGraph: {
    title: SEO_PAGES.withoutInsurance.title,
    description: SEO_PAGES.withoutInsurance.description,
    url: SEO_PAGES.withoutInsurance.canonical,
  },
};

const faqs = [
  {
    question: "How much does a primary care visit cost without insurance?",
    answer:
      "A primary care visit without insurance typically costs $100–$300 at a private practice. However, community health centers offer sliding-scale fees from $20–$60 based on income. Direct Primary Care memberships run $50–$100/month with unlimited visits included. Telehealth visits without insurance start at $59.",
  },
  {
    question: "What is a Federally Qualified Health Center (FQHC)?",
    answer:
      "FQHCs are community health clinics that receive federal funding and are required to serve patients regardless of ability to pay. They offer sliding-scale fees based on household income and can provide primary care, dental, mental health, and pharmacy services at greatly reduced costs.",
  },
  {
    question: "What is Direct Primary Care and how does it work?",
    answer:
      "Direct Primary Care (DPC) is a membership-based model where you pay a monthly fee directly to a primary care doctor — typically $50–$100/month — in exchange for unlimited office visits, telehealth, and basic labs at no additional charge. There's no insurance billing involved.",
  },
  {
    question: "Can I get free primary care if I'm uninsured?",
    answer:
      "Yes. Free clinics, federally qualified health centers, and community health centers offer free or very low-cost primary care based on income. Search for 'free clinic near me' or visit HRSA.gov to find federally funded health centers in your area.",
  },
];

export default function WithoutInsurancePage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          name: "Primary Care Without Insurance",
          url: "/primary-care-without-insurance",
        },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Affordable Primary Care Without Insurance: Your Complete Guide</h1>

      <p className="lead">
        No health insurance? You still have real options for quality primary
        care. From federally funded community clinics to direct primary care
        memberships and low-cost telehealth, here&apos;s how to access the care
        you need without breaking the bank.
      </p>

      <h2>The Reality of Being Uninsured in the U.S.</h2>
      <p>
        Approximately 25–30 million Americans are uninsured at any given time.
        The cost of primary care without insurance can feel prohibitive, but
        there are more affordable options than most people realize — and
        skipping primary care is almost always more expensive in the long run.
      </p>
      <p>
        Uninsured patients who delay routine primary care are 3–4 times more
        likely to require expensive emergency care for conditions that could
        have been caught early. The good news is that multiple systems exist
        specifically to serve uninsured patients.
      </p>

      <h2>Option 1: Federally Qualified Health Centers (FQHCs)</h2>
      <p>
        FQHCs are the gold standard for affordable uninsured primary care. With
        over 14,000 service sites across the U.S., these federally funded
        clinics:
      </p>
      <ul>
        <li>Accept all patients regardless of ability to pay</li>
        <li>
          Charge on a sliding fee scale based on household income (as low as $0)
        </li>
        <li>
          Provide primary care, mental health, dental, and often pharmacy
          services
        </li>
        <li>Are legally required to see you even if you can't pay</li>
        <li>Employ board-certified physicians and licensed practitioners</li>
      </ul>
      <p>
        Find your nearest FQHC by visiting the HRSA Health Center Finder at
        findahealthcenter.hrsa.gov or by searching on PrimaryCare.Bot with the
        "Community Health Center" filter enabled.
      </p>

      <h2>Option 2: Direct Primary Care (DPC) Memberships</h2>
      <p>
        Direct Primary Care bypasses insurance entirely. You pay a fixed monthly
        fee directly to your doctor — typically $50 to $100 per month for adults
        — and receive:
      </p>
      <ul>
        <li>Unlimited primary care visits, both in-person and telehealth</li>
        <li>Same-day and next-day appointment access</li>
        <li>
          Basic labs and procedures included or at heavily discounted cost
        </li>
        <li>Direct communication with your physician via phone and message</li>
        <li>No per-visit co-pays or surprise billing</li>
      </ul>
      <p>
        DPC is increasingly popular for self-employed individuals, gig workers,
        and small business employees who lack employer-sponsored coverage. Many
        DPC patients pair a low-cost catastrophic insurance plan for major
        medical events with a DPC membership for day-to-day care.
      </p>

      <h2>Option 3: Telehealth Without Insurance</h2>
      <p>
        Telehealth platforms have dramatically reduced the cost of primary care
        for uninsured patients. Many offer transparent, flat-rate pricing:
      </p>
      <ul>
        <li>General primary care visit: $59–$120</li>
        <li>Urgent care telehealth: $75–$150</li>
        <li>Mental health visit: $99–$200</li>
        <li>Specialist consultation: $150–$250</li>
      </ul>
      <p>
        PrimaryCare.Bot's telehealth filter lets you find providers offering
        self-pay pricing without insurance, often with same-hour availability.
      </p>

      <h2>Option 4: Free Clinics</h2>
      <p>
        Free clinics are nonprofit organizations staffed by volunteer physicians
        and healthcare professionals. They provide no-cost primary care services
        to uninsured patients who don't qualify for Medicaid. Services vary by
        location but often include:
      </p>
      <ul>
        <li>Primary care consultations</li>
        <li>Prescription assistance programs</li>
        <li>Basic lab work and screenings</li>
        <li>Referrals to specialty care</li>
      </ul>

      <h2>Option 5: Medicaid Enrollment</h2>
      <p>
        If your household income is below 138% of the federal poverty level and
        you live in a Medicaid expansion state, you likely qualify for Medicaid
        at little to no cost. You can apply year-round at Healthcare.gov or your
        state's Medicaid office — there is no open enrollment deadline for
        Medicaid.
      </p>

      <h2>Reducing Prescription Costs Without Insurance</h2>
      <p>
        Even when you can access a doctor, prescription costs can be a barrier.
        These resources can significantly reduce what you pay:
      </p>
      <ul>
        <li>
          <strong>GoodRx</strong> — Free discount card usable at most pharmacies
        </li>
        <li>
          <strong>Mark Cuban Cost Plus Drugs</strong> — Generic medications at
          near-wholesale prices
        </li>
        <li>
          <strong>Manufacturer patient assistance programs</strong> — Many drug
          companies provide free brand-name medications to low-income patients
        </li>
        <li>
          <strong>$4 generic programs</strong> — Walmart, Costco, and major
          pharmacy chains offer $4–$10 generic formularies
        </li>
      </ul>

      <div className="cta-block">
        <h2>Find Affordable Primary Care Near You</h2>
        <p>
          Search community health centers, DPC practices, and low-cost
          telehealth providers — all in one place.
        </p>
        <a href="/find-doctor?filter=uninsured" className="btn-primary">
          Find Affordable Doctors →
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
