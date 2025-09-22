// /data/menu-highlights.ts
export type MenuItem = {
  name: string;
  description: string;
  spice?: "Mild" | "Medium" | "Hot";
  image: string; // path under /public
  alt: string;
};

export const menuHighlights: MenuItem[] = [
  {
    name: "Chicken Biryani",
    description: "Fragrant basmati, tender chicken, saffron & garam masala.",
    spice: "Medium",
    image: "/images/dishes/chicken-biryani.jpg",
    alt: "Chicken biryani in a black karahi with coriander and saffron",
  },
  {
    name: "Beef Kathi Roll",
    description: "Flaky paratha wrap with spiced beef & chutneys.",
    spice: "Medium",
    image: "/images/dishes/beef-kathi-roll.jpg",
    alt: "Beef kathi roll showing cross-section with chutneys",
  },
  {
    name: "Butter Chicken",
    description: "Creamy tomato gravy, slow-simmered.",
    spice: "Mild",
    image: "/images/dishes/butter-chicken.jpg",
    alt: "Butter chicken in a black bowl with cream swirl and coriander",
  },
  {
    name: "Mixed Grill Platter",
    description: "Tandoori chicken, kebabs & tikka selection.",
    spice: "Hot",
    image: "/images/dishes/mixed-grill-platter.jpg",
    alt: "Mixed grill platter with tikka and kebabs on dark slate",
  },
  {
    name: "Chicken Korma",
    description: "Rich, nutty gravy with almond slivers.",
    spice: "Mild",
    image: "/images/dishes/chicken-korma.jpg",
    alt: "Chicken korma garnished with almonds and coriander",
  },
  {
    name: "Vegetable Biryani",
    description: "Basmati rice with mixed vegetables and fried onions.",
    spice: "Medium",
    image: "/images/dishes/veg-biryani.jpg",
    alt: "Vegetable biryani with saffron and fried onions",
  },
  {
    name: "Chicken Tikka",
    description: "Char-kissed pieces with lemon and onion salad.",
    spice: "Medium",
    image: "/images/dishes/chicken-tikka.jpg",
    alt: "Chicken tikka pieces with lemon wedge",
  },
  {
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango puree.",
    image: "/images/dishes/mango-lassi.jpg",
    alt: "Mango lassi in a clear glass",
  },
];
