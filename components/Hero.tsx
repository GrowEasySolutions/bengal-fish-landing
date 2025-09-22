import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Authentic Bengali Flavour, <span className="text-gold">Fresh from the Tawa.</span>
          </h1>
          <p className="mt-4 text-offwhite/80">
            Real Bengal Fish favourites from the menu: Mahi Mahi Fish Fry, Goat Curry Bhuna, Veg. Biryani and more.
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

        {/* RIGHT: 3 real hero images from the flyer’s dishes */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { src: "/images/hero/mahi-mahi-fry.jpg", alt: "Mahi Mahi Fish Fry" },
            { src: "/images/hero/goat-curry.jpg", alt: "Goat Curry Bhuna" },
            { src: "/images/hero/veg-biryani.jpg", alt: "Vegetable Biryani" },
          ].map((img, i) => (
            <div key={i} className="relative card aspect-[4/5] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="gold-rule" />
    </section>
  );
}
