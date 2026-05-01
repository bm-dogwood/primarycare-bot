"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DoctorError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="px-6 py-32 text-center">
      <div className="font-mono text-[10px] tracking-[0.25em] text-lume uppercase mb-4">
        Error
      </div>
      <h1 className="font-display text-5xl mb-4">Could not load dossier.</h1>
      <p className="text-silver mb-8">{error.message}</p>
      <button
        onClick={() => {
          router.refresh();
          reset();
        }}
        className="border border-graphite hover:border-lume px-5 py-3 font-mono text-[10px] tracking-widest uppercase hover:text-lume"
      >
        Retry
      </button>
    </div>
  );
}
