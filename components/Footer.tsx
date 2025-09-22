export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container py-8 text-sm text-offwhite/70">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} Bengal Fish & Bengal Grill</div>
          <div>Built by GrowEasy</div>
        </div>
      </div>
    </footer>
  );
}
