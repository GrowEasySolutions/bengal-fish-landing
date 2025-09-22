import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bengal Fish & Bengal Grill — Halal Bengali Cuisine in Surrey & Abbotsford",
  description: "Authentic Bengali flavour: biryani, kathi rolls, curries, grills. Two locations — Surrey (Bengal Grill) & Abbotsford (Bengal Fish). 100% Halal.",
  openGraph: {
    title: "Bengal Fish & Bengal Grill",
    description: "Authentic Bengali flavour in Surrey & Abbotsford — 100% Halal",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
