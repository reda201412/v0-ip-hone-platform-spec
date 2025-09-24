export function StatsSection() {
  const stats = [
    {
      value: "50K+",
      label: "iPhones vendus",
      description: "Clients satisfaits",
    },
    {
      value: "98%",
      label: "Satisfaction client",
      description: "Note moyenne",
    },
    {
      value: "24h",
      label: "Livraison express",
      description: "Partout en France",
    },
    {
      value: "24 mois",
      label: "Garantie étendue",
      description: "Tranquillité d'esprit",
    },
  ]

  return (
    <section className="py-16 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
