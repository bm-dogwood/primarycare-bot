// src/app/doctors-accepting-new-patients/page.tsx
import type { Metadata } from "next";
import { SEO_PAGES, generateFAQSchema } from "@/lib/seo";
import SeoPageLayout from "@/components/SeoPageLayout";

export const metadata: Metadata = {
  title: SEO_PAGES.acceptingNewPatients.title,
  description: SEO_PAGES.acceptingNewPatients.description,
  keywords: SEO_PAGES.acceptingNewPatients.keywords,
  alternates: { canonical: SEO_PAGES.acceptingNewPatients.canonical },
  openGraph: {
    title: SEO_PAGES.acceptingNewPatients.title,
    description: SEO_PAGES.acceptingNewPatients.description,
    url: SEO_PAGES.acceptingNewPatients.canonical,
  },
};

const faqs = [
  {
    question: "Why do some primary care doctors not accept new patients?",
    answer:
      "Primary care physicians have a limited number of patients they can effectively manage, called their patient panel. When a panel is full, the doctor stops accepting new patients to maintain quality of care for existing patients. Panel sizes typically range from 1,500 to 2,500 patients.",
  },
  {
    question: "How can I find a doctor accepting new patients quickly?",
    answer:
      "Use PrimaryCare.Bot's 'Accepting New Patients' filter to see only available doctors. You can further filter by ZIP code, insurance, and same-week availability to find the fastest option near you.",
  },
  {
    question: "What documents do I need when switching primary care doctors?",
    answer:
      "Bring your insurance card, photo ID, a list of current medications, and any known allergies. Request medical records from your previous doctor — most practices can transfer them electronically within a few days.",
  },
  {
    question:
      "Can I see a doctor who isn't accepting new patients in an emergency?",
    answer:
      "Doctors who are not accepting new patients may still be able to see you for urgent matters through urgent care facilities or emergency departments. However, for ongoing primary care, you'll need to find a physician with an open panel.",
  },
];

export default function AcceptingNewPatientsPage() {
  return (
    <SeoPageLayout
      breadcrumbs={[
        {
          name: "Doctors Accepting New Patients",
          url: "/doctors-accepting-new-patients",
        },
      ]}
      schemas={[generateFAQSchema(faqs)]}
    >
      <h1>Primary Care Doctors Accepting New Patients Near You</h1>

      <p className="lead">
        Finding a primary care doctor with an open panel shouldn't take weeks of
        phone calls. PrimaryCare.Bot's real-time availability filter shows only
        doctors who are actively welcoming new patients right now.
      </p>

      <h2>
        Why Finding a Doctor Accepting New Patients Is Harder Than It Used to Be
      </h2>
      <p>
        The United States is facing a primary care physician shortage. The
        Association of American Medical Colleges projects a shortage of up to
        48,000 primary care physicians by 2034. Combined with growing demand
        from aging baby boomers and expanded insurance coverage, this means more
        doctors have full patient panels — making it harder for patients to find
        available care.
      </p>
      <p>
        In some urban markets, waitlists for new patients at popular practices
        can stretch 3 to 6 months. This is why using a real-time search tool
        that verifies current availability is essential.
      </p>

      <h2>How to Find a Doctor Accepting New Patients</h2>
      <p>
        Follow these steps for the fastest path to a new primary care provider:
      </p>
      <ol>
        <li>
          <strong>Start with your insurance directory</strong> — Your insurer's
          provider directory is a starting point, though it's often outdated.
          Cross-reference any doctor you find on PrimaryCare.Bot to confirm
          current availability.
        </li>
        <li>
          <strong>Use the availability filter</strong> — On PrimaryCare.Bot,
          enable the "Accepting New Patients" toggle to filter results in real
          time.
        </li>
        <li>
          <strong>Check telehealth options</strong> — Telehealth-first primary
          care practices often have shorter waitlists since they serve larger
          geographic areas with lower overhead.
        </li>
        <li>
          <strong>Consider community health centers</strong> — Federally
          Qualified Health Centers (FQHCs) are required to serve all patients
          regardless of ability to pay and often have availability when private
          practices do not.
        </li>
        <li>
          <strong>Direct Primary Care (DPC)</strong> — DPC practices operate on
          a monthly membership model outside of insurance, giving members
          same-day access. Many DPCs have immediate availability.
        </li>
      </ol>

      <h2>Questions to Ask Before Booking</h2>
      <p>
        Before scheduling your first appointment with a new primary care doctor,
        confirm the following:
      </p>
      <ul>
        <li>Do you currently accept [your insurance plan name]?</li>
        <li>Are you accepting new patients for routine and preventive care?</li>
        <li>What is the wait time for a new patient physical exam?</li>
        <li>Do you offer telehealth visits?</li>
        <li>What is your protocol for urgent same-day appointments?</li>
        <li>
          How do you prefer patients to communicate between visits (patient
          portal, phone)?
        </li>
      </ul>

      <h2>What to Expect at Your First Primary Care Appointment</h2>
      <p>
        A new patient appointment is typically longer than follow-up visits —
        usually 45 to 60 minutes. Your doctor will review your complete medical
        history, current medications, family history, and lifestyle factors.
        Expect a comprehensive physical exam and potentially lab work or
        referrals. This visit establishes your baseline health record with your
        new provider.
      </p>

      <h2>Tips for Switching Primary Care Doctors</h2>
      <ul>
        <li>
          Request a transfer of medical records from your old provider before
          your first appointment
        </li>
        <li>
          Bring a written list of all current medications and supplements with
          dosages
        </li>
        <li>Note any specialist relationships you want to maintain</li>
        <li>Bring your insurance card and photo ID</li>
        <li>Arrive 15–20 minutes early for new patient paperwork</li>
      </ul>

      <div className="cta-block">
        <h2>Find Doctors With Open Availability Now</h2>
        <p>
          Real-time data. No phone calls. Just enter your ZIP and filter by
          "Accepting New Patients."
        </p>
        <a href="/find-doctor?accepting=true" className="btn-primary">
          Find Available Doctors →
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
