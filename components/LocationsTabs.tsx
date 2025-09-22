"use client";
import { useState } from "react";
import { locations } from "@/data/locations";
import LocationCard from "./LocationCard";

export default function LocationsTabs() {
  const [active, setActive] = useState<"surrey" | "abbotsford">("surrey");
  return (
    <section id="locations" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-4">Locations</h2>
      <div className="inline-flex rounded-2xl border border-white/10 overflow-hidden mb-6">
        {locations.map((l) => (
          <button
            key={l.key}
            onClick={() => setActive(l.key)}
            className={`px-4 py-2 text-sm ${active===l.key ? "bg-gold/20 text-white" : "bg-white/5 text-offwhite/80"} transition`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {locations.filter(l => l.key===active).map(l => (
          <LocationCard key={l.key} location={l} />
        ))}
      </div>
    </section>
  );
}
