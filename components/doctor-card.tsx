// components/doctor-card.tsx
import Link from "next/link";
import Image from "next/image";
import type { Doctor } from "@/data/doctors";

export function DoctorRow({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={`/doctor/${doctor.id}`}
      className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start border-t border-graphite pt-10 first:border-t-0 first:pt-0"
    >
      <div className="bg-graphite relative overflow-hidden "></div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-display text-3xl md:text-4xl text-bone group-hover:text-lume transition-colors mb-1 leading-tight">
              Dr. {doctor.name}, {doctor.credentials}
            </h3>
            <p className="font-mono text-[11px] text-silver tracking-[0.22em] uppercase">
              {doctor.specialty} · {doctor.subSpecialty}
            </p>
          </div>
          <span className="hidden md:inline-block border border-graphite group-hover:border-lume px-4 py-2 font-mono text-[10px] tracking-widest uppercase text-bone group-hover:text-lume transition-all whitespace-nowrap">
            View Dossier →
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 border-t border-graphite pt-5">
          <Stat label="Match Index" value={`${doctor.matchIndex}%`} mono />
          <Stat label="Next Avail" value={doctor.nextAvailable} mono />
          <Stat label="Distance" value={doctor.distance} mono />
          <Stat
            label="Modality"
            value={doctor.telehealth ? "Tele + In-Person" : "In-Person"}
          />
        </div>

        <p className="font-sans text-sm text-silver max-w-[65ch] leading-relaxed">
          {doctor.bio}
        </p>

        <div className="flex flex-wrap gap-2">
          {doctor.insurances.slice(0, 4).map((ins) => (
            <span
              key={ins}
              className="font-mono text-[10px] tracking-wider text-silver border border-graphite px-2.5 py-1 uppercase"
            >
              {ins}
            </span>
          ))}
          {doctor.insurances.length > 4 && (
            <span className="font-mono text-[10px] tracking-wider text-silver px-2.5 py-1 uppercase">
              +{doctor.insurances.length - 4} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

function Stat({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
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
        } text-base text-bone`}
      >
        {value}
      </span>
    </div>
  );
}
