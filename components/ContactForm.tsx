export default function ContactForm() {
  return (
    <section id="contact" className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-offwhite/80">Have a question about catering, group orders or feedback? Send us a note.</p>
        </div>
        <form className="card p-6 space-y-3" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" placeholder="Your name" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" placeholder="(604) 555-1234" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 min-h-[120px]" placeholder="How can we help?" />
          </div>
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}
