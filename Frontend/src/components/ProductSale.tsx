import { Layers, Tag, Warehouse } from "lucide-react"

type ProductCard = {
  id: string
  name: string
  stock: string
  warehouse: string
  image: string
  sale: string
}

const saleProducts: ProductCard[] = [
  {
    id: "gm0001-sale",
    name: "GẠCH KIM PHONG ĐÁ 40x40 GM0001",
    stock: "140,00",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_1.jpg",
    sale: "-18%"
  },
  {
    id: "gm0007-sale",
    name: "GẠCH KIM PHONG ĐÁ 40x40 GM0007",
    stock: "108,50",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_2.jpg",
    sale: "-15%"
  },
  {
    id: "tsl-m001-sale",
    name: "Gương soi TUSLO M001 450x600mm",
    stock: "86,20",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_3.jpg",
    sale: "-20%"
  },
  {
    id: "tsl-m006-sale",
    name: "Gương soi đèn LED TUSLO M006 500x700mm",
    stock: "64,10",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg",
    sale: "-25%"
  }
]

export default function ProductSale() {
  return (
    <section id="product-sale" aria-label="Sản phẩm giảm giá" className="relative isolate bg-white py-14">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-light/70 px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm">
              Sản phẩm giảm giá
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-brand-ink/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-base px-3 py-2 ring-1 ring-brand-primary/10">
                <Tag className="h-4 w-4 text-brand-primary" />
                Giảm đến 25%
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-base px-3 py-2 ring-1 ring-brand-primary/10">
                ⏳ Còn 05 ngày
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-brand-base px-4 py-3 ring-1 ring-brand-primary/10">
            <Warehouse className="h-5 w-5 text-brand-primary" />
            <div className="text-sm font-semibold">3 kho chính</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {saleProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-base bg-white shadow-sm ring-1 ring-brand-primary/5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain p-2 transition duration-500"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  <Tag className="h-4 w-4" />
                  {product.sale}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-semibold leading-tight text-brand-ink">{product.name}</h3>
                <div className="flex items-center gap-2 text-sm text-brand-ink/80">
                  <Layers className="h-4 w-4 text-brand-primary" />
                  <span className="font-semibold text-brand-primary">Tồn kho:</span>
                  <span>{product.stock}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-ink/80">
                  <Warehouse className="h-4 w-4 text-brand-primary" />
                  <span className="font-semibold text-brand-primary">Kho:</span>
                  <span>{product.warehouse}</span>
                </div>
                <div className="mt-auto flex items-center justify-end">
                  <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark">Xem chi tiết</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
