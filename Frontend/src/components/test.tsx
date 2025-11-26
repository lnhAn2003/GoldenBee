import { ArrowRight, PackageCheck, ShieldCheck, Tag, Truck } from "lucide-react"

type ProductItem = {
  id: string
  name: string
  categoryId: "roof" | "tile"
  price: string
  sale?: string
  cover: string
  tag?: string
}

type Category = {
  id: "roof" | "tile"
  title: string
  description: string
  image: string
}

const catalog: ProductItem[] = [
  { id: "deal-roof-cool", name: "Ngoi mau CoolRoof Fuji", categoryId: "roof", price: "45.000d/vien", sale: "-18%", cover: "https://images.unsplash.com/photo-1471257603635-a048f9fe5aab?auto=format&fit=crop&q=80&w=800" },
  { id: "deal-roof-flat", name: "Ngoi phang Prestige Graphite", categoryId: "roof", price: "52.000d/vien", sale: "-12%", cover: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800" },
  { id: "deal-roof-terracotta", name: "Ngoi dat nung Terracotta S", categoryId: "roof", price: "38.500d/vien", sale: "-10%", cover: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800" },
  { id: "deal-tile-6060", name: "Gach granite 60x60 Marble", categoryId: "tile", price: "245.000d/m2", sale: "-9%", cover: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
  { id: "deal-tile-8080", name: "Gach 80x80 men bong", categoryId: "tile", price: "315.000d/m2", sale: "-15%", cover: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800" },
  { id: "deal-wall-3060", name: "Gach op tuong 30x60 vien kim", categoryId: "tile", price: "165.000d/m2", sale: "-8%", cover: "https://images.unsplash.com/photo-1582719478171-2fafd3c05e25?auto=format&fit=crop&q=80&w=800" },
  { id: "ridge-set", name: "Bo phu kien ridge cap full set", categoryId: "roof", price: "550.000d/bo", tag: "New", cover: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&q=80&w=800" },
  { id: "vent-tile", name: "Ngoi thong gio dong mau", categoryId: "roof", price: "62.000d/vien", cover: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=900" },
  { id: "roof-light", name: "Ngoi lay sang polycarbonate", categoryId: "roof", price: "195.000d/tam", cover: "https://images.unsplash.com/photo-1471253794676-0f039a6aae7b?auto=format&fit=crop&q=80&w=900" },
  { id: "flat-stone", name: "Ngoi phang tone da khoi", categoryId: "roof", price: "49.500d/vien", sale: "-6%", cover: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&q=80&w=800" },
  { id: "tile-terrace", name: "Gach san thuong chong truot R11", categoryId: "tile", price: "178.000d/m2", cover: "https://images.unsplash.com/photo-1582710860478-903fd6b531c5?auto=format&fit=crop&q=80&w=900" },
  { id: "tile-wood", name: "Gach go 15x80 tu nhien", categoryId: "tile", price: "230.000d/m2", sale: "-7%", cover: "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?auto=format&fit=crop&q=80&w=900" },
  { id: "tile-mosaic", name: "Gach mosaic ho boi", categoryId: "tile", price: "265.000d/m2", tag: "Hot", cover: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&q=80&w=900" },
  { id: "adhesive", name: "Keo dan gach ngoai troi C1", categoryId: "tile", price: "148.000d/bao", cover: "https://images.unsplash.com/photo-1571687949920-75b9b2b3f783?auto=format&fit=crop&q=80&w=900" },
  { id: "grout", name: "Keo cha ron khang nuoc", categoryId: "tile", price: "98.000d/goi", cover: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=900" },
  { id: "primer", name: "Son lot xi mang ngoai troi", categoryId: "tile", price: "420.000d/thung", cover: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=900" }
]

const categories: Category[] = [
  {
    id: "roof",
    title: "Ngoi mau chuyen nghiep",
    description: "Ngoi mau, ngoi phang, dat nung, lay sang, ridge, thong gio.",
    image: "https://images.unsplash.com/photo-1471253794676-0f039a6aae7b?auto=format&fit=crop&q=80&w=900"
  },
  {
    id: "tile",
    title: "Gach op lat cao cap",
    description: "Granite, ceramic, mosaic, san thuong R11, keo dan va keo ron.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=900"
  }
]

const deals = catalog.slice(0, 6)

const serviceHighlights = [
  { icon: Truck, title: "Giao toc hanh", description: "Xe cau, xe tai, cong trinh cao" },
  { icon: ShieldCheck, title: "Bao lanh mau", description: "Tu van ket cau, rong nuoc, ron mau" },
  { icon: PackageCheck, title: "Song song thau", description: "Thu mau mau, QC va nghiem thu" }
]

export default function Product() {
  return (
    <section id="catalog" className="relative isolate py-14">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-light/60 via-white to-brand-light/10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_center,rgba(45,107,255,0.08),transparent_55%)]" />

      <div className="container mx-auto max-w-6xl px-4 space-y-12">
        <header className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.95fr]">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-ink leading-tight">Gach op lat & ngoi mau chuyen nghiep cho nha phan phoi</h2>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-ink via-brand-dark to-brand-primary text-white shadow-lg ring-1 ring-black/10">
            <div className="absolute -left-10 top-4 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-light/20 blur-3xl" />
            <div className="relative space-y-6 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Trang thai kho</p>
                  <p className="mt-1 text-xl font-bold leading-tight">Nhap kho song song hai khu vuc</p>
                  <p className="text-sm text-white/80">Gui mau nhanh, tu van ket cau mai & gach theo du an.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                  <PackageCheck className="h-4 w-4" />
                  QC du an
                </span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4 shadow-inner backdrop-blur">
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span>So deal dang mo</span>
                  <span>Hien tai</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="text-3xl font-extrabold leading-none">38</div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[68%] rounded-full bg-white/90" />
                  </div>
                  <span className="text-xs font-semibold text-white/80">68%</span>
                </div>
                <p className="mt-2 text-[13px] text-white/70">Deal nhap kho roof & tile, lich giao 24-48h, linh hoat doc tai.</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {serviceHighlights.map((item) => (
                  <div key={item.title} className="rounded-xl border border-white/15 bg-white/10 p-3 shadow-sm backdrop-blur">
                    <item.icon className="h-4 w-4 text-white/80" />
                    <p className="mt-2 text-sm font-semibold leading-tight">{item.title}</p>
                    <p className="text-[13px] text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <DealsRow items={deals} />

        <div className="space-y-8">
          {categories.map((category) => {
            const items = catalog.filter((p) => p.categoryId === category.id)
            return <CategoryBlock key={category.id} category={category} items={items} />
          })}
        </div>
      </div>
    </section>
  )
}

type DealsProps = {
  items: ProductItem[]
}

function DealsRow({ items }: DealsProps) {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-6">
      <div className="col-span-2 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark p-5 text-white shadow-lg ring-1 ring-brand-dark/20">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Deal nhap kho thang nay</p>
            <p className="text-xl font-bold leading-tight">Roof & tile - giao nhanh song song</p>
            <p className="text-sm text-white/80">Nguon hang quay nhanh, QC san, phu hop dai ly va nha thau.</p>
          </div>
          <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">Batch 07</span>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2 text-center">
          {[
            { label: "Days", value: "04" },
            { label: "Hours", value: "13" },
            { label: "Min", value: "34" },
            { label: "Sec", value: "56" }
          ].map((slot) => (
            <div key={slot.label} className="rounded-lg border border-white/15 bg-white/10 px-2 py-2 text-white shadow-inner backdrop-blur">
              <div className="text-base font-bold leading-tight">{slot.value}</div>
              <div className="text-[11px] font-semibold text-white/80">{slot.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm transition hover:bg-brand-light">
            Nhan bang gia nhanh
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
            Chon mau thuc te
          </button>
        </div>
      </div>

      {items.map((item) => (
        <article key={item.id} className="group relative flex flex-col gap-2 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-brand-ink/10 transition hover:-translate-y-1 hover:shadow-md">
          <div className="relative h-24 w-full overflow-hidden rounded-xl bg-brand-light">
            <img src={item.cover} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold text-brand-ink shadow-sm">
              {item.categoryId === "roof" ? "Ngoi" : "Gach"}
            </span>
            {item.sale && (
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs font-semibold text-brand-primary shadow-sm ring-1 ring-brand-ink/10">
                <Tag className="h-3 w-3" />
                {item.sale}
              </span>
            )}
          </div>
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-semibold text-brand-ink leading-tight line-clamp-2">{item.name}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="text-brand-ink/60">From</div>
            <div className="font-bold text-brand-primary">{item.price}</div>
          </div>
        </article>
      ))}
    </div>
  )
}

type CategoryBlockProps = {
  category: Category
  items: ProductItem[]
}

function CategoryBlock({ category, items }: CategoryBlockProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_1.2fr]">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-ink/10">
        <img src={category.image} alt={category.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light">Danh muc</p>
            <h3 className="text-2xl font-bold leading-tight">{category.title}</h3>
            <p className="text-sm text-white/80">{category.description}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-white/80">
              <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">Ton kho {items.length} mau</span>
              <span className="rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/20">Tien do giao 24-48h</span>
            </div>
          </div>
          <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm transition hover:bg-white">
            Xem tat ca danh muc
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 6).map((item) => (
          <article key={item.id} className="flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-ink/10 transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-32 w-full overflow-hidden rounded-lg bg-brand-light">
              <img src={item.cover} alt={item.name} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              {item.sale && (
                <span className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-semibold text-brand-primary shadow-sm ring-1 ring-brand-ink/10">
                  <Tag className="h-3 w-3" />
                  {item.sale}
                </span>
              )}
              {item.tag && (
                <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-brand-primary px-2 py-1 text-[11px] font-semibold text-white shadow-sm">
                  {item.tag}
                </span>
              )}
              <div className="absolute inset-x-3 bottom-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold text-brand-ink shadow-sm ring-1 ring-brand-ink/10">
                {item.categoryId === "roof" ? "Ngoi mau / lay sang" : "Granite / Ceramic / Mosaic"}
              </div>
            </div>
            <p className="text-sm font-semibold text-brand-ink leading-tight line-clamp-2">{item.name}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-brand-ink/60">From</span>
              <span className="font-bold text-brand-primary">{item.price}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

