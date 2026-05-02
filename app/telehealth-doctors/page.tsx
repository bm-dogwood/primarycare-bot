"use client";

import Link from "next/link";
import { useDoctors } from "@/lib/useDoctors";
import { DoctorRow } from "@/components/doctor-card";

export function TelehealthContent() {
  const { doctors, loading, source } = useDoctors({ limit: 30 });
  const teleDocs = doctors.filter((d) => d.telehealth);

  return (
    <div>
      <section className="border-b border-graphite px-6 md:px-10 py-20 max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
              § 04 — Modality
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95]">
              Care without <span className="italic text-lume">geography.</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-silver leading-relaxed">
              Telehealth is not a fallback. For chronic management, medication
              adjustment, mental health continuity, and most preventive
              consultations, video care is clinically equivalent to in-person.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-graphite border border-graphite">
          <Panel
            title="Telehealth"
            tag="Recommended for"
            items={[
              "Chronic condition follow-up (diabetes, hypertension)",
              "Medication review & adjustment",
              "Mental health & talk therapy",
              "Lab result interpretation",
              "Minor acute concerns (rashes, congestion)",
              "Second opinions",
            ]}
          />
          <Panel
            title="In-Person"
            tag="Required for"
            items={[
              "Annual physical examinations",
              "Procedures, biopsies, injections",
              "Imaging that requires presence",
              "Vaccinations & immunizations",
              "Acute pain requiring palpation",
              "Pediatric well-child visits",
            ]}
          />
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 max-w-[1480px] mx-auto">
        <div className="flex items-baseline justify-between border-b border-graphite pb-5 mb-12 font-mono text-[10px] tracking-[0.22em] uppercase text-silver">
          <span>Telehealth-capable practitioners</span>
          <span>
            Results:{" "}
            <span className="text-lume tabular-nums">
              {loading ? "···" : String(teleDocs.length).padStart(3, "0")}
            </span>
          </span>
        </div>

        {loading ? (
          <div className="flex flex-col gap-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border border-graphite p-8 animate-pulse h-40"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {teleDocs.map((d) => (
              <DoctorRow key={d.id} doctor={d} />
            ))}
          </div>
        )}

        <div className="mt-16 border border-graphite p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-2">
              Want both?
            </div>
            <div className="font-display text-3xl text-bone">
              View the entire registry — telehealth and in-person combined.
            </div>
          </div>
          <Link
            href="/directory"
            className="bg-lume text-obsidian px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase hover:bg-bone transition-colors whitespace-nowrap"
          >
            Open directory →
          </Link>
        </div>
      </section>
    </div>
  );
}

function Panel({
  title,
  tag,
  items,
}: {
  title: string;
  tag: string;
  items: string[];
}) {
  return (
    <div className="bg-obsidian p-8 md:p-10">
      <div className="font-mono text-[10px] text-lume tracking-[0.25em] uppercase mb-2">
        {tag}
      </div>
      <h3 className="font-display text-4xl text-bone mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-silver">
            <span className="size-1 rounded-full bg-lume mt-2.5 shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
