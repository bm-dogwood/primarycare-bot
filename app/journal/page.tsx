"use client";

import Image from "next/image";
import medications from "@/public/medication.jpeg";
import anatomy from "@/public/anatomy.jpeg";

// Metadata export for Next.js

const articles = [
  {
    num: "001",
    title: "Why panel size predicts care quality more than rating averages.",
    author: "The Editors",
    date: "April 2026",
    read: "8 min",
    category: "Method",
    excerpt:
      "A practitioner with 1,400 patients cannot know any of them well. The mathematics of attention is unforgiving — and increasingly traceable through anonymized appointment data.",
    img: anatomy,
  },
  {
    num: "002",
    title: "The quiet renaissance of the in-person physical examination.",
    author: "S. Thorne, MD",
    date: "April 2026",
    read: "12 min",
    category: "Practice",
    excerpt:
      "After two decades of decline, the physical exam — palpation, percussion, auscultation — is being re-evaluated as a diagnostic and relational instrument.",
    img: medications,
  },
  {
    num: "003",
    title: "How to read your insurance carrier's directory critically.",
    author: "The Editors",
    date: "March 2026",
    read: "6 min",
    category: "Patient",
    excerpt:
      "Carrier directories are notoriously stale. We outline the four cross-references that confirm whether a practitioner truly accepts your plan.",
    img: null,
  },
  {
    num: "004",
    title: "Telehealth at five years: what the longitudinal data shows.",
    author: "P. Mercer, MD",
    date: "March 2026",
    read: "15 min",
    category: "Method",
    excerpt:
      "Outcomes for chronic disease management via video are equivalent — sometimes superior — to in-person continuity. The cited literature, examined.",
    img: null,
  },
];

export default function JournalPage() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-[1480px] mx-auto">
      <header className="border-b border-graphite pb-10 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-3">
            § 05 — Editorial
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-light leading-[0.92]">
            The <span className="italic text-lume">Journal.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pt-12">
          <p className="text-silver leading-relaxed">
            Quarterly dispatches on the practice and politics of primary care.
            Written by physicians, methodologists, and patient advocates.
          </p>
        </div>
      </header>

      {/* Featured */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24 group cursor-pointer">
        <div className="lg:col-span-7 relative bg-carbon aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
          {articles[0].img && (
            <Image
              src={articles[0].img}
              alt=""
              width={1024}
              height={1024}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              loading="lazy"
            />
          )}
          <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-lume bg-obsidian/80 px-3 py-1.5 uppercase">
            № {articles[0].num} · {articles[0].category}
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] text-bone group-hover:text-lume transition-colors mb-6">
            {articles[0].title}
          </h2>
          <p className="text-silver leading-relaxed mb-6">
            {articles[0].excerpt}
          </p>
          <div className="font-mono text-[10px] tracking-[0.22em] text-silver uppercase flex items-center gap-4 border-t border-graphite pt-4">
            <span>{articles[0].author}</span>
            <span>·</span>
            <span>{articles[0].date}</span>
            <span>·</span>
            <span>{articles[0].read}</span>
          </div>
        </div>
      </article>

      {/* List */}
      <div className="border-t border-graphite">
        {articles.slice(1).map((a) => (
          <article
            key={a.num}
            className="border-b border-graphite py-10 grid grid-cols-1 md:grid-cols-12 gap-6 group cursor-pointer hover:bg-carbon/30 transition-colors -mx-6 md:-mx-10 px-6 md:px-10"
          >
            <div className="md:col-span-1 font-mono text-[10px] tracking-[0.22em] text-lume uppercase pt-1">
              № {a.num}
            </div>
            <div className="md:col-span-2 font-mono text-[10px] tracking-[0.22em] text-silver uppercase pt-1">
              {a.category}
            </div>
            <div className="md:col-span-7">
              <h3 className="font-display text-3xl md:text-4xl text-bone group-hover:text-lume transition-colors leading-tight mb-2">
                {a.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed max-w-2xl">
                {a.excerpt}
              </p>
            </div>
            <div className="md:col-span-2 font-mono text-[10px] tracking-[0.22em] text-silver uppercase pt-1 md:text-right">
              {a.date}
              <br />
              {a.read}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
