const faqs = [
  { q: "Do you offer catering?", a: "Yes. Contact us for party trays, corporate lunches and family events." },
  { q: "Spice levels available?", a: "Mild, Medium and Hot options for most dishes." },
  { q: "Gluten-free options?", a: "We can guide you to dishes that avoid gluten; please ask our staff." },
  { q: "Parking?", a: "Ample plaza parking near both locations." }
];

export default function FAQ() {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="card p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-sm text-offwhite/80">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
