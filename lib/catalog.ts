export type CatalogColor = {
  name: string
  hex: string
}

export type CatalogVariant = {
  id: string
  storage: string
  color: CatalogColor
  price: number
  originalPrice?: number
  inStock: boolean
}

export type CatalogProduct = {
  slug: string
  name: string
  tagline: string
  isNew?: boolean
  image: string
  gallery?: string[]
  colors: CatalogColor[]
  variants: CatalogVariant[]
}

export const demoCatalog: CatalogProduct[] = [
  {
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    tagline: "Design réinventé. Performances pro.",
    isNew: true,
    image: "/images/iphone-17/custom/17pro-cosmic-orange-duo.png",
    gallery: [
      "/images/iphone-17/custom/17pro-cosmic-orange-back.png",
      "/images/iphone-17/custom/17pro-cosmic-orange-corner.png",
      "/images/iphone-17/custom/17pro-cosmic-orange-duo.png",
    ],
    colors: [
      { name: "Orange cosmique", hex: "#FF7A00" },
      { name: "Bleu intense", hex: "#1C3AA9" },
      { name: "Argent", hex: "#E5E7EB" },
    ],
    variants: [
      {
        id: "17pro-256-orange",
        storage: "256 Go",
        color: { name: "Orange cosmique", hex: "#FF7A00" },
        price: 1037,
        originalPrice: 1329,
        inStock: true,
      },
      {
        id: "17pro-512-bleu",
        storage: "512 Go",
        color: { name: "Bleu intense", hex: "#1C3AA9" },
        price: 1299,
        inStock: true,
      },
    ],
  },
  {
    slug: "iphone-air",
    name: "iPhone Air",
    tagline: "Le plus fin des iPhone. Avec la force des Pro.",
    isNew: true,
    image:
      "/images/iphone-17/mistblue-main.webp",
    colors: [
      { name: "Bleu", hex: "#9EC5FF" },
      { name: "Or", hex: "#F1E3C6" },
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Noir", hex: "#111827" },
    ],
    variants: [
      {
        id: "air-128-bleu",
        storage: "128 Go",
        color: { name: "Bleu", hex: "#9EC5FF" },
        price: 899,
        originalPrice: 1099,
        inStock: true,
      },
    ],
  },
  {
    slug: "iphone-17",
    name: "iPhone 17",
    tagline: "Encore plus irrésistible. Et résistant.",
    isNew: true,
    image:
      "/images/iphone-17/lavender-main.webp",
    colors: [
      { name: "Lavande", hex: "#C6B3F3" },
      { name: "Sauge", hex: "#8BAA9A" },
      { name: "Brume", hex: "#ADC0C9" },
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Noir", hex: "#111827" },
    ],
    variants: [
      {
        id: "17-256-lavande",
        storage: "256 Go",
        color: { name: "Lavande", hex: "#C6B3F3" },
        price: 799,
        originalPrice: 999,
        inStock: true,
      },
    ],
  },
]


