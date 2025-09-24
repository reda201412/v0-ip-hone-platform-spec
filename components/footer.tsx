export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="text-xl font-semibold">TechLoop</span>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              La plateforme premium pour iPhones neufs et reconditionnés. Transparence, qualité et confiance depuis
              2024.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold">Produits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  iPhone 15 Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  iPhone 14 Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  iPhone 13 Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Reconditionnés
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Garantie
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Retours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Entreprise</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Partenaires
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 TechLoop. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
