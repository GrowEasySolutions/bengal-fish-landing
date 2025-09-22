export default function TopBar() {
  return (
    <div className="w-full bg-white/5 border-b border-white/10 text-sm">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-halalgreen" />
          <span className="text-offwhite/80">100% Halal Bengali Cuisine</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-offwhite/80 hover:text-white" href="tel:+16045030362">Call Surrey</a>
          <a className="text-offwhite/80 hover:text-white" href="tel:+16048521200">Call Abbotsford</a>
        </div>
      </div>
    </div>
  );
}
