// /components/PopularDishes.tsx
import Image from "next/image";
import { menuHighlights } from "@/data/menu-highlights";

export default function PopularDishes() {
  return (
    <section id="menu" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-6">Popular Dishes</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuHighlights.map((m) => (
          <article key={m.name} className="card overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={m.image}
                alt={m.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{m.name}</h3>
              <p className="text-sm text-offwhite/80">{m.description}</p>
              {m.spice && (
                <p className="mt-1 text-xs text-offwhite/60">Spice: {m.spice}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
