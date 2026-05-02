"use client";

import { useMemo, useState, useEffect } from "react";
import { insurances, specialties } from "@/data/doctors";
import { DoctorRow } from "@/components/doctor-card";
import { useDoctors } from "@/lib/useDoctors";

export function DirectoryContent() {
  const [specialty, setSpecialty] = useState<string>("All");
  const [insurance, setInsurance] = useState<string>("All");
  const [tele, setTele] = useState<"any" | "tele" | "person">("any");
  const [accepting, setAccepting] = useState<boolean>(false);
  const [city, setCity] = useState("New York");
  const [state] = useState("NY");
  const [showCityPicker, setShowCityPicker] = useState(false);

  const { doctors, loading, source, total } = useDoctors({
    specialty: specialty !== "All" ? specialty : "",
    city,
    state,
    limit: 25,
  });

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
  }, [doctors, specialty, insurance, tele, accepting]);

  const CITIES = [
    { label: "New York, NY", city: "New York", state: "NY" },
    { label: "Los Angeles, CA", city: "Los Angeles", state: "CA" },
    { label: "Chicago, IL", city: "Chicago", state: "IL" },
    { label: "Houston, TX", city: "Houston", state: "TX" },
    { label: "Boston, MA", city: "Boston", state: "MA" },
    { label: "San Francisco, CA", city: "San Francisco", state: "CA" },
    { label: "Seattle, WA", city: "Seattle", state: "WA" },
    { label: "Miami, FL", city: "Miami", state: "FL" },
  ];

  return (
    <div className="px-6 md:px-10 py-16 max-w-[1480px] mx-auto">
      <header className="border-b border-graphite pb-8 mb-10">
        <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3 flex items-center gap-4">
          <span>§ 01 — Registry Index</span>
          {/* Live source indicator */}
          <span
            className={`flex items-center gap-1.5 ${
              source === "nppes" ? "text-lume" : "text-silver"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                source === "nppes" ? "bg-lume animate-pulse" : "bg-silver/40"
              }`}
            />
            {source === "nppes" ? "Live · NPPES" : "Demo registry"}
          </span>
        </div>
        <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95]">
          The complete <span className="italic text-lume">directory.</span>
        </h1>

        {/* City picker */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-silver text-sm">Searching in</span>
          <div className="relative">
            <button
              onClick={() => setShowCityPicker(!showCityPicker)}
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone border border-graphite px-3 py-1.5 hover:border-lume transition-colors"
            >
              {city}, {state} ▾
            </button>
            {showCityPicker && (
              <div className="absolute top-full left-0 mt-1 bg-carbon border border-graphite z-50 min-w-[200px]">
                {CITIES.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => {
                      setCity(c.city);
                      setShowCityPicker(false);
                    }}
                    className="w-full text-left px-4 py-2.5 font-mono text-[10px] tracking-widest uppercase text-silver hover:text-lume hover:bg-obsidian transition-colors"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 text-silver max-w-2xl leading-relaxed">
          {loading ? (
            <span className="animate-pulse">Querying NPPES registry…</span>
          ) : (
            <>
              {filtered.length} practitioners match the current parameters.{" "}
              {source === "nppes" && (
                <span className="text-lume/60 text-xs">
                  Real-time data from CMS NPI Registry.
                </span>
              )}
            </>
          )}
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
                {String(loading ? "···" : filtered.length).padStart(3, "0")}
              </span>
            </span>
          </div>

          {loading ? (
            <div className="flex flex-col gap-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-graphite p-8 animate-pulse"
                >
                  <div className="flex gap-8">
                    <div className="w-24 h-32 bg-graphite" />
                    <div className="flex-1 space-y-3">
                      <div className="h-3 bg-graphite w-1/4" />
                      <div className="h-8 bg-graphite w-1/2" />
                      <div className="h-3 bg-graphite w-3/4" />
                      <div className="h-3 bg-graphite w-2/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
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
