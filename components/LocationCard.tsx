import type { Location } from "@/data/locations";

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="card p-6">
      <div className="text-gold text-sm">{location.brandName}</div>
      <div className="text-xl font-semibold">{location.label}</div>
      <div className="mt-2 text-offwhite/80">{location.address}</div>
      <div className="mt-1"><a href={`tel:${location.phone.replace(/[^\d]/g, "")}`} className="text-offwhite/90">{location.phone}</a></div>
      <div className="mt-3 flex gap-3">
        <a className="btn btn-primary" target="_blank" href={location.mapsUrl}>Directions</a>
        <a className="btn btn-secondary" href={`tel:${location.phone.replace(/[^\d]/g, "")}`}>Call</a>
        {location.reviewsUrl ? <a className="btn btn-secondary" target="_blank" href={location.reviewsUrl}>Google Reviews</a> : null}
      </div>
      <div className="mt-4 aspect-video rounded-xl bg-white/5" />
    </div>
  );
}
