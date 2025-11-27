import { useMemo, useState } from "react"
import { buttonClass } from "./ui/button"
import type { Partner } from "../mocks/partner"
import { partners } from "../mocks/partner"


type TierFilter = "all" | Partner["tier"]

const tierCopy: Record<TierFilter, string> = {
  all: "Nhấn vào logo để mở trang web đối tác. Chọn tầng để lọc theo nhóm đối tác bạn quan tâm.",
  featured: "Đối tác nổi bật, đồng hành trong các sáng kiến chiến lược.",
  core: "Đối tác hạ tầng và dịch vụ cốt lõi trong hệ sinh thái.",
  international: "Đối tác quốc tế hỗ trợ các luồng giao dịch xuyên biên giới.",
}

const tierAccent: Record<Partner["tier"], string> = {
  featured: "from-brand-primary/20 via-brand-primary/12 to-brand-light/0",
  core: "from-brand-accent/20 via-brand-primary/10 to-brand-base/0",
  international: "from-brand-dark/15 via-brand-primary/10 to-brand-base/0",
}

const tierLabelVi: Record<Partner["tier"], string> = {
  featured: "Nổi bật",
  core: "Cốt lõi",
  international: "Quốc tế",
}


export default function Partners({ title = "Mạng lưới đối tác" }: { title?: string }) {
  const [tierFilter, setTierFilter] = useState<TierFilter>("all")

  const totals = useMemo(
    () =>
      partners.reduce(
        (acc, partner) => {
          acc[partner.tier] += 1
          return acc
        },
        { featured: 0, core: 0, international: 0 }
      ),
    []
  )

  const verticals = useMemo(() => {
    const set = new Set<string>()
    partners.forEach((partner) => partner.tag && set.add(partner.tag))
    return set.size
  }, [])

  const countries = useMemo(() => {
    const set = new Set<string>()
    partners.forEach((partner) => partner.country && set.add(partner.country))
    return set.size
  }, [])

  const filteredPartners = tierFilter === "all" ? partners : partners.filter((p) => p.tier === tierFilter)

  const filters: { label: string; value: TierFilter; count: number }[] = [
    { label: "Tất cả", value: "all", count: partners.length },
    { label: "Nổi bật", value: "featured", count: totals.featured },
    { label: "Cốt lõi", value: "core", count: totals.core },
    { label: "Quốc tế", value: "international", count: totals.international },
  ]

  return (
    <section aria-labelledby="partners-title" className="relative isolate bg-white py-14">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />

      <div className="container mx-auto max-w-7xl space-y-8 px-4">
        <div className="relative mx-auto max-w-7xl rounded-[32px] border border-brand-base bg-white p-6 shadow-sm ring-1 ring-brand-primary/5 lg:p-10">
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="space-y-4 text-brand-ink">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-brand-light px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary shadow-sm">
                Mạng lưới đối tác
              </div>
              <div className="space-y-2">
                <h2 id="partners-title" className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
                  {title}
                </h2>
                <p className="max-w-2xl text-sm text-brand-ink/70 sm:text-base">
                  Hệ sinh thái đối tác trong các mảng di chuyển, thanh toán, bán lẻ và kênh quốc tế. Tập trung vào những quan hệ giúp tăng giá trị cho khách hàng.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-brand-ink">
                <StatPill label="Đối tác" value={partners.length} />
                <StatPill label="Lĩnh vực" value={verticals} />
                <StatPill label="Quốc gia" value={countries} />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-[26px] border border-brand-base bg-brand-base shadow-sm ring-1 ring-brand-primary/10">
                <img
                  src="/partner.jpg"
                  alt="Màn hình hiển thị đối tác"
                  className="h-full w-full object-cover opacity-95"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-brand-primary/5" />
                <div className="absolute left-5 top-4 rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary shadow-sm">
                  ĐỐI TÁC
                </div>
                <div className="absolute right-5 top-4 rounded-full bg-brand-primary px-3 py-1 text-[11px] font-semibold text-white shadow">
                  TRỰC TIẾP
                </div>
              </div>
              <div className="mt-3 h-1.5 w-24 rounded-full bg-brand-base shadow-[0_10px_20px_rgba(0,0,0,0.08)]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto rounded-full bg-white px-2 py-2 text-brand-ink ring-1 ring-brand-primary/10 shadow-sm">
            {filters.map((filter) => {
              const isActive = tierFilter === filter.value
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setTierFilter(filter.value)}
                  className={buttonClass({
                    variant: isActive ? "primary" : "light",
                    size: "md",
                    className: isActive ? "shadow-md" : "ring-1 ring-brand-primary/10"
                  })}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`flex h-6 min-w-[1.5rem] items-center justify-center rounded-full px-2 text-[11px] font-bold ${
                      isActive ? "bg-white/20 text-white" : "bg-white text-brand-ink"
                    }`}
                  >
                    {filter.count}
                  </span>
                </button>
              )
            })}
          </div>
          <p className="text-sm text-brand-ink/70">{tierCopy[tierFilter]}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPartners.map((partner) => (
            <LogoCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-brand-ink ring-1 ring-brand-primary/10">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-[11px] font-bold text-white">
        {value}
      </span>
      <span>{label}</span>
    </span>
  )
}

type LogoCardProps = {
  partner: Partner
}

function LogoCard({ partner }: LogoCardProps) {
  const accent = tierAccent[partner.tier]

  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-base bg-white p-4 text-left shadow-sm ring-1 ring-brand-primary/5 transition hover:-translate-y-0.5 hover:shadow-lg"
      aria-label={`Mở trang đối tác ${partner.name}`}
    >
      <span
        className={`pointer-events-none absolute -left-8 -top-10 h-28 w-28 rotate-12 bg-gradient-to-br ${accent} blur-2xl transition opacity-80 group-hover:scale-110 group-hover:opacity-100`}
      />
      <div className="relative flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-base shadow-inner ring-1 ring-brand-primary/10">
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            decoding="async"
            className="max-h-8 max-w-full object-contain transition duration-200 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold leading-snug text-brand-ink">{partner.name}</p>
            <span className="rounded-full bg-brand-light px-2 py-0.5 text-[11px] font-semibold text-brand-dark ring-1 ring-brand-primary/10">
              {tierLabelVi[partner.tier]}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-brand-ink/70">
            {partner.tag && (
              <span className="rounded-full bg-brand-light px-2 py-0.5 font-semibold text-brand-dark ring-1 ring-brand-primary/10">
                {partner.tag}
              </span>
            )}
            {partner.country && (
              <span className="rounded-full bg-brand-light px-2 py-0.5 font-semibold text-brand-dark ring-1 ring-brand-primary/10">
                {partner.country}
              </span>
            )}
          </div>
        </div>
      </div>
      <span className="mt-4 text-[12px] text-brand-ink/60">Nhấn để xem chi tiết</span>
      <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-brand-light/60 to-transparent opacity-0 transition group-hover:opacity-100" />
    </a>
  )
}
