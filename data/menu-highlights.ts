export type MenuItem = {
  name: string;
  description: string;
  image: string; // path under /public
  alt: string;
};

export const menuHighlights: MenuItem[] = [
  {
    name: "Mahi Mahi Fish Fried",
    description: "Crispy fried mahi mahi fillet with lemon and onions.",
    image: "/images/dishes/mahi-mahi-fry.jpg",
    alt: "Mahi Mahi Fish Fry on a dark platter",
  },
  {
    name: "Goat Curry Bhuna",
    description: "Slow-simmered goat curry with rich spices.",
    image: "/images/dishes/goat-curry.jpg",
    alt: "Goat curry bhuna in a dark bowl",
  },
  {
    name: "Chicken Curry",
    description: "Classic chicken curry with Bengali spices.",
    image: "/images/dishes/chicken-curry.jpg",
    alt: "Chicken curry in a bowl with coriander garnish",
  },
  {
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice with mixed vegetables and fried onions.",
    image: "/images/dishes/veg-biryani.jpg",
    alt: "Vegetable biryani in a black karahi",
  },
  {
    name: "Chicken Pakora (Sm/Lg)",
    description: "Crisp chicken fritters, a customer favourite.",
    image: "/images/dishes/chicken-pakora.jpg",
    alt: "Chicken pakora served hot",
  },
  {
    name: "Bengal Fish Pakora",
    description: "Fish fritters with house spices.",
    image: "/images/dishes/bengal-fish-pakora.jpg",
    alt: "Fish pakora on a dark plate",
  },
  {
    name: "Paneer Tikka",
    description: "Marinated paneer grilled to perfection.",
    image: "/images/dishes/paneer-tikka.jpg",
    alt: "Paneer tikka pieces with onions and lemon",
  },
  {
    name: "Chilli Fish Manchurian",
    description: "Indo-Chinese style fish with chilli and sauce.",
    image: "/images/dishes/chilli-fish-manchurian.jpg",
    alt: "Chilli fish Manchurian in a platter",
  },
];
