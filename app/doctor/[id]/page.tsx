import { notFound } from "next/navigation";
import { doctors } from "@/data/doctors";
import DoctorClient from "./doctor-client";

export async function generateStaticParams() {
  return doctors.map((doctor) => ({
    id: doctor.id,
  }));
}

interface DoctorPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return <DoctorClient doctor={doctor} />;
}

export async function generateMetadata({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return {
      title: "Doctor Not Found",
      description: "The requested practitioner dossier could not be found.",
    };
  }

  return {
    title: `Dr. ${doctor.name}, ${doctor.credentials} — PRIMARYCARE.BOT`,
    description: doctor.bio,
    openGraph: {
      title: `Dr. ${doctor.name} — ${doctor.specialty}`,
      description: doctor.bio,
      images: [doctor.portrait],
    },
  };
}
