"use client";

import { useState, useEffect, useCallback } from "react";
import { doctors as demoDoctors, Doctor } from "@/data/doctors";

interface UseDoctorsOptions {
  specialty?: string;
  city?: string;
  state?: string;
  limit?: number;
}

interface UseDoctorsResult {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  source: "nppes" | "demo";
  total: number;
  refetch: () => void;
}

export function useDoctors(options: UseDoctorsOptions = {}): UseDoctorsResult {
  const {
    specialty = "",
    city = "New York",
    state = "NY",
    limit = 20,
  } = options;

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"nppes" | "demo">("demo");
  const [total, setTotal] = useState(0);

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({ city, state, limit: String(limit) });
      if (specialty) params.set("specialty", specialty);

      const res = await fetch(`/api/npi?${params}`);
      if (!res.ok) throw new Error(`API error ${res.status}`);

      const data = await res.json();

      if (data.doctors && data.doctors.length > 0) {
        setDoctors(data.doctors);
        setSource("nppes");
        setTotal(data.total || data.doctors.length);
      } else {
        throw new Error("No results from NPPES");
      }
    } catch (err) {
      console.warn("NPPES fetch failed, falling back to demo data:", err);
      // Filter demo data by specialty if provided
      const filtered = specialty
        ? demoDoctors.filter(
            (d) =>
              d.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
              d.subSpecialty.toLowerCase().includes(specialty.toLowerCase())
          )
        : demoDoctors;

      setDoctors(filtered.length > 0 ? filtered : demoDoctors);
      setSource("demo");
      setTotal(filtered.length || demoDoctors.length);
      // Don't surface the error to the user — demo data is seamless
    } finally {
      setLoading(false);
    }
  }, [specialty, city, state, limit]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  return { doctors, loading, error, source, total, refetch: fetchDoctors };
}

// Geolocation hook for location-aware doctor search
export function useGeolocation() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => setLocationError(err.message)
    );
  }, []);

  return { location, locationError };
}
