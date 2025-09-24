export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Sélection Rigoureuse",
      description: "Nous sélectionnons uniquement les iPhones répondant à nos critères de qualité les plus stricts.",
    },
    {
      number: "02",
      title: "Tests Approfondis",
      description: "Batterie de 50+ tests techniques, vérification IMEI, diagnostic complet de tous les composants.",
    },
    {
      number: "03",
      title: "Reconditionnement Expert",
      description: "Remplacement des pièces défaillantes par des composants d'origine Apple, nettoyage professionnel.",
    },
    {
      number: "04",
      title: "Certification Qualité",
      description: "Attribution du grade de qualité, photos HD des défauts éventuels, certificat de conformité.",
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Notre Processus d'Excellence</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            De la sélection à la livraison, chaque étape est pensée pour vous garantir un iPhone d'exception au meilleur
            prix.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0" />
              )}

              <div className="relative z-10 space-y-4">
                <div className="w-24 h-24 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
