// app/directory/directory-content.tsx
"use client";

import { useMemo, useState } from "react";
import { doctors, insurances, specialties } from "@/data/doctors";
import { DoctorRow } from "@/components/doctor-card";

export function DirectoryContent() {
  const [specialty, setSpecialty] = useState<string>("All");
  const [insurance, setInsurance] = useState<string>("All");
  const [tele, setTele] = useState<"any" | "tele" | "person">("any");
  const [accepting, setAccepting] = useState<boolean>(false);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      if (specialty !== "All" && d.specialty !== specialty) return false;
      if (insurance !== "All" && !d.insurances.includes(insurance))
        return false;
      if (tele === "tele" && !d.telehealth) return false;
      if (tele === "person" && d.distance === "Telehealth") return false;
      if (accepting && !d.acceptingNew) return false;
      return true;
    });
  }, [specialty, insurance, tele, accepting]);

  return (
    <div className="px-6 md:px-10 py-16 max-w-[1480px] mx-auto">
      <header className="border-b border-graphite pb-8 mb-10">
        <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
          § 01 — Registry Index
        </div>
        <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95]">
          The complete <span className="italic text-lume">directory.</span>
        </h1>
        <p className="mt-6 text-silver max-w-2xl leading-relaxed">
          {filtered.length} practitioners match the current parameters. Adjust
          the dials in the left column to refine the selection.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Filters sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start space-y-8">
          <FilterBlock label="Specialty" index="01">
            <FilterList
              items={["All", ...specialties]}
              active={specialty}
              onChange={setSpecialty}
            />
          </FilterBlock>
          <FilterBlock label="Insurance" index="02">
            <FilterList
              items={["All", ...insurances]}
              active={insurance}
              onChange={setInsurance}
            />
          </FilterBlock>
          <FilterBlock label="Modality" index="03">
            <FilterList
              items={[
                { k: "any", v: "Any" },
                { k: "tele", v: "Telehealth" },
                { k: "person", v: "In-person" },
              ]}
              active={tele}
              onChange={(v) => setTele(v as typeof tele)}
            />
          </FilterBlock>
          <FilterBlock label="Status" index="04">
            <button
              onClick={() => setAccepting(!accepting)}
              className={`w-full text-left font-sans text-sm py-2 border-b transition-colors ${
                accepting
                  ? "text-lume border-lume"
                  : "text-silver border-graphite hover:text-bone"
              }`}
            >
              ▸ Accepting new patients only
            </button>
          </FilterBlock>
        </aside>

        {/* Results */}
        <section className="lg:col-span-9">
          <div className="flex items-baseline justify-between border-b border-graphite pb-5 mb-12 font-mono text-[10px] tracking-[0.22em] uppercase text-silver">
            <span>Sorted by · Match Index ↓</span>
            <span>
              Results:{" "}
              <span className="text-lume tabular-nums">
                {String(filtered.length).padStart(3, "0")}
              </span>
            </span>
          </div>

          {filtered.length === 0 ? (
            <div className="border border-graphite p-12 text-center">
              <div className="font-display text-3xl text-bone mb-3">
                No practitioners match.
              </div>
              <p className="text-silver">
                Loosen a parameter to broaden the registry query.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {filtered.map((d) => (
                <DoctorRow key={d.id} doctor={d} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function FilterBlock({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] text-silver tracking-[0.22em] uppercase mb-3 flex justify-between border-b border-graphite pb-2">
        <span>{label}</span>
        <span className="text-lume">[{index}]</span>
      </div>
      {children}
    </div>
  );
}

type Item = string | { k: string; v: string };

function FilterList({
  items,
  active,
  onChange,
}: {
  items: Item[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <ul className="space-y-1.5 max-h-72 overflow-y-auto">
      {items.map((it) => {
        const k = typeof it === "string" ? it : it.k;
        const v = typeof it === "string" ? it : it.v;
        const on = k === active;
        return (
          <li key={k}>
            <button
              onClick={() => onChange(k)}
              className={`w-full text-left font-sans text-sm py-1.5 transition-colors flex items-center gap-2 ${
                on ? "text-lume" : "text-silver hover:text-bone"
              }`}
            >
              <span
                className={`size-1 rounded-full ${
                  on ? "bg-lume" : "bg-graphite-soft"
                }`}
              />
              {v}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
