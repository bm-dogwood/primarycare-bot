// src/app/best-rated-primary-care/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.bestRated.title,
  description: SEO_PAGES.bestRated.description,
  keywords: SEO_PAGES.bestRated.keywords,
  alternates: { canonical: SEO_PAGES.bestRated.canonical },
  openGraph: {
    title: SEO_PAGES.bestRated.title,
    description: SEO_PAGES.bestRated.description,
    url: SEO_PAGES.bestRated.canonical,
  },
};

const faqs = [
  {
    question: "How does PrimaryCare.Bot calculate doctor ratings?",
    answer:
      "We aggregate verified patient reviews from multiple platforms including Google, Healthgrades, Zocdoc, and Vitals. Ratings are weighted by recency and volume, then normalized to a 5-star scale. We only include reviews from verified patients.",
  },
  {
    question: "What makes a top-rated primary care doctor?",
    answer:
      "The best-rated primary care doctors consistently score high on: listening attentively to patients, explaining diagnoses clearly, being punctual, having a friendly and knowledgeable staff, and following up on test results and referrals promptly.",
  },
  {
    question: "Should I always choose the highest-rated doctor?",
    answer:
      "Ratings are one important factor, but not the only one. Also consider whether the doctor accepts your insurance, is accepting new patients, has availability that works for your schedule, and offers the services you need. A 4.6-star doctor who's available next week may serve you better than a 5-star doctor with a 3-month wait.",
  },
  {
    question: "Can I filter for specific patient demographics in reviews?",
    answer:
      "Yes. PrimaryCare.Bot lets you view reviews by condition, age group, and visit type so you can find doctors with the best track record for patients with your specific health profile.",
  },
];

export default function BestRatedPage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        { name: "Best Rated Primary Care", url: "/best-rated-primary-care" },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>
        Best Rated Primary Care Doctors: Find Top-Reviewed Physicians Near You
      </h1>

      <p className="lead">
        Patient ratings reveal what clinical credentials alone can&apos;t: how a
        doctor actually communicates, whether the office runs on time, and
        whether patients feel heard. PrimaryCare.Bot aggregates reviews from
        verified patients across multiple platforms so you can find the best
        doctor, not just any doctor.
      </p>

      <h2>Why Patient Ratings Matter for Primary Care</h2>
      <p>
        A Harvard Medical School study found that patients who rated their
        physicians highly on communication and respect were significantly more
        likely to follow treatment plans, attend follow-up appointments, and
        report better health outcomes. Bedside manner isn&apos;t a luxury — it's
        a measurable driver of health results.
      </p>
      <p>
        For primary care specifically, the patient-physician relationship is
        long-term. Unlike a surgeon you may see once, your PCP will manage your
        health over years or decades. Choosing a highly rated doctor you connect
        with has compounding benefits.
      </p>

      <h2>What Our Rating Algorithm Measures</h2>
      <p>
        PrimaryCare.Bot's composite score aggregates and normalizes ratings
        across six dimensions:
      </p>

      <h3>1. Communication & Listening</h3>
      <p>
        Does the doctor give patients time to explain symptoms? Do they speak in
        plain language? Do they answer questions thoroughly? This is the most
        heavily weighted category because it has the strongest correlation with
        patient satisfaction and adherence.
      </p>

      <h3>2. Wait Time & Punctuality</h3>
      <p>
        Both appointment availability (days to first visit) and in-office wait
        times are measured. Doctors who run on time and have short in-office
        waits score significantly higher.
      </p>

      <h3>3. Staff & Office Experience</h3>
      <p>
        Receptionist helpfulness, ease of scheduling, billing accuracy, and
        nurse or medical assistant quality all factor into the overall
        experience rating.
      </p>

      <h3>4. Follow-Through on Results and Referrals</h3>
      <p>
        Top-rated doctors communicate lab results promptly and follow through on
        specialist referrals without patients needing to chase them down.
      </p>

      <h3>5. Thoroughness of Care</h3>
      <p>
        Patients rate whether they felt the doctor was thorough in their
        examination, asked the right questions, and didn't rush through the
        appointment.
      </p>

      <h3>6. Telehealth Experience (when applicable)</h3>
      <p>
        For providers offering virtual visits, we separately track
        telehealth-specific ratings for technology ease, video quality, and the
        quality of virtual-only consultations.
      </p>

      <h2>How to Read Doctor Ratings</h2>
      <p>
        Don&apos;t just look at the star average — look at the number of reviews
        and recency. A doctor with 4.8 stars from 12 reviews is less reliable
        than one with 4.5 stars from 340 reviews. On PrimaryCare.Bot, you can
        filter by minimum review count to ensure statistical reliability.
      </p>
      <p>
        Also pay attention to consistent themes in negative reviews. A handful
        of bad reviews mentioning long wait times is different from a pattern of
        reviews citing rushed appointments or dismissed concerns.
      </p>

      <h2>Top Characteristics of Highly Rated Primary Care Physicians</h2>
      <ul>
        <li>
          Spends adequate time per appointment (national average: 18 minutes)
        </li>
        <li>
          Uses a patient portal for easy communication and prescription requests
        </li>
        <li>Offers same-day or next-day sick appointments</li>
        <li>Has in-house lab and imaging to reduce referral bottlenecks</li>
        <li>Maintains after-hours nurse line or on-call coverage</li>
        <li>Proactively follows up on test results and abnormal findings</li>
      </ul>

      <div className="cta-block">
        <h2>Find Top-Rated Doctors Near You</h2>
        <p>
          Search by ZIP and sort by highest-rated to find primary care
          physicians your neighbors trust.
        </p>
        <a href="/find-doctor?sort=rating" className="btn-primary">
          Browse Top-Rated Doctors →
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
