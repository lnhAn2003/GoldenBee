type Partner = {
  name: string
  url: string
  logo: string
  tier: "featured" | "core" | "international"
  tag?: string
  country?: string
}

const partners: Partner[] = [
  { name: "Careem", url: "https://www.careem.com", logo: "https://logo.clearbit.com/careem.com", tier: "featured", tag: "Mobility" },
  { name: "Daraz", url: "https://www.daraz.pk", logo: "https://logo.clearbit.com/daraz.pk", tier: "featured", tag: "Marketplace" },
  { name: "Easypaisa", url: "https://easypaisa.com.pk", logo: "https://logo.clearbit.com/easypaisa.com.pk", tier: "featured", tag: "Payments" },
  { name: "Foodpanda", url: "https://www.foodpanda.com", logo: "https://logo.clearbit.com/foodpanda.com", tier: "featured", tag: "Delivery" },
  { name: "OneLoad", url: "https://oneloadpk.com", logo: "https://logo.clearbit.com/oneloadpk.com", tier: "core", tag: "Top-up" },
  { name: "1LINK", url: "https://1link.net.pk", logo: "https://logo.clearbit.com/1link.net.pk", tier: "core", tag: "Switch" },
  { name: "NayaPay", url: "https://www.nayapay.com", logo: "https://logo.clearbit.com/nayapay.com", tier: "core", tag: "Wallet" },
  { name: "Finja", url: "https://finja.pk", logo: "https://logo.clearbit.com/finja.pk", tier: "core", tag: "SME" },
  { name: "Foree", url: "https://foree.com", logo: "https://logo.clearbit.com/foree.com", tier: "core", tag: "Pay" },
  { name: "FonePay", url: "https://www.fonepay.com", logo: "https://logo.clearbit.com/fonepay.com", tier: "core", tag: "QR" },
  { name: "Bookme", url: "https://bookme.pk", logo: "https://logo.clearbit.com/bookme.pk", tier: "core", tag: "Tickets" },
  { name: "GrocerApp", url: "https://grocerapp.pk", logo: "https://logo.clearbit.com/grocerapp.pk", tier: "core", tag: "Grocery" },
  { name: "Cheetay", url: "https://www.cheetay.pk", logo: "https://logo.clearbit.com/cheetay.pk", tier: "core", tag: "Last mile" },
  { name: "E.Ocean", url: "https://www.eocean.com", logo: "https://logo.clearbit.com/eocean.com", tier: "core", tag: "Communications" },
  { name: "PayPlus", url: "https://payplus.com.pk", logo: "https://logo.clearbit.com/payplus.com.pk", tier: "core", tag: "Fintech" },
  { name: "Konnect by HBL", url: "https://www.hbl.com/konnect", logo: "https://logo.clearbit.com/hbl.com", tier: "core", tag: "Banking" },
  { name: "ding", url: "https://www.ding.com", logo: "https://logo.clearbit.com/ding.com", tier: "international", country: "IE" },
  { name: "DT One", url: "https://www.dtone.com", logo: "https://logo.clearbit.com/dtone.com", tier: "international", country: "SG" },
  { name: "Prepay Nation", url: "https://www.prepaynation.com", logo: "https://logo.clearbit.com/prepaynation.com", tier: "international", country: "US" },
  { name: "Tranglo", url: "https://www.tranglo.com", logo: "https://logo.clearbit.com/tranglo.com", tier: "international", country: "MY" },
]

const galleryLetters = "GALLERY".split("")

export default function Partners({ title = "Partners" }: { title?: string }) {
  const featured = partners.filter((p) => p.tier === "featured")
  const core = partners.filter((p) => p.tier === "core")
  const intl = partners.filter((p) => p.tier === "international")

  return (
    <section aria-labelledby="partners-title" className="relative isolate py-12 md:py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/constructionBG.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/85 to-slate-950/90" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 space-y-8">
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/20 backdrop-blur">
              Partner network
            </div>
            <h2 id="partners-title" className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {title}
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/70">
              Modern collaborations across mobility, payments, retail, and international rails. Click any logo to open their site.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/10 backdrop-blur">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">{partners.length}</div>
            <span>Active partners</span>
          </div>
        </header>

        <section className="space-y-3">
          <div className="flex flex-col items-center gap-3 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Featured</p>
              <h3 className="text-xl font-bold text-white">Flagship collaborations</h3>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
            {featured.map((partner) => (
              <LogoCard key={partner.name} partner={partner} highlight />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">Core network</p>
              <h3 className="text-xl font-bold text-white">Everyday essentials</h3>
            </div>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {core.map((partner) => (
              <LogoCard key={partner.name} partner={partner} />
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="text-center space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-pink-600">International channel partners</p>
            <h3 className="text-xl font-bold text-white">Global signal, local delivery</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {intl.map((partner) => (
              <LogoCard key={partner.name} partner={partner} subtle />
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}

type LogoCardProps = {
  partner: Partner
  subtle?: boolean
  highlight?: boolean
}

function LogoCard({ partner, subtle = false, highlight = false }: LogoCardProps) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border bg-white/90 p-4 text-left shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg ${
        subtle ? "opacity-90" : ""
      } ${highlight ? "md:col-span-1" : ""}`}
      aria-label={`Open partner ${partner.name}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/50 ring-1 ring-black/5">
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            decoding="async"
            className="max-h-8 max-w-full object-contain transition duration-200 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-brand-ink">{partner.name}</p>
          <div className="flex items-center gap-2 text-[11px] text-brand-ink/60">
            {partner.tag && <span className="rounded-full bg-brand-primary/10 px-2 py-0.5 text-[10px] font-semibold text-brand-primary">{partner.tag}</span>}
            {partner.country && <span className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-brand-ink/70">{partner.country}</span>}
          </div>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <span className="absolute -right-10 -top-10 h-20 w-20 rotate-12 bg-gradient-to-br from-brand-primary/15 to-transparent" />
      </span>
    </a>
  )
}
