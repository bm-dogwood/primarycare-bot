"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Type definitions for doctor data
interface Doctor {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  subSpecialty: string;
  portrait: string;
  npi: string;
  bio: string;
  matchIndex: number;
  rating: number;
  reviews: number;
  yearsPractice: number;
  acceptingNew: boolean;
  address: string;
  zip: string;
  distance: string;
  nextAvailable: string;
  telehealth: boolean;
  education: string;
  languages: string[];
  insurances: string[];
}

interface DoctorClientProps {
  doctor: Doctor;
}

export default function DoctorClient({ doctor }: DoctorClientProps) {
  const [saved, setSaved] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const handleSaveToDossier = () => {
    setSaved(true);
    // Here you would typically save to localStorage, database, or state management
    setTimeout(() => setSaved(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Dr. ${doctor.name}, ${doctor.credentials}`,
          text: doctor.bio,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled or failed");
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(window.location.href);
      setShowShareTooltip(true);
      setTimeout(() => setShowShareTooltip(false), 2000);
    }
  };

  const handleRequestAppointment = () => {
    // Here you would typically open a modal or navigate to a booking system
    console.log("Request appointment for:", doctor.name);
    alert(
      `Appointment request sent for Dr. ${doctor.name}. We'll contact you within 24 hours.`
    );
  };

  return (
    <div className="px-6 md:px-10 py-12 max-w-[1480px] mx-auto">
      {/* Breadcrumb */}
      <nav className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase mb-12 flex items-center gap-3">
        <Link href="/directory" className="hover:text-lume transition-colors">
          Directory
        </Link>
        <span>/</span>
        <Link href="/specialties" className="hover:text-lume transition-colors">
          {doctor.specialty}
        </Link>
        <span>/</span>
        <span className="text-bone">Dr. {doctor.name}</span>
      </nav>

      {/* Hero */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-b border-graphite pb-16 mb-16">
        <div className="lg:col-span-4">
          <div className="relative bg-graphite aspect-[4/5] overflow-hidden">
            <Image
              src={doctor.portrait}
              alt={`Portrait of Dr. ${doctor.name}`}
              width={800}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
            <span className="absolute top-3 left-3 size-3 border-l border-t border-lume" />
            <span className="absolute top-3 right-3 size-3 border-r border-t border-lume" />
            <span className="absolute bottom-3 left-3 size-3 border-l border-b border-lume" />
            <span className="absolute bottom-3 right-3 size-3 border-r border-b border-lume" />
          </div>
          <div className="mt-4 font-mono text-[9px] tracking-widest text-silver uppercase flex justify-between">
            <span>NPI · {doctor.npi}</span>
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-lume rounded-full animate-lume-pulse" />{" "}
              Verified
            </span>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
            {doctor.specialty} · {doctor.subSpecialty}
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95] mb-6">
            Dr. {doctor.name},{" "}
            <span className="italic text-lume">{doctor.credentials}</span>
          </h1>
          <p className="text-silver text-lg leading-relaxed max-w-2xl mb-8">
            {doctor.bio}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-graphite pt-8 mt-auto">
            <Stat label="Match Index" value={`${doctor.matchIndex}%`} mono />
            <Stat
              label="Rating"
              value={`${doctor.rating} / 5`}
              mono
              sub={`${doctor.reviews} reviews`}
            />
            <Stat
              label="Years Practice"
              value={String(doctor.yearsPractice)}
              mono
            />
            <Stat
              label="Status"
              value={doctor.acceptingNew ? "Accepting" : "Waitlist"}
              sub={doctor.acceptingNew ? "New patients" : "Closed panel"}
            />
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={handleRequestAppointment}
              className="bg-lume text-obsidian px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase hover:bg-bone transition-colors"
            >
              Request appointment →
            </button>
            <button
              onClick={handleSaveToDossier}
              className="border border-graphite hover:border-lume px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase hover:text-lume transition-colors relative"
            >
              {saved ? "✓ Saved to dossier" : "Save to dossier"}
            </button>
            <div className="relative">
              <button
                onClick={handleShare}
                className="border border-graphite hover:border-lume px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase hover:text-lume transition-colors"
              >
                Share
              </button>
              {showShareTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-lume text-obsidian text-xs rounded whitespace-nowrap">
                  Link copied!
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Detail grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <Section title="Practice & Locale" code="01" className="lg:col-span-4">
          <DetailRow label="Address" value={doctor.address} />
          <DetailRow label="Zip" value={doctor.zip} />
          <DetailRow label="Distance" value={doctor.distance} />
          <DetailRow label="Next available" value={doctor.nextAvailable} hi />
          <DetailRow
            label="Modality"
            value={
              doctor.telehealth ? "Telehealth + In-person" : "In-person only"
            }
          />
        </Section>

        <Section title="Credentials" code="02" className="lg:col-span-4">
          <DetailRow label="Education" value={doctor.education} />
          <DetailRow
            label="Years"
            value={`${doctor.yearsPractice} in practice`}
          />
          <DetailRow label="NPI" value={doctor.npi} mono />
          <DetailRow label="Languages" value={doctor.languages.join(" · ")} />
        </Section>

        <Section title="Insurance Accepted" code="03" className="lg:col-span-4">
          <ul className="space-y-1.5">
            {doctor.insurances.map((ins) => (
              <li
                key={ins}
                className="flex items-center justify-between text-sm py-1.5 border-b border-graphite/50 group hover:border-lume/30 transition-colors"
              >
                <span className="text-bone group-hover:text-lume transition-colors">
                  {ins}
                </span>
                <span className="font-mono text-[9px] tracking-widest text-lume uppercase">
                  In-network ✓
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* Reviews mock */}
      <section className="mt-24 border-t border-graphite pt-16">
        <div className="flex items-baseline justify-between border-b border-graphite pb-4 mb-10">
          <h2 className="font-display text-4xl">
            Aggregated patient sentiment
          </h2>
          <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase">
            {doctor.reviews} reviews · synthesized
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Listens carefully", v: 96 },
            { label: "Explains conditions clearly", v: 94 },
            { label: "On-time appointments", v: 78 },
            { label: "Office staff responsiveness", v: 88 },
            { label: "Follow-up communication", v: 91 },
            { label: "Trust & rapport", v: 97 },
          ].map((m) => (
            <div
              key={m.label}
              className="border border-graphite p-6 hover:border-lume/30 transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase mb-3">
                {m.label}
              </div>
              <div className="font-display text-4xl text-lume tabular-nums mb-3">
                {m.v}%
              </div>
              <div className="h-1 bg-graphite">
                <div
                  className="h-full bg-lume lume-glow transition-all duration-1000"
                  style={{ width: `${m.v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby practitioners suggestion */}
      <section className="mt-24 pt-8">
        <div className="border-t border-graphite pt-12">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-display text-3xl font-light">
              Nearby practitioners
            </h2>
            <Link
              href="/directory"
              className="font-mono text-[9px] tracking-[0.22em] text-silver uppercase hover:text-lume transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NearbyCard
              name="Sarah Chen, MD"
              specialty="Internal Medicine"
              distance="0.8 mi"
              accepting={true}
            />
            <NearbyCard
              name="Michael Rodriguez, DO"
              specialty="Family Medicine"
              distance="1.2 mi"
              accepting={false}
            />
            <NearbyCard
              name="Elena Vasquez, MD"
              specialty="Pediatrics"
              distance="1.5 mi"
              accepting={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper components
function Stat({
  label,
  value,
  sub,
  mono,
}: {
  label: string;
  value: string;
  sub?: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[9px] text-silver tracking-[0.22em] uppercase">
        {label}
      </span>
      <span
        className={`${
          mono ? "font-mono tabular-nums" : "font-sans"
        } text-xl text-bone`}
      >
        {value}
      </span>
      {sub && (
        <span className="font-mono text-[9px] text-silver tracking-widest uppercase">
          {sub}
        </span>
      )}
    </div>
  );
}

function Section({
  title,
  code,
  className,
  children,
}: {
  title: string;
  code: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={className}>
      <div className="border-b border-graphite pb-3 mb-5 flex justify-between">
        <h3 className="font-display text-2xl text-bone">{title}</h3>
        <span className="font-mono text-[10px] tracking-[0.22em] text-lume uppercase">
          [{code}]
        </span>
      </div>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

function DetailRow({
  label,
  value,
  mono,
  hi,
}: {
  label: string;
  value: string;
  mono?: boolean;
  hi?: boolean;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline py-2 border-b border-graphite/50">
      <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-silver">
        {label}
      </dt>
      <dd
        className={`${mono ? "font-mono" : "font-sans"} text-sm ${
          hi ? "text-lume" : "text-bone"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function NearbyCard({
  name,
  specialty,
  distance,
  accepting,
}: {
  name: string;
  specialty: string;
  distance: string;
  accepting: boolean;
}) {
  return (
    <Link href="#" className="group">
      <div className="border border-graphite p-4 hover:border-lume/50 transition-colors">
        <div className="font-display text-xl text-bone group-hover:text-lume transition-colors mb-1">
          {name}
        </div>
        <div className="font-mono text-[9px] text-silver uppercase tracking-widest mb-2">
          {specialty}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-silver">{distance}</span>
          <span
            className={`font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 ${
              accepting
                ? "bg-lume/20 text-lume border border-lume/30"
                : "bg-graphite text-silver"
            }`}
          >
            {accepting ? "Accepting" : "Waitlist"}
          </span>
        </div>
      </div>
    </Link>
  );
}
