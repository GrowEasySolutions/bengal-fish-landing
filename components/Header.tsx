export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-richblack/60 bg-richblack/70 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <div className="font-semibold text-lg tracking-wide">Bengal <span className="text-gold">Fish</span></div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-offwhite/80">
          <a href="#menu">Menu</a>
          <a href="#locations">Locations</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a className="btn btn-primary" href="#locations">Order (Surrey)</a>
          <a className="btn btn-secondary" href="#locations">Order (Abbotsford)</a>
        </div>
      </div>
    </header>
  );
}
