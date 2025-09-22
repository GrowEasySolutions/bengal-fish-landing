export default function Gallery() {
  const placeholders = Array.from({length: 12});
  return (
    <section id="gallery" className="container py-12 md:py-16">
      <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {placeholders.map((_, idx) => (
          <div key={idx} className="aspect-square rounded-xl bg-white/5" />
        ))}
      </div>
    </section>
  );
}
