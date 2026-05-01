// src/app/find-doctor/page.tsx
import type { Metadata } from "next";
import {
  SEO_PAGES,
  generateFAQSchema,
  generateProductSchema,
  SITE_URL,
} from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.findDoctor.title,
  description: SEO_PAGES.findDoctor.description,
  keywords: SEO_PAGES.findDoctor.keywords,
  alternates: { canonical: SEO_PAGES.findDoctor.canonical },
  openGraph: {
    title: SEO_PAGES.findDoctor.title,
    description: SEO_PAGES.findDoctor.description,
    url: SEO_PAGES.findDoctor.canonical,
    images: [
      { url: `${SITE_URL}/og-find-doctor.png`, width: 1200, height: 630 },
    ],
  },
};

const faqs = [
  {
    question: "How accurate is the doctor availability information?",
    answer:
      "PrimaryCare.Bot pulls availability data from practice management systems and insurer directories multiple times per day. While we strive for real-time accuracy, we recommend calling the practice to confirm availability for same-day appointments.",
  },
  {
    question: "Can I book an appointment directly through PrimaryCare.Bot?",
    answer:
      "Yes. For practices that have enabled online booking, you can schedule an appointment directly from the doctor's profile page. For others, we provide the practice's direct phone number and address.",
  },
  {
    question: "What information do I need to search for a doctor?",
    answer:
      "You only need your ZIP code to start searching. Adding your insurance plan and preferred visit type (telehealth or in-person) will narrow results to the most relevant options.",
  },
];

export default function FindDoctorPage() {
  return (
    <SeoPageLayout
      breadcrumbs={[{ name: "Find a Doctor", url: "/find-doctor" }]}
      schemas={[generateProductSchema(), generateFAQSchema(faqs)]}
    >
      <h1>Find a Primary Care Doctor</h1>
      <p className="lead">
        Search by ZIP code, filter by insurance and specialty, and find primary
        care doctors with real-time availability near you.
      </p>

      {/* Search Form */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f5c7a, #1a7fa8)",
          borderRadius: 20,
          padding: "40px 32px",
          marginBottom: 40,
        }}
      >
        <form action="/find-doctor" method="get">
          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <div>
              <label
                htmlFor="zip"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: 8,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                ZIP Code *
              </label>
              <input
                id="zip"
                name="zip"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                placeholder="e.g. 10001"
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "none",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div>
              <label
                htmlFor="insurance"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: 8,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Insurance Plan
              </label>
              <select
                id="insurance"
                name="insurance"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "none",
                  fontSize: "1rem",
                }}
              >
                <option value="">Any Insurance</option>
                <option value="aetna">Aetna</option>
                <option value="bcbs">BlueCross BlueShield</option>
                <option value="cigna">Cigna</option>
                <option value="humana">Humana</option>
                <option value="medicare">Medicare</option>
                <option value="medicaid">Medicaid</option>
                <option value="united">UnitedHealthcare</option>
                <option value="none">No Insurance / Self-Pay</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="type"
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: 8,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                Visit Type
              </label>
              <select
                id="type"
                name="type"
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: 10,
                  border: "none",
                  fontSize: "1rem",
                }}
              >
                <option value="">Any</option>
                <option value="telehealth">Telehealth Only</option>
                <option value="in-person">In-Person Only</option>
                <option value="both">Telehealth + In-Person</option>
              </select>
            </div>
          </div>

          {/* Quick filters */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {[
              {
                name: "accepting",
                value: "true",
                label: "✓ Accepting New Patients",
              },
              { name: "sort", value: "rating", label: "★ Sort by Rating" },
              {
                name: "availability",
                value: "week",
                label: "📅 Available This Week",
              },
            ].map((filter) => (
              <label
                key={filter.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                <input
                  type="checkbox"
                  name={filter.name}
                  value={filter.value}
                  style={{ accentColor: "#00c896" }}
                />
                {filter.label}
              </label>
            ))}
          </div>

          <button
            type="submit"
            style={{
              marginTop: 24,
              background: "#00c896",
              color: "#093d52",
              padding: "14px 36px",
              borderRadius: 100,
              border: "none",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              display: "block",
              width: "100%",
            }}
          >
            Search Primary Care Doctors →
          </button>
        </form>
      </div>

      {/* FAQ */}
      <h2>How It Works</h2>
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
