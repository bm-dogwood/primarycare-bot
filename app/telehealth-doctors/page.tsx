// src/app/telehealth-doctors/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.telehealthDoctors.title,
  description: SEO_PAGES.telehealthDoctors.description,
  keywords: SEO_PAGES.telehealthDoctors.keywords,
  alternates: { canonical: SEO_PAGES.telehealthDoctors.canonical },
  openGraph: {
    title: SEO_PAGES.telehealthDoctors.title,
    description: SEO_PAGES.telehealthDoctors.description,
    url: SEO_PAGES.telehealthDoctors.canonical,
  },
};

const faqs = [
  {
    question: "What conditions can a telehealth primary care doctor treat?",
    answer:
      "Telehealth primary care doctors can treat a wide range of conditions including colds, flu, allergies, sinus infections, UTIs, rashes, anxiety, depression, prescription refills, and chronic disease management for conditions like diabetes and hypertension.",
  },
  {
    question: "Is telehealth primary care covered by insurance?",
    answer:
      "Most major insurance plans now cover telehealth visits, including Medicare and Medicaid. Coverage expanded significantly after 2020. Always verify your specific plan before booking, which you can do directly on PrimaryCare.Bot.",
  },
  {
    question: "How do I prepare for a telehealth primary care appointment?",
    answer:
      "Find a private, quiet space with good lighting. Test your device's camera and microphone beforehand. Have your insurance card, current medication list, and any relevant symptoms noted. Most visits take 15–30 minutes.",
  },
  {
    question: "Can a telehealth doctor send prescriptions to my pharmacy?",
    answer:
      "Yes. Licensed primary care physicians can send electronic prescriptions directly to your preferred pharmacy during a telehealth visit, with the exception of certain controlled substances in some states.",
  },
];

export default function TelehealthDoctorsPage() {
  return (
    <SeoPageLayout
      breadcrumbs={[{ name: "Telehealth Doctors", url: "/telehealth-doctors" }]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Telehealth Primary Care Doctors: Virtual Visits From Home</h1>

      <p className="lead">
        Connect with board-certified primary care physicians via video or phone
        — no commute, no waiting room. PrimaryCare.Bot makes it easy to find and
        book telehealth appointments that fit your schedule.
      </p>

      <h2>What Is Telehealth Primary Care?</h2>
      <p>
        Telehealth primary care allows you to see a licensed physician through a
        secure video call or phone consultation. These virtual visits cover the
        same spectrum of care as in-person appointments for many conditions —
        from diagnosing a sore throat to managing ongoing chronic conditions
        like high blood pressure or type 2 diabetes.
      </p>
      <p>
        According to the American Medical Association, telehealth adoption
        surged dramatically in recent years and has remained elevated as
        patients discovered its convenience, lower costs, and comparable quality
        of care for appropriate conditions.
      </p>

      <h2>When Telehealth Is the Right Choice</h2>
      <p>Telehealth primary care is ideal for:</p>
      <ul>
        <li>
          <strong>Common illnesses</strong> — Colds, flu, allergies, sinus
          infections, and ear infections
        </li>
        <li>
          <strong>Urinary tract infections</strong> — Diagnosis and prescription
          without an in-office visit
        </li>
        <li>
          <strong>Mental health</strong> — Anxiety, depression, and stress
          management support
        </li>
        <li>
          <strong>Chronic disease management</strong> — Medication adjustments
          for diabetes, hypertension, or thyroid conditions
        </li>
        <li>
          <strong>Prescription refills</strong> — Renewing existing medications
          quickly
        </li>
        <li>
          <strong>Lab result reviews</strong> — Discussing test results and next
          steps
        </li>
        <li>
          <strong>Preventive care</strong> — Health coaching and lifestyle
          counseling
        </li>
        <li>
          <strong>Skin conditions</strong> — Rashes, acne, and eczema
          assessments
        </li>
      </ul>

      <h2>When In-Person Care Is Needed</h2>
      <p>
        While telehealth covers a wide range of needs, some situations require
        you to be seen in person. These include annual physical exams requiring
        hands-on assessment, blood draws and lab tests, vaccinations, procedures
        like stitches or joint injections, and chest pain or other emergency
        symptoms.
      </p>
      <p>
        PrimaryCare.Bot lets you filter by telehealth and in-person availability
        simultaneously, so you can find doctors who offer both — giving you
        flexibility for future visits.
      </p>

      <h2>How to Find a Telehealth Primary Care Doctor</h2>
      <p>
        Using PrimaryCare.Bot, finding a telehealth doctor takes under two
        minutes:
      </p>
      <ol>
        <li>Enter your ZIP code to find licensed physicians in your state</li>
        <li>
          Toggle the <strong>Telehealth</strong> filter to show only
          virtual-visit providers
        </li>
        <li>Select your insurance plan to confirm coverage</li>
        <li>Browse availability and book an appointment directly</li>
      </ol>

      <h2>Telehealth vs. In-Person: Cost Comparison</h2>
      <p>
        Telehealth visits are often cheaper than equivalent in-person
        appointments. Without overhead costs like facility fees, telehealth
        providers can offer lower out-of-pocket costs. For patients with
        insurance, co-pays for telehealth are typically the same as or lower
        than in-person primary care co-pays.
      </p>
      <p>
        For uninsured patients, telehealth platforms often offer transparent
        flat-rate pricing ranging from $59 to $150 per visit, compared to
        $150–$350 for a typical in-office visit.
      </p>

      <h2>Telehealth and Insurance: What You Need to Know</h2>
      <p>
        All Medicare, Medicaid, and most private insurance plans now cover
        telehealth primary care visits. The key is confirming that your specific
        plan covers the telehealth platform you choose. PrimaryCare.Bot's
        insurance lookup tool lets you filter by your exact plan to see only
        doctors whose telehealth services are covered.
      </p>

      <div className="cta-block">
        <h2>Find a Telehealth Doctor Now</h2>
        <p>
          Enter your ZIP code to browse available telehealth primary care
          providers in your state.
        </p>
        <a href="/find-doctor?type=telehealth" className="btn-primary">
          Search Telehealth Doctors →
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
