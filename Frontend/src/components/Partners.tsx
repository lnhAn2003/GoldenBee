type Partner = {
  name: string
  url: string
  logo?: string
}

type PartnersProps = {
  title?: string
  partners?: Partner[]
}

const defaultPartners: Partner[] = [
  { name: "VietBuild", url: "https://vietbuild.gov.vn/", logo: "https://logo.clearbit.com/vietbuild.gov.vn" },
  { name: "SCG", url: "https://scg.com", logo: "https://logo.clearbit.com/scg.com" },
  { name: "Hoa Phat", url: "https://hoaphat.com.vn", logo: "https://logo.clearbit.com/hoaphat.com.vn" },
  { name: "VICEM", url: "https://vicem.vn", logo: "https://logo.clearbit.com/vicem.vn" },
  { name: "Prime", url: "https://prime.vn", logo: "https://logo.clearbit.com/prime.vn" },
  { name: "Dong Tam", url: "https://dongtam.com.vn", logo: "https://logo.clearbit.com/dongtam.com.vn" },
]

export default function Partners({ title = "Đối tác", partners = defaultPartners }: PartnersProps) {
  return (
    <section aria-labelledby="partners-title" className="py-10 md:py-14">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 id="partners-title" className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-ink">
            {title}
          </h2>
          <p className="hidden md:block text-sm text-brand-ink/70">Nhấp để xem thông tin đối tác</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Đến trang đối tác ${p.name}`}
              className="group relative rounded-xl border bg-white p-3 h-24 flex items-center justify-center overflow-hidden transition hover:shadow-md hover:-translate-y-0.5"
            >
              {p.logo ? (
                <img
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-[80%] object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition"
                />
              ) : (
                <span className="text-sm text-brand-ink/70">{p.name}</span>
              )}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition"/>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

