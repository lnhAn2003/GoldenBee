import { Layers, Plus } from "lucide-react"

type CatalogItem = {
  id: string
  name: string
  code: string
  description: string
}

const catalogItems: CatalogItem[] = [
  {
    id: "catalog-ngoi",
    name: "Ngói màu cao cấp",
    code: "NGOI",
    description:
      "Nhóm ngói màu cho mái bê tông, nhiều tông màu hiện đại, phù hợp nhà phố và biệt thự."
  },
  {
    id: "catalog-ngoi-prime",
    name: "Ngói Prime",
    code: "NGOI-PRIME",
    description:
      "Dòng ngói thương hiệu Prime, bề mặt phủ men bền màu, hạn chế rêu mốc và bạc màu theo thời gian."
  },
  {
    id: "catalog-ngoi-secoin",
    name: "Ngói Secoin",
    code: "NGOI-SECOIN",
    description:
      "Ngói lợp Secoin dùng công nghệ ép hiện đại, chịu lực tốt, phù hợp mái dốc cho công trình dân dụng và thương mại."
  },
  {
    id: "catalog-ngoi-thai-scg",
    name: "Ngói Thái SCG",
    code: "NGOI-SCG",
    description:
      "Ngói Thái SCG chống thấm, cách nhiệt tốt, thiết kế sang trọng cho mái kiểu Thái và resort."
  },
  {
    id: "catalog-gach",
    name: "Gạch lát & ốp tường",
    code: "GACH",
    description:
      "Gạch lát nền, gạch ốp tường, gạch sân vườn và các dòng gạch trang trí phổ biến trong kho Ong Vàng."
  },
  {
    id: "catalog-phu-kien",
    name: "Phụ kiện mái & gạch",
    code: "PHU-KIEN",
    description:
      "Máng xối, ngói nóc, keo chít mạch, ke góc và các phụ kiện đồng bộ theo từng dòng sản phẩm."
  }
]

export default function Catalog() {
  return (
    <section
      id="catalog"
      aria-label="Danh mục catalog ngói và gạch"
      className="relative isolate bg-white pt-8 pb-14"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />

      <div className="container mx-auto max-w-6xl px-4">
        {/* Header lớn kiểu DISCOVER CATEGORIES */}
        <header className="mb-6 space-y-2 text-brand-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Danh mục
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Khám phá các nhóm catalog
          </h2>
          <p className="max-w-2xl text-sm text-brand-ink/70">
            Chọn nhanh nhóm ngói, gạch hoặc phụ kiện bạn quan tâm để đi tiếp
            vào chi tiết sản phẩm phù hợp với công trình.
          </p>
        </header>

        {/* Grid 3 cột */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {catalogItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between rounded-3xl border border-brand-base bg-white/95 p-4 shadow-sm ring-1 ring-brand-primary/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary">
                  <Layers className="h-4 w-4" />
                  <span>Nhóm catalog</span>
                </div>
                <button
                  type="button"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-light/80 text-[10px] font-bold text-brand-primary shadow-sm transition group-hover:bg-brand-primary group-hover:text-white"
                  aria-label={`Xem nhóm ${item.name}`}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-bold uppercase leading-snug text-brand-ink">
                  {item.name}
                </h3>
                <p className="text-[11px] font-mono uppercase tracking-wide text-brand-ink/60">
                  {item.code}
                </p>
                <p className="text-sm text-brand-ink/75">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
