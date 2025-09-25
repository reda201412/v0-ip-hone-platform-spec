import { Reveal, Parallax } from "@/components/ui/motion"

export function HighlightsSection() {
  return (
    <section className="border-t border-border/60 bg-gradient-to-b from-background to-background/60 py-12 md:py-20">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Design & matériaux</h3>
            <p className="text-muted-foreground">Finitions premium, bords soignés, et une silhouette épurée. Une tenue en main irréprochable.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Puissance</h3>
            <p className="text-muted-foreground">Puce de dernière génération. Réactivité fulgurante et efficacité énergétique optimisée.</p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="mb-2 text-xl font-semibold">Autonomie & recharge</h3>
            <p className="text-muted-foreground">Jusqu’à une journée d’utilisation. Recharge rapide USB‑C et MagSafe.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CeramicShieldSection() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Parallax strength={15}>
          <div className="h-full w-full bg-[radial-gradient(75%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
        </Parallax>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">À l’épreuve du temps.</h2>
            <p className="text-lg text-muted-foreground">Face avant Ceramic Shield 2, jusqu’à 3× plus résistante aux rayures. Résistance aux éclaboussures et à la poussière (IP68).</p>
          </div>
        </Reveal>
        <Parallax strength={25}>
          <div className="overflow-hidden rounded-3xl border border-border">
            <div className="aspect-[16/9] w-full bg-gradient-to-tr from-zinc-900 to-zinc-700" />
          </div>
        </Parallax>
      </div>
    </section>
  )
}

export function CameraSection() {
  return (
    <section className="relative border-y border-border/60 bg-card/30 py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Parallax strength={12}>
          <div className="h-full w-full bg-[radial-gradient(60%_45%_at_50%_10%,rgba(99,102,241,0.06),transparent)]" />
        </Parallax>
      </div>
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Sublimez vos photos et vidéos.</h2>
            <p className="text-lg text-muted-foreground">Capteurs avancés, traitement d’image de pointe, stabilisation. Des clichés nets, des couleurs éclatantes, en toute simplicité.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal>
            <div className="h-56 rounded-3xl border border-border bg-gradient-to-br from-purple-500/30 to-fuchsia-500/20" />
          </Reveal>
          <Reveal delay={100}>
            <div className="h-56 rounded-3xl border border-border bg-gradient-to-br from-emerald-500/30 to-teal-500/20" />
          </Reveal>
          <Reveal delay={200}>
            <div className="h-56 rounded-3xl border border-border bg-gradient-to-br from-amber-500/30 to-orange-500/20" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function PerformanceSection() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Parallax strength={20}>
          <div className="h-full w-full bg-[radial-gradient(70%_50%_at_50%_0%,rgba(34,197,94,0.05),transparent)]" />
        </Parallax>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <Parallax strength={20}>
          <div className="order-2 md:order-1">
            <div className="overflow-hidden rounded-3xl border border-border">
              <div className="aspect-[16/9] w-full bg-gradient-to-tr from-blue-500/30 to-cyan-500/20" />
            </div>
          </div>
        </Parallax>
        <Reveal>
          <div className="order-1 md:order-2">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Rapide. Fluide. Durable.</h2>
            <p className="text-lg text-muted-foreground">Des performances pro pour le quotidien : jeux, photo, apps de création. Tout est instantané, sans sacrifier l’autonomie.</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}


