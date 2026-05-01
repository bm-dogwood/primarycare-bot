// app/directory/page.tsx
import { Metadata } from "next";
import { DirectoryContent } from "./directory-content";

export const metadata: Metadata = {
  title: "Directory — PRIMARYCARE.BOT",
  description:
    "Browse the full registry of primary care practitioners. Filter by specialty, insurance, modality, and acceptance status.",
  openGraph: {
    title: "Practitioner Directory — PRIMARYCARE.BOT",
    description: "A calibrated registry of primary care physicians.",
  },
};

export default function DirectoryPage() {
  return <DirectoryContent />;
}
