import { menuHighlights } from "@/data/menu-highlights";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Authentic Bengali Flavour, <span className="text-gold">Fresh from the Tawa.</span>
          </h1>
          <p className="mt-4 text-offwhite/80">
            Biryani, kathi rolls, rich curries and grill specials—made fresh, always halal.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="#menu">View Menu</a>
            <a className="btn btn-secondary" href="#locations">Get Directions</a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-offwhite/80">
            <span>★★★★★</span>
            <span>“Loved by our local community”</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {menuHighlights.slice(0,3).map((item, i) => (
            <div key={i} className="card aspect-[4/5] flex items-end p-4">
              <div>
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-xs text-offwhite/70">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gold-rule" />
    </section>
  );
}
