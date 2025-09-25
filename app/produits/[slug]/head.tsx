import { demoCatalog } from "@/lib/catalog"

export default function Head({ params }: { params: { slug: string } }) {
  const product = demoCatalog.find((p) => p.slug === params.slug)
  const title = product ? `${product.name} – TechLoop` : "Produit – TechLoop"
  const description = product?.tagline ?? "Découvrez notre sélection d'iPhone."

  const jsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.tagline,
        image: [product.image],
        brand: { "@type": "Brand", name: "Apple" },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: product.variants[0]?.price ?? 0,
          availability: "https://schema.org/InStock",
        },
      }
    : null

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
    </>
  )
}


