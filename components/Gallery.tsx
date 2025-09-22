import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative rounded-xl overflow-hidden bg-white/5" style={{aspectRatio:"1/1"}}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
