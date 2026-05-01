// app/insurance/page.tsx
import { Metadata } from "next";
import { InsuranceContent } from "./insurance-content";

export const metadata: Metadata = {
  title: "Insurance Lookup — PRIMARYCARE.BOT",
  description:
    "Verify whether your insurance is accepted before scheduling. Search across major networks: Aetna, BCBS, Cigna, United, Medicare, Medicaid.",
  openGraph: {
    title: "Insurance Coverage Lookup — PRIMARYCARE.BOT",
    description: "Cross-reference insurance acceptance across the registry.",
  },
};

export default function InsurancePage() {
  return <InsuranceContent />;
}
