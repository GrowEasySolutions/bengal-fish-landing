const features = [
  { title: "100% Halal", text: "Always-halal ingredients and preparation." },
  { title: "Made-to-Order", text: "Freshly prepared with every ticket." },
  { title: "Two Locations", text: "Surrey & Abbotsford to serve you." }
];

export default function FeatureTiles() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <div className="text-gold font-semibold">{f.title}</div>
            <p className="text-offwhite/80 mt-1 text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
