export type Location = {
  key: "surrey" | "abbotsford";
  label: string;
  brandName: string;
  address: string;
  phone: string;
  mapsUrl: string;
  reviewsUrl?: string;
};

export const locations: Location[] = [
  {
    key: "surrey",
    label: "Surrey — Bengal Grill",
    brandName: "Bengal Grill",
    address: "7750 128 St Unit 201 A, Surrey, BC V3W 8E7",
    phone: "(604) 503-0362",
    mapsUrl: "https://maps.google.com/?q=7750+128+St+Unit+201+A,+Surrey,+BC+V3W+8E7"
  },
  {
    key: "abbotsford",
    label: "Abbotsford — Bengal Fish",
    brandName: "Bengal Fish",
    address: "31205 Maclure Rd, Abbotsford, BC V2T 5E5",
    phone: "(604) 852-1200",
    mapsUrl: "https://maps.google.com/?q=31205+Maclure+Rd,+Abbotsford,+BC+V2T+5E5"
  }
];
