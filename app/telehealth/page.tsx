// app/telehealth/page.tsx
import { Metadata } from "next";
import { TelehealthContent } from "./telehealth-content";

export const metadata: Metadata = {
  title: "Telehealth Practitioners — PRIMARYCARE.BOT",
  description:
    "Primary care doctors accepting video and audio consultations. Same-week availability across multiple states.",
  openGraph: {
    title: "Telehealth Primary Care — PRIMARYCARE.BOT",
    description: "Practitioners offering video-based primary care.",
  },
};

export default function TelehealthPage() {
  return <TelehealthContent />;
}
