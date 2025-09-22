"use client";
import { useState } from "react";
import { reviews } from "@/data/reviews";

export default function ReviewCarousel() {
  const [i, setI] = useState(0);
  const current = reviews[i % reviews.length];
  return (
    <section className="container py-12 md:py-16">
      <div className="card p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="text-4xl">“</div>
        <div className="flex-1">
          <div className="text-offwhite/90">{current.text}</div>
          <div className="text-sm text-offwhite/70 mt-2">— {current.name} · {"★".repeat(current.stars)}</div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={() => setI((p)=> (p-1+reviews.length)%reviews.length)}>Prev</button>
          <button className="btn btn-primary" onClick={() => setI((p)=> (p+1)%reviews.length)}>Next</button>
        </div>
      </div>
    </section>
  );
}
