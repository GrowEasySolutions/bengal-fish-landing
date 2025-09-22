import { menuHighlights } from "@/data/menu-highlights";

export default function PopularDishes() {
  return (
    <section id="menu" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-6">Popular Dishes</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menuHighlights.map((m) => (
          <div key={m.name} className="card p-4">
            <div className="aspect-video rounded-xl bg-white/5 mb-3" />
            <div className="font-medium">{m.name}</div>
            <div className="text-sm text-offwhite/80">{m.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
