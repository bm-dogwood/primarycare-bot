// src/app/urgent-care-vs-primary-care/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.urgentCareVsPrimary.title,
  description: SEO_PAGES.urgentCareVsPrimary.description,
  keywords: SEO_PAGES.urgentCareVsPrimary.keywords,
  alternates: { canonical: SEO_PAGES.urgentCareVsPrimary.canonical },
  openGraph: {
    title: SEO_PAGES.urgentCareVsPrimary.title,
    description: SEO_PAGES.urgentCareVsPrimary.description,
    url: SEO_PAGES.urgentCareVsPrimary.canonical,
  },
};

const faqs = [
  {
    question: "Is urgent care cheaper than primary care?",
    answer:
      "It depends on your insurance. With insurance, urgent care co-pays are typically $50–$100, while primary care co-pays are $20–$40. Without insurance, urgent care visits average $150–$200 versus $100–$200 for primary care. For routine care, primary care is almost always the more cost-effective choice.",
  },
  {
    question: "Can urgent care serve as my regular doctor?",
    answer:
      "No. Urgent care is designed for one-time, acute visits — not ongoing care management. They do not maintain your medical history, manage chronic conditions, provide referrals to specialists, or offer preventive care services. These functions require a primary care physician.",
  },
  {
    question:
      "When should I go to the ER instead of urgent care or primary care?",
    answer:
      "Go to the emergency room immediately for: chest pain or pressure, difficulty breathing, signs of stroke (face drooping, arm weakness, speech difficulty), severe bleeding, loss of consciousness, head trauma, or suspected poisoning.",
  },
  {
    question:
      "Can urgent care prescribe the same medications as a primary care doctor?",
    answer:
      "Urgent care physicians can prescribe many common medications, but they typically won't prescribe long-term controlled substances, refill maintenance medications for chronic conditions, or make complex medication adjustments that require ongoing monitoring.",
  },
];

export default function UrgentCareVsPrimaryCarePage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          name: "Urgent Care vs Primary Care",
          url: "/urgent-care-vs-primary-care",
        },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Urgent Care vs. Primary Care: Which Should You Choose?</h1>

      <p className="lead">
        Choosing the right type of care at the right time saves you money,
        reduces wait times, and gets you better treatment. Here&apos;s how to
        decide between urgent care and primary care — and when the emergency
        room is the right call.
      </p>

      <h2>The Short Answer</h2>
      <p>
        <strong>Primary care</strong> is for preventive care, chronic condition
        management, routine checkups, and non-emergency illnesses when you can
        wait for an appointment.
        <strong> Urgent care</strong> is for acute conditions that need prompt
        attention today but are not life-threatening. The <strong>ER</strong> is
        for emergencies.
      </p>

      <h2>When to See Your Primary Care Doctor</h2>
      <p>
        Your primary care physician should be your first point of contact for
        the vast majority of health needs. Unlike urgent care, your PCP
        maintains your complete health history, understands your medications and
        allergies, and can provide coordinated, continuous care.
      </p>
      <ul>
        <li>Annual physicals and preventive health screenings</li>
        <li>
          Chronic disease management (diabetes, hypertension, asthma, thyroid
          disorders)
        </li>
        <li>Mental health concerns — anxiety, depression, or sleep problems</li>
        <li>Follow-up care after hospitalization or specialist visits</li>
        <li>Non-urgent illnesses when you can wait 1–3 days</li>
        <li>Prescription management and refills</li>
        <li>Referrals to specialists</li>
        <li>Routine lab work and health monitoring</li>
        <li>Vaccinations and immunizations</li>
        <li>Women's health — Pap smears, birth control, prenatal referrals</li>
      </ul>

      <h2>When Urgent Care Makes Sense</h2>
      <p>
        Urgent care centers are the right choice when you need prompt care for a
        non-emergency condition and your primary care doctor doesn't have
        same-day availability. Modern urgent care centers are well-equipped for
        many acute needs.
      </p>
      <ul>
        <li>
          Minor injuries — sprains, strains, small lacerations requiring
          stitches
        </li>
        <li>Sinus infections and ear infections when you need same-day care</li>
        <li>Urinary tract infections</li>
        <li>Minor burns or cuts</li>
        <li>Flu or COVID testing and treatment</li>
        <li>Eye infections or pink eye</li>
        <li>X-rays for suspected minor fractures</li>
        <li>Insect bites or minor allergic reactions</li>
      </ul>

      <h2>Cost Comparison: Urgent Care vs. Primary Care</h2>
      <p>
        For patients with insurance, the cost difference between urgent care and
        primary care can be significant. Primary care visits typically carry
        lower co-pays ($20–$40) compared to urgent care ($50–$150). Without
        insurance, primary care visit costs at community health centers can be
        as low as $0 based on income — whereas urgent care centers charge a flat
        fee regardless of ability to pay.
      </p>
      <p>
        Choosing urgent care for conditions that could have waited for a primary
        care appointment costs Americans an estimated $32 billion in unnecessary
        spending annually, according to the American Journal of Emergency
        Medicine.
      </p>

      <h2>Wait Times: What to Expect</h2>
      <p>
        Primary care same-day or next-day appointments are available at many
        practices — use PrimaryCare.Bot's availability filter to find them.
        Telehealth primary care often has same-hour availability with zero
        travel time.
      </p>
      <p>
        Urgent care wait times vary widely: from 20 minutes at off-peak times to
        over 2 hours during flu season or evening hours.
      </p>

      <h2>The Case for Having Both</h2>
      <p>
        The ideal healthcare setup includes a trusted primary care physician for
        ongoing care combined with knowledge of your nearest quality urgent care
        center for after-hours acute needs. Many primary care practices also now
        offer extended hours and telehealth to reduce the situations where
        urgent care is needed.
      </p>

      <div className="cta-block">
        <h2>Find a Primary Care Doctor With Same-Day Availability</h2>
        <p>
          Many primary care doctors offer telehealth and same-day appointments —
          reducing your urgent care trips.
        </p>
        <a href="/find-doctor?availability=same-day" className="btn-primary">
          Find Available Primary Care →
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
