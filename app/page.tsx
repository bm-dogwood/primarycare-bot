"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import heroStethoscope from "@/public/hero.jpeg";
import anatomy from "@/public/anatomy.jpeg";
import medications from "@/public/medication.jpeg";
import { doctors, insurances, specialties } from "@/data/doctors";

export default function HomePage() {
  const [tele, setTele] = useState(true);
  const [accepting, setAccepting] = useState(true);
  const [zip, setZip] = useState("02906");

  return (
    <div className="bg-obsidian">
      {/* HERO — full bleed editorial */}
      <section className="relative overflow-hidden border-b border-graphite">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">
          {/* Left : oversized typography */}
          <div className="lg:col-span-7 px-6 md:px-10 lg:pl-16 pt-16 lg:pt-32 pb-16 flex flex-col justify-between relative z-10">
            <div className="font-mono text-[10px] tracking-[0.25em] text-silver uppercase flex items-center gap-3">
              <span className="size-1.5 bg-lume rounded-full lume-glow animate-lume-pulse" />
              Volume VII · Continuously calibrated
            </div>

            <div>
              <h1 className="font-display font-light leading-[0.88] tracking-tight text-bone">
                <span className="block text-[14vw] lg:text-[10rem]">
                  A precise
                </span>
                <span className="block text-[14vw] lg:text-[10rem] italic text-lume">
                  instrument
                </span>
                <span className="block text-[14vw] lg:text-[10rem]">
                  for primary care.
                </span>
              </h1>
              <p className="mt-10 max-w-xl text-lg md:text-xl text-silver leading-relaxed text-pretty">
                PRIMARYCARE.BOT is not a marketplace. It is a calibrated
                registry of primary care practitioners — verified through the
                NPPES NPI database, indexed by your insurance, locale, and
                modality of care.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] tracking-[0.22em] text-silver uppercase">
              <Link
                href="/directory"
                className="bg-lume text-obsidian px-6 py-3.5 hover:bg-bone transition-colors"
              >
                Begin calibration →
              </Link>
              <Link
                href="/journal"
                className="border border-graphite hover:border-lume px-6 py-3.5 hover:text-lume transition-colors"
              >
                Read the method
              </Link>
            </div>
          </div>

          {/* Right : framed image with markings */}
          <div className="lg:col-span-5 relative bg-carbon border-l border-graphite">
            <Image
              src={heroStethoscope}
              alt="Brass stethoscope on dark surface"
              width={1600}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian/60 via-transparent to-obsidian/40" />

            {/* corner marks */}
            <CornerMarks />

            {/* floating instrument readouts */}
            <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-4 font-mono text-[9px] tracking-[0.22em] text-bone uppercase">
              <Readout
                label="Index Density"
                value="142,389"
                sub="practitioners"
              />
              <Readout label="Coverage" value="50 states" sub="continuous" />
              <Readout label="Update Cycle" value="04:00 UTC" sub="daily" />
            </div>
          </div>
        </div>

        {/* Scrolling specialty ticker */}
        <div className="border-t border-graphite py-4 overflow-hidden bg-carbon/40">
          <div className="flex gap-12 animate-ticker whitespace-nowrap font-mono text-[11px] tracking-[0.25em] text-silver uppercase">
            {[...specialties, ...insurances.slice(0, 6), ...specialties].map(
              (item, i) => (
                <span key={i} className="flex items-center gap-12">
                  <span>{item}</span>
                  <span className="text-lume">◇</span>
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CALIBRATION CONSOLE */}
      <section className="px-6 md:px-10 py-24 max-w-[1480px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
              § 02 — Calibration
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-[0.95] mb-6">
              Set the parameters of your{" "}
              <span className="italic text-lume">care.</span>
            </h2>
            <p className="text-silver leading-relaxed">
              Every search is a measurement. Adjust the dials below to isolate
              practitioners that meet your geographic, financial, and modality
              requirements.
            </p>
          </div>

          <div className="lg:col-span-8 bg-carbon border border-graphite p-8 md:p-10 grain relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field label="Zip Code" index="01">
                <input
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-transparent border-b border-graphite focus:border-lume text-bone font-display text-3xl py-2 focus:outline-none transition-colors"
                />
              </Field>
              <Field label="Specialty" index="02">
                <select className="w-full bg-transparent border-b border-graphite focus:border-lume text-bone font-display text-3xl py-2 focus:outline-none transition-colors appearance-none cursor-pointer">
                  {specialties.map((s) => (
                    <option key={s} className="bg-carbon">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Insurance Network" index="03">
                <select className="w-full bg-transparent border-b border-graphite focus:border-lume text-bone font-display text-3xl py-2 focus:outline-none transition-colors appearance-none cursor-pointer">
                  {insurances.map((s) => (
                    <option key={s} className="bg-carbon">
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Distance Radius" index="04">
                <div className="pt-4">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    defaultValue="10"
                    className="w-full accent-lume"
                  />
                  <div className="flex justify-between font-mono text-[10px] text-silver tracking-widest uppercase mt-2">
                    <span>1 mi</span>
                    <span className="text-lume">10 mi</span>
                    <span>50 mi</span>
                  </div>
                </div>
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-8 border-t border-graphite">
              <Toggle
                label="Telehealth Capable"
                on={tele}
                onChange={() => setTele(!tele)}
              />
              <Toggle
                label="Accepting New Patients"
                on={accepting}
                onChange={() => setAccepting(!accepting)}
              />
            </div>

            <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase">
                Estimated matches: <span className="text-lume">042</span>
              </div>
              <Link
                href="/directory"
                className="bg-lume text-obsidian px-6 py-3.5 font-mono text-[10px] tracking-[0.22em] uppercase hover:bg-bone transition-colors text-center"
              >
                Run query →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="border-y border-graphite bg-carbon/30">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-graphite">
          {[
            { n: "01", label: "Doctor search by zip, insurance, specialty" },
            { n: "02", label: "Availability — accepting new patients" },
            { n: "03", label: "Insurance accepted lookup" },
            { n: "04", label: "Telehealth vs in-person filter" },
            { n: "05", label: "Verified rating aggregation" },
          ].map((c) => (
            <div
              key={c.n}
              className="p-8 group hover:bg-carbon transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
                CAPABILITY · {c.n}
              </div>
              <div className="font-display text-2xl text-bone leading-tight group-hover:text-lume transition-colors">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCES / EDITORIAL */}
      <section className="px-6 md:px-10 py-24 border-t border-graphite">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative bg-obsidian aspect-square max-w-md">
            <Image
              src={anatomy}
              alt="Anatomical line drawing of human heart"
              width={1024}
              height={1024}
              className="w-full h-full object-contain"
              loading="lazy"
            />
            <CornerMarks />
          </div>
          <div className="lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
              § 05 — Provenance
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-[0.95] mb-8">
              Every record, <span className="italic text-lume">traceable.</span>
            </h2>
            <p className="text-silver leading-relaxed mb-8 max-w-2xl">
              PRIMARYCARE.BOT synthesizes federally verified practitioner data
              with curated location and review intelligence. Every dossier links
              back to its primary source.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-graphite border border-graphite">
              {[
                {
                  name: "NPPES NPI Registry",
                  desc: "Federal practitioner identity & credential verification",
                  tag: "Public · CMS",
                },
                {
                  name: "Google Places",
                  desc: "Geographic precision & business operating data",
                  tag: "Real-time",
                },
                {
                  name: "Yelp Health",
                  desc: "Patient sentiment aggregation & review intelligence",
                  tag: "Verified",
                },
                {
                  name: "Healthgrades",
                  desc: "Quality metrics, hospital affiliation, malpractice records",
                  tag: "Indexed",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="bg-obsidian p-6 group hover:bg-carbon transition-colors"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="font-display text-2xl text-bone group-hover:text-lume transition-colors">
                      {s.name}
                    </div>
                    <div className="font-mono text-[9px] tracking-widest text-silver uppercase">
                      {s.tag}
                    </div>
                  </div>
                  <div className="text-sm text-silver">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDICATIONS / CTA */}
      <section className="relative overflow-hidden border-t border-graphite">
        <Image
          src={medications}
          alt="Amber medication vials"
          width={1280}
          height={800}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/60" />
        <div className="relative max-w-[1480px] mx-auto px-6 md:px-10 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
              § 06 — Continuity
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.92] text-balance">
              Primary care, by definition, is a{" "}
              <span className="italic text-lume">long relationship.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <p className="text-silver leading-relaxed">
              PRIMARYCARE.BOT weights physicians by panel stability and
              continuity scores, surfacing those most likely to remain your
              doctor for years — not appointments.
            </p>
            <Link
              href="/directory"
              className="bg-lume text-obsidian px-6 py-4 font-mono text-[10px] tracking-[0.22em] uppercase hover:bg-bone transition-colors w-fit"
            >
              Find your practitioner →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <div className="font-mono text-[10px] text-silver tracking-[0.22em] uppercase flex justify-between">
        <span>{label}</span>
        <span className="text-lume">[{index}]</span>
      </div>
      {children}
    </div>
  );
}

function Toggle({
  label,
  on,
  onChange,
}: {
  label: string;
  on: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="flex items-center justify-between group cursor-pointer w-full text-left"
    >
      <span
        className={`font-sans text-sm transition-colors ${
          on ? "text-bone" : "text-silver"
        }`}
      >
        {label}
      </span>
      <span
        className={`w-11 h-6 rounded-full p-0.5 flex transition-all border ${
          on
            ? "bg-lume/20 border-lume/50 justify-end"
            : "bg-graphite border-silver/30 justify-start"
        }`}
      >
        <span
          className={`size-4 rounded-full transition-colors ${
            on ? "bg-lume lume-glow" : "bg-silver/50"
          }`}
        />
      </span>
    </button>
  );
}

function CornerMarks() {
  return (
    <>
      <span className="absolute top-3 left-3 size-3 border-l border-t border-lume" />
      <span className="absolute top-3 right-3 size-3 border-r border-t border-lume" />
      <span className="absolute bottom-3 left-3 size-3 border-l border-b border-lume" />
      <span className="absolute bottom-3 right-3 size-3 border-r border-b border-lume" />
    </>
  );
}

function Readout({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-obsidian/70 border border-graphite p-3 backdrop-blur">
      <div className="text-[8px] text-silver mb-1">{label}</div>
      <div className="font-display text-xl text-lume normal-case tracking-normal">
        {value}
      </div>
      <div className="text-[8px] text-silver">{sub}</div>
    </div>
  );
}
