export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "cola" | "water" | "energy" | "juice";
  badge?: string;
  color: string; // tailwind bg color for card accent
  glowColor: string; // rgba glow for hover
  textColor: string; // tailwind text color
  borderColor: string; // tailwind border color
  calories: string;
  sugar: string;
  caffeine: string;
  volume: string;
  image?: string; // transparent PNG product shot
  imageW?: number; // natural pixel width for correct aspect ratio
  imageH?: number; // natural pixel height for correct aspect ratio
};

export const products: Product[] = [
  {
    slug: "classic-coke",
    name: "Classic Coke",
    tagline: "The original. The iconic. The one.",
    description:
      "Bold, fizzy, and unmistakably Drinko. Our flagship cola has been refreshing people since day one.",
    longDescription:
      "Crafted with a signature blend of natural flavors and real cane sugar, Drinko Classic Coke delivers that iconic caramel sweetness with a satisfying carbonated bite. Served ice-cold, it's the ultimate companion for any occasion — from a quick lunch break to a late-night celebration.",
    category: "cola",
    badge: "Bestseller",
    color: "from-red-950 to-red-900",
    glowColor: "rgba(220,38,38,0.35)",
    textColor: "text-red-400",
    borderColor: "border-red-800/40",
    calories: "140 kcal",
    sugar: "39g",
    caffeine: "34mg",
    volume: "330ml",
    image: "/coke_classic_removed_bg.png",
    imageW: 225,
    imageH: 225,
  },
  {
    slug: "sugar-free-coke",
    name: "Sugar Free Coke",
    tagline: "All the taste. Zero the guilt.",
    description:
      "The same bold Drinko cola flavour you love, with zero sugar and zero compromise.",
    longDescription:
      "Drinko Sugar Free uses a precisely balanced blend of sweeteners to replicate the full-bodied cola taste you know and love — without a single gram of sugar. Perfect for those watching their intake without sacrificing the pleasure of a great drink.",
    category: "cola",
    badge: "Zero Sugar",
    color: "from-zinc-900 to-zinc-800",
    glowColor: "rgba(161,161,170,0.25)",
    textColor: "text-zinc-300",
    borderColor: "border-zinc-600/40",
    calories: "1 kcal",
    sugar: "0g",
    caffeine: "34mg",
    volume: "330ml",
    image: "/diet_coke_bg_removed.png",
    imageW: 400,
    imageH: 300,
  },
  {
    slug: "still-water",
    name: "Still Water",
    tagline: "Pure. Crisp. Natural.",
    description:
      "Source water from natural springs, bottled at the origin to lock in freshness.",
    longDescription:
      "Drinko Still Water is drawn from carefully selected natural springs and filtered through layers of limestone rock. Free from additives, it delivers the cleanest, most refreshing hydration experience. Whether at the gym, the office, or on the go — pure water, pure life.",
    category: "water",
    color: "from-sky-950 to-sky-900",
    glowColor: "rgba(14,165,233,0.3)",
    textColor: "text-sky-400",
    borderColor: "border-sky-800/40",
    calories: "0 kcal",
    sugar: "0g",
    caffeine: "0mg",
    volume: "500ml",
    image: "/aquafina.png",
    imageW: 500,
    imageH: 500,
  },
  {
    slug: "sparkling-water",
    name: "Sparkling Water",
    tagline: "Bubbles with a purpose.",
    description:
      "Natural spring water with a gentle natural carbonation. Refreshingly alive.",
    longDescription:
      "Drinko Sparkling Water captures the liveliness of natural spring water and enhances it with fine, natural carbonation. Light on the palate with a clean finish — it's the sophisticated alternative to sugary fizzy drinks, without compromising on the sparkle.",
    category: "water",
    badge: "New",
    color: "from-cyan-950 to-teal-900",
    glowColor: "rgba(20,184,166,0.3)",
    textColor: "text-teal-400",
    borderColor: "border-teal-800/40",
    calories: "0 kcal",
    sugar: "0g",
    caffeine: "0mg",
    volume: "500ml",
    image: "/aquafina.png",
    imageW: 500,
    imageH: 500,
  },
  {
    slug: "energy-drink",
    name: "Energy Drink",
    tagline: "Fuel the fire within.",
    description:
      "High-performance energy formula to power your peak moments, day or night.",
    longDescription:
      "Drinko Energy is the result of precision formulation — combining taurine, B-vitamins, natural caffeine, and a bold citrus flavour profile. Engineered to sharpen focus, boost endurance, and keep you performing at your absolute best. Not just a drink — it's a weapon.",
    category: "energy",
    badge: "High Caffeine",
    color: "from-yellow-950 to-orange-900",
    glowColor: "rgba(234,179,8,0.35)",
    textColor: "text-yellow-400",
    borderColor: "border-yellow-800/40",
    calories: "110 kcal",
    sugar: "27g",
    caffeine: "150mg",
    volume: "250ml",
    image: "/monster_bg_removed.png",
    imageW: 536,
    imageH: 466,
  },
  {
    slug: "fruit-juice",
    name: "Fruit Juice",
    tagline: "Nature squeezed perfectly.",
    description:
      "100% real fruit, cold-pressed with no added sugar, preservatives or shortcuts.",
    longDescription:
      "Drinko Fruit Juice is made from 100% cold-pressed mixed fruits, carefully selected at peak ripeness. Nothing added, nothing removed — just the pure, vibrant flavour of nature in every sip. Vitamins, antioxidants, and real taste, exactly as they should be.",
    category: "juice",
    color: "from-orange-950 to-amber-900",
    glowColor: "rgba(249,115,22,0.35)",
    textColor: "text-orange-400",
    borderColor: "border-orange-800/40",
    calories: "95 kcal",
    sugar: "19g",
    caffeine: "0mg",
    volume: "330ml",
    image: "/fanta_bg_emoved.png",
    imageW: 204,
    imageH: 148,
  },
];

export const categories = [
  { key: "all", label: "All Products" },
  { key: "cola", label: "Cola" },
  { key: "water", label: "Water" },
  { key: "energy", label: "Energy" },
  { key: "juice", label: "Juice" },
] as const;

export type CategoryKey = (typeof categories)[number]["key"];
