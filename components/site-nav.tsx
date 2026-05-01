// components/site-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/directory", label: "Directory" },
  { to: "/specialties", label: "Specialties" },
  { to: "/insurance", label: "Insurance" },
  { to: "/telehealth", label: "Telehealth" },
  { to: "/journal", label: "Journal" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-obsidian/80 backdrop-blur-md border-b border-graphite">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-5 flex items-end justify-between gap-8">
        <div className="flex items-end gap-10">
          <Link
            href="/"
            className="font-mono text-sm tracking-[0.18em] text-lume leading-none font-medium"
          >
            PRIMARYCARE<span className="text-bone">.BOT</span>
          </Link>
          <nav className="hidden md:flex gap-7 font-mono text-[10px] tracking-[0.22em] text-silver uppercase">
            {links.map((l) => {
              const active =
                l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  className={`pb-1 border-b transition-colors ${
                    active
                      ? "text-bone border-lume"
                      : "border-transparent hover:text-bone"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-3 font-mono text-[10px] tracking-widest text-silver uppercase">
          <span>Sys. Calibrated</span>
          <span className="size-1.5 bg-lume rounded-full lume-glow animate-lume-pulse" />
        </div>
        <button
          className="md:hidden font-mono text-[10px] tracking-widest text-silver uppercase border border-graphite px-3 py-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-graphite px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-[0.2em] text-silver uppercase">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="hover:text-bone"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-graphite mt-32">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-mono text-sm tracking-[0.18em] text-lume mb-3 font-medium">
            PRIMARYCARE<span className="text-bone">.BOT</span>
          </div>
          <p className="text-sm text-silver max-w-xs leading-relaxed">
            A precision directory of primary care practitioners, calibrated to
            insurance, locale, and modality.
          </p>
        </div>
        {[
          {
            title: "Directory",
            items: [
              "All Practitioners",
              "By Specialty",
              "By Insurance",
              "Telehealth",
            ],
          },
          {
            title: "Resources",
            items: [
              "Journal",
              "NPI Lookup",
              "Insurance Glossary",
              "Patient Rights",
            ],
          },
          {
            title: "PRIMARYCARE.BOT",
            items: ["About", "Method", "Data Sources", "Contact"],
          },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase mb-4">
              {col.title}
            </div>
            <ul className="space-y-2 text-sm text-bone/80">
              {col.items.map((i) => (
                <li
                  key={i}
                  className="hover:text-lume transition-colors cursor-pointer"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-graphite px-6 md:px-10 py-5 max-w-[1480px] mx-auto flex flex-col md:flex-row justify-between gap-3 font-mono text-[10px] tracking-widest text-silver uppercase">
        <span>
          © MMXXVI PRIMARYCARE.BOT Registry · Sources: NPPES NPI Registry,
          Google Places, Yelp Health
        </span>
        <span>Vol. VII / Build 04.29.26</span>
      </div>
    </footer>
  );
}
