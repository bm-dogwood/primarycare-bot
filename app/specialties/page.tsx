"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const items = [
  {
    code: "01",
    name: "Internal Medicine",
    count: 28412,
    latin: "medicina interna",
    desc: "Adult primary care for complex chronic conditions, diagnostic reasoning, and longitudinal management.",
    scope: "Adults 18+",
    slug: "internal-medicine",
  },
  {
    code: "02",
    name: "Family Medicine",
    count: 24981,
    latin: "medicina familiae",
    desc: "All-ages primary care for the household — children, adults, and elders treated by one practitioner.",
    scope: "All ages",
    slug: "family-medicine",
  },
  {
    code: "03",
    name: "Geriatric Medicine",
    count: 6240,
    latin: "geras + iatros",
    desc: "Specialized primary care for adults 65+, focusing on polypharmacy, frailty, and care coordination.",
    scope: "Adults 65+",
    slug: "geriatric-medicine",
  },
  {
    code: "04",
    name: "Pediatric Primary Care",
    count: 18233,
    latin: "paidos + iatreía",
    desc: "Newborn through adolescent primary care, including developmental milestones and immunization schedules.",
    scope: "Birth – 21",
    slug: "pediatric-primary-care",
  },
  {
    code: "05",
    name: "Women's Health",
    count: 9821,
    latin: "—",
    desc: "Primary care emphasizing reproductive, hormonal, and gynecologic continuity for women and girls.",
    scope: "Women",
    slug: "womens-health",
  },
  {
    code: "06",
    name: "Preventive Medicine",
    count: 3411,
    latin: "praeventio",
    desc: "Population-health-oriented primary care: screening optimization, lifestyle counseling, vaccination strategy.",
    scope: "All ages",
    slug: "preventive-medicine",
  },
  {
    code: "07",
    name: "Adolescent Medicine",
    count: 2104,
    latin: "adolescens",
    desc: "Specialized primary care for ages 12–21, addressing developmental, mental health, and social transitions.",
    scope: "Ages 12–21",
    slug: "adolescent-medicine",
  },
  {
    code: "08",
    name: "General Practice",
    count: 11728,
    latin: "—",
    desc: "Generalist physicians providing first-contact care across the human lifespan.",
    scope: "All ages",
    slug: "general-practice",
  },
];

export default function SpecialtiesPage() {
  const router = useRouter();

  const handleSpecialtyClick = (specialty: string) => {
    // Navigate to directory with specialty filter
    router.push(`/directory?specialty=${encodeURIComponent(specialty)}`);
  };

  return (
    <div className="px-6 md:px-10 py-16 max-w-[1480px] mx-auto">
      <header className="border-b border-graphite pb-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
            § 02 — Disciplines
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95]">
            A taxonomy of{" "}
            <span className="italic text-lume">primary care.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pt-8">
          <p className="text-silver leading-relaxed">
            Primary care is not monolithic. Eight disciplines comprise the field
            — each with its own training pathway, patient population, and
            clinical posture.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-graphite border border-graphite">
        {items.map((sp) => (
          <div
            key={sp.code}
            onClick={() => handleSpecialtyClick(sp.name)}
            className="bg-obsidian p-8 md:p-10 group hover:bg-carbon transition-colors flex flex-col gap-6 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="font-mono text-[10px] text-lume tracking-[0.25em] uppercase">
                § {sp.code}
              </div>
              <div className="font-mono text-[10px] text-silver tracking-widest tabular-nums">
                {sp.count.toLocaleString()} practitioners
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-bone group-hover:text-lume transition-colors leading-tight">
                {sp.name}
              </h2>
              <div className="font-display italic text-silver text-lg mt-1">
                {sp.latin}
              </div>
            </div>
            <p className="text-silver leading-relaxed text-sm flex-1">
              {sp.desc}
            </p>
            <div className="border-t border-graphite pt-4 flex justify-between items-center">
              <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase">
                Scope · {sp.scope}
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase group-hover:text-lume transition-colors">
                Index practitioners →
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
