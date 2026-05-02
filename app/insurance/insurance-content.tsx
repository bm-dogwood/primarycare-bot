"use client";

import { useState, useEffect } from "react";
import { insurances } from "@/data/doctors";
import { useDoctors } from "@/lib/useDoctors";
import Link from "next/link";

export function InsuranceContent() {
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const { doctors, loading } = useDoctors({ limit: 50 });

  const filtered = insurances.filter((i) =>
    i.toLowerCase().includes(q.toLowerCase())
  );

  const matching = selected
    ? doctors.filter((d) => d.insurances.includes(selected))
    : [];

  // Compute live counts
  const counts: Record<string, number> = {};
  for (const ins of insurances) {
    counts[ins] = doctors.filter((d) => d.insurances.includes(ins)).length;
  }

  return (
    <div className="px-6 md:px-10 py-16 max-w-[1480px] mx-auto">
      <header className="border-b border-graphite pb-10 mb-16">
        <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
          § 03 — Underwriters
        </div>
        <h1 className="font-display text-6xl md:text-7xl font-light leading-[0.95]">
          Cross-reference your{" "}
          <span className="italic text-lume">coverage.</span>
        </h1>
        <p className="mt-6 text-silver max-w-2xl leading-relaxed">
          Select an insurance carrier to see which practitioners in the registry
          currently accept that network. Updates pull nightly from carrier
          directories.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="font-mono text-[10px] text-silver tracking-[0.22em] uppercase mb-3 flex justify-between">
            <span>Search Carrier</span>
            <span className="text-lume">[01]</span>
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type carrier name…"
            className="w-full bg-transparent border-b border-graphite focus:border-lume text-bone font-display text-2xl py-2 focus:outline-none transition-colors mb-8 placeholder:text-graphite-soft"
          />

          <ul className="border border-graphite divide-y divide-graphite">
            {filtered.map((ins) => {
              const on = ins === selected;
              const count = loading ? "···" : counts[ins] || 0;
              return (
                <li key={ins}>
                  <button
                    onClick={() => setSelected(ins)}
                    className={`w-full text-left p-5 flex items-center justify-between transition-colors group ${
                      on ? "bg-carbon" : "hover:bg-carbon/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`size-2 rounded-full transition-all ${
                          on
                            ? "bg-lume"
                            : "bg-graphite-soft group-hover:bg-silver"
                        }`}
                      />
                      <span
                        className={`font-display text-2xl ${
                          on ? "text-lume" : "text-bone"
                        }`}
                      >
                        {ins}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-silver tracking-widest tabular-nums uppercase">
                      {count} match{count === 1 ? "" : "es"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          {selected ? (
            <div>
              <div className="border border-graphite p-8 mb-8 relative">
                <div className="font-mono text-[10px] text-lume tracking-[0.25em] uppercase mb-3">
                  Selected Carrier
                </div>
                <div className="font-display text-5xl text-bone mb-3">
                  {selected}
                </div>
                <div className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-graphite font-mono text-xs">
                  <div>
                    <div className="text-[9px] text-silver tracking-widest uppercase mb-1">
                      Practitioners
                    </div>
                    <div className="text-2xl text-lume tabular-nums">
                      {loading ? (
                        <span className="animate-pulse">···</span>
                      ) : (
                        matching.length
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] text-silver tracking-widest uppercase mb-1">
                      Network Type
                    </div>
                    <div className="text-bone">PPO / HMO</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-silver tracking-widest uppercase mb-1">
                      Verified
                    </div>
                    <div className="text-bone">
                      {new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="font-mono text-[10px] text-silver tracking-[0.22em] uppercase border-b border-graphite pb-3 mb-6">
                Accepting practitioners
              </div>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="border border-graphite p-5 h-16 animate-pulse bg-graphite/10"
                    />
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {matching.map((d) => (
                    <li
                      key={d.id}
                      className="border border-graphite p-5 flex items-center justify-between hover:border-lume transition-colors"
                    >
                      <div>
                        <Link href={`/doctor/${d.id}`}>
                          <div className="font-display text-2xl text-bone hover:text-lume transition-colors cursor-pointer">
                            Dr. {d.name}, {d.credentials}
                          </div>
                        </Link>
                        <div className="font-mono text-[10px] text-silver tracking-widest uppercase mt-1">
                          {d.specialty} · {d.distance}
                        </div>
                      </div>
                      <div className="font-mono text-[10px] text-lume tracking-widest uppercase">
                        In-network ✓
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="border border-dashed border-graphite p-16 text-center">
              <div className="font-mono text-[10px] tracking-[0.25em] text-silver uppercase mb-4">
                Awaiting input
              </div>
              <div className="font-display text-3xl text-bone">
                Select a carrier to begin.
              </div>
              <p className="text-silver mt-3 max-w-md mx-auto">
                The registry will return all practitioners contracted with that
                network.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
