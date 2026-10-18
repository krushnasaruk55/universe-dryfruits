export interface BusinessConfig {
  name: string;
  category: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  mapsUrl: string;
  researchedHours: string;
  verifiedHours: string | null;
  researchedRating: {
    score: number;
    reviewCount: number;
    source: string;
  };
  verifiedRating: {
    score: number | null;
    reviewCount: number | null;
  };
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  officialWebsite: string | null;
  socialLinks: {
    instagram: string | null;
    facebook: string | null;
  };
  ownerName: string | null;
  foundingYear: number | null;
  isOfficialSite: boolean;
  isConceptDemo: boolean;
  notes: string;
}

export const businessConfig: BusinessConfig = {
  name: "UNIVERSE DRYFRUITS",
  category: "Dry Fruit Retailer",
  address: {
    line1: "2/5, Upper Kharadi Main Road",
    area: "Wagholi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "412207",
    country: "India",
    formatted: "2/5, Upper Kharadi Main Road, Wagholi, Pune, Maharashtra 412207, India",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=UNIVERSE+DRYFRUITS+2%2F5+Upper+Kharadi+Main+Road+Wagholi+Pune",
  researchedHours: "Daily, 9:30 AM – 10:30 PM (Listed on Maps · subject to store confirmation)",
  verifiedHours: null,
  researchedRating: {
    score: 4.9,
    reviewCount: 17,
    source: "Google Maps Listing",
  },
  verifiedRating: {
    score: null,
    reviewCount: null,
  },
  phone: null,
  whatsapp: null,
  email: null,
  officialWebsite: null,
  socialLinks: {
    instagram: null,
    facebook: null,
  },
  ownerName: null,
  foundingYear: null,
  isOfficialSite: false,
  isConceptDemo: true,
  notes:
    "Independent conceptual storefront design created for Universe Dryfruits in Wagholi, Pune. Not commissioned or officially verified.",
};

export interface PackSize {
  weight: string;
  samplePrice: number;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  available: boolean;
  availableSizes: PackSize[];
  price: number;
  currency: string;
  priceVerified: boolean;
  inventoryVerified: boolean;
  isDemoProduct: boolean;
  tastingNotes: string[];
  texture: string;
  storageRecommendation: string;
}

export const sampleProducts: ProductItem[] = [
  {
    id: "mamra-almonds",
    name: "Mamra Almonds",
    category: "Almonds",
    shortDescription: "Distinctive boat-shaped almonds with high natural oil content and crisp bite.",
    description:
      "Recognized by their pointed shape and rich earthy crunch. Ideal for morning soaking, snacking, or culinary confectionery.",
    image: "/images/almonds.jpg",
    available: true,
    availableSizes: [
      { weight: "250g", samplePrice: 650 },
      { weight: "500g", samplePrice: 1250 },
      { weight: "1kg", samplePrice: 2400 },
    ],
    price: 650,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Subtly sweet", "Dense crunch", "Nutty aromatic oils"],
    texture: "Firm, crisp, oil-rich",
    storageRecommendation: "Store in an airtight glass container in a cool, dry pantry.",
  },
  {
    id: "w180-jumbo-cashews",
    name: "Jumbo King Cashews (W180)",
    category: "Cashews",
    shortDescription: "Creamy, whole grade-W180 cashews with a natural buttery smoothness.",
    description:
      "Hand-graded whole cashew kernels prized for their uniform crescent curve and tender, melt-in-mouth mouthfeel.",
    image: "/images/cashews.jpg",
    available: true,
    availableSizes: [
      { weight: "250g", samplePrice: 380 },
      { weight: "500g", samplePrice: 740 },
      { weight: "1kg", samplePrice: 1450 },
    ],
    price: 380,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Buttery sweetness", "Mild milky aroma", "Low acidity"],
    texture: "Smooth, velvety, tender bite",
    storageRecommendation: "Seal away from direct sunlight; refrigerate in humid weather.",
  },
  {
    id: "roasted-salted-pistachios",
    name: "Iranian Green Pistachios",
    category: "Pistachios",
    shortDescription: "Naturally split roasted pistachios in shell with sea-salt seasoning.",
    description:
      "Naturally open shells revealing vibrant emerald and purple-tinged kernels roasted to develop a clean savory aroma.",
    image: "/images/pistachios.jpg",
    available: true,
    availableSizes: [
      { weight: "250g", samplePrice: 420 },
      { weight: "500g", samplePrice: 820 },
      { weight: "1kg", samplePrice: 1600 },
    ],
    price: 420,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Sea salt hint", "Toasted umami", "Sweet herbaceous kernel"],
    texture: "Crunchy shell release, crisp core",
    storageRecommendation: "Keep sealed to preserve snap and prevent moisture absorption.",
  },
  {
    id: "kashmiri-walnut-kernels",
    name: "Whole Walnut Halves",
    category: "Walnuts",
    shortDescription: "Pristine amber walnut halves with intact natural folds and mild finish.",
    description:
      "Carefully de-shelled golden walnut halves retaining their fragile delicate structure without excessive bitterness.",
    image: "/images/walnuts.jpg",
    available: true,
    availableSizes: [
      { weight: "250g", samplePrice: 450 },
      { weight: "500g", samplePrice: 880 },
      { weight: "1kg", samplePrice: 1720 },
    ],
    price: 450,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Earthy richness", "Delicate walnut oils", "Smooth finish"],
    texture: "Delicate crumble, tender snap",
    storageRecommendation: "Refrigerate in airtight glass to keep omega fatty acids fresh.",
  },
  {
    id: "royal-medjool-dates",
    name: "Royal Medjool Dates",
    category: "Dates",
    shortDescription: "Plump, soft amber dates known for a rich caramel-like sweetness.",
    description:
      "Large, soft-fleshed dates with naturally wrinkled mahogany skin and an unctuous, honey-like texture.",
    image: "/images/dates.jpg",
    available: true,
    availableSizes: [
      { weight: "500g", samplePrice: 690 },
      { weight: "1kg", samplePrice: 1320 },
    ],
    price: 690,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Dark caramel", "Wild honey", "Subtle maple undertone"],
    texture: "Chewy, unctuous, melt-in-mouth flesh",
    storageRecommendation: "Keep chilled in an airtight box to maintain moisture balance.",
  },
  {
    id: "afghan-golden-raisins",
    name: "Afghan Long Golden Raisins",
    category: "Raisins",
    shortDescription: "Slender, sun-dried green-golden raisins with a bright, balanced tartness.",
    description:
      "Naturally sun-dried elongated seedless raisins offering an energetic balance between gentle sweetness and citrus tang.",
    image: "/images/raisins.jpg",
    available: true,
    availableSizes: [
      { weight: "250g", samplePrice: 220 },
      { weight: "500g", samplePrice: 420 },
      { weight: "1kg", samplePrice: 800 },
    ],
    price: 220,
    currency: "₹",
    priceVerified: false,
    inventoryVerified: false,
    isDemoProduct: true,
    tastingNotes: ["Citrus brightness", "Mild honeyed tang", "Floral finish"],
    texture: "Soft, chewy, plump yield",
    storageRecommendation: "Store in a cool dry pantry away from spices and aromas.",
  },
];

export interface CategoryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  accentNote: string;
  sampleItemCount: number;
}

export const productCategories: CategoryItem[] = [
  {
    id: "almonds",
    name: "Almonds",
    tagline: "Mamra & California Kernels",
    description: "Cold-stored, intact skins with preserved natural oils and robust crunch.",
    image: "/images/almonds.jpg",
    accentNote: "Rich in vitamin E & natural oils",
    sampleItemCount: 4,
  },
  {
    id: "cashews",
    name: "Cashews",
    tagline: "Grade W180 to W320",
    description: "Whole ivory crescents hand-selected for uniform size and creamy bite.",
    image: "/images/cashews.jpg",
    accentNote: "Naturally sweet and tender",
    sampleItemCount: 3,
  },
  {
    id: "pistachios",
    name: "Pistachios",
    tagline: "Roasted & In-Shell Greens",
    description: "Emerald kernels naturally cracked on the tree, dry-roasted with sea salt.",
    image: "/images/pistachios.jpg",
    accentNote: "Vibrant color & savory crunch",
    sampleItemCount: 3,
  },
  {
    id: "walnuts",
    name: "Walnuts",
    tagline: "Whole Amber Halves",
    description: "Light-amber halved kernels carefully shelled to prevent breakage.",
    image: "/images/walnuts.jpg",
    accentNote: "Delicate natural omega richness",
    sampleItemCount: 2,
  },
  {
    id: "dates",
    name: "Dates",
    tagline: "Medjool, Kimia & Mabroom",
    description: "Plump, moisture-balanced dates celebrating deep caramel flavors.",
    image: "/images/dates.jpg",
    accentNote: "Natural caramel sweetness",
    sampleItemCount: 4,
  },
  {
    id: "raisins",
    name: "Raisins",
    tagline: "Afghan Green & Black Munakka",
    description: "Sun-dried long Kishmish and seeded Munakka with bright acidity.",
    image: "/images/raisins.jpg",
    accentNote: "Sun-cured fruit balance",
    sampleItemCount: 3,
  },
];
