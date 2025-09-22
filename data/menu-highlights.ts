export type MenuItem = {
  name: string;
  description: string;
  spice?: "Mild" | "Medium" | "Hot";
};

export const menuHighlights: MenuItem[] = [
  { name: "Chicken Biryani", description: "Fragrant basmati, tender chicken, saffron & garam masala.", spice: "Medium" },
  { name: "Beef Kathi Roll", description: "Flaky paratha wrap with spiced beef & chutneys.", spice: "Medium" },
  { name: "Butter Chicken", description: "Creamy tomato gravy, slow-simmered.", spice: "Mild" },
  { name: "Mixed Grill Platter", description: "Tandoori chicken, kebabs & tikka selection.", spice: "Hot" },
  { name: "Mango Lassi", description: "Refreshing yogurt drink with mango puree." }
];
