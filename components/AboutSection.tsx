export default function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p className="text-offwhite/80">
            Born from Bengal’s street flavours and family recipes, we bring hearty, halal comfort to Surrey and Abbotsford.
            From fragrant biryanis to comforting curries and grill specials, everything is made-to-order with care.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-halalgreen" />
            <span className="text-offwhite/70">100% Halal</span>
          </div>
        </div>
        <div className="card h-64 md:h-72" />
      </div>
    </section>
  );
}
