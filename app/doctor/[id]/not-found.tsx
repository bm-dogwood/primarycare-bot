import Link from "next/link";

export default function DoctorNotFound() {
  return (
    <div className="px-6 py-32 text-center">
      <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
        404
      </div>
      <h1 className="font-display text-5xl mb-4">Dossier not found.</h1>
      <Link
        href="/directory"
        className="font-mono text-[10px] tracking-widest uppercase text-lume border-b border-lume"
      >
        Return to directory
      </Link>
    </div>
  );
}
