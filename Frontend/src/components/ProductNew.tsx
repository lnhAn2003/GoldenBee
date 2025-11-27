import { Layers, Sparkles, Warehouse } from "lucide-react"
import { buttonClass } from "./ui/button"

type ProductNewCard = {
  id: string
  name: string
  stock: string
  warehouse: string
  image: string
}

const productImages = ["/gạch_1.jpg", "/gạch_2.jpg", "/gạch_3.jpg", "/gạch_4.jpg"]

const baseProducts: Omit<ProductNewCard, "image">[] = [
  {
    id: "new-terrazzo-60",
    name: "Gạch terrazzo khổ lớn 60x60 Urban Light",
    stock: "402,50",
    warehouse: "Kho Hậu Văn Long"
  },
  {
    id: "new-smartwash-r02",
    name: "Bồn cầu thông minh SmartWash R02",
    stock: "275,30",
    warehouse: "Kho Hậu Giang"
  },
  {
    id: "new-faucet-halo",
    name: "Bộ vòi lavabo Inox 304 Halo",
    stock: "198,40",
    warehouse: "Kho An Dương Vương"
  },
  {
    id: "new-op-nano-go",
    name: "Tấm ốp nano họa tiết gỗ 300x600",
    stock: "325,10",
    warehouse: "Kho Hậu Giang"
  },
  {
    id: "new-hex-frost",
    name: "Gạch lục giác Mosaic Frost",
    stock: "143,75",
    warehouse: "Kho Hậu Văn Long"
  },
  {
    id: "new-mirror-aura",
    name: "Gương tròn viền nhôm đèn LED Aura",
    stock: "264,90",
    warehouse: "Kho Hậu Văn Long"
  }
]

const newProducts: ProductNewCard[] = baseProducts.map((product, index) => {
  const imgIndex = (index * 5 + 1) % productImages.length
  return {
    ...product,
    image: productImages[imgIndex]
  }
})

export default function ProductNew() {
  const filteredProducts = newProducts

  return (
    <section
      id="product-new"
      aria-label="Sản phẩm mới"
      className="relative isolate bg-white pb-5"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-light/70 px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm">
              Hàng mới
            </span>
            <h2 className="text-3xl font-bold text-brand-ink">Sản phẩm mới</h2>
            <p className="text-sm text-brand-ink/70">
              Danh mục hàng mới nhập kho. Chọn kho để xem hàng còn sẵn.
            </p>
          </div>
          <span className="rounded-full bg-brand-light px-3 py-1 text-[11px] font-semibold text-brand-dark shadow-sm">
            {filteredProducts.length} sản phẩm
          </span>
        </header>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filteredProducts.map((product) => {
            return (
              <article
                key={product.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-base bg-white shadow-sm ring-1 ring-brand-primary/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain p-1 transition duration-500"
                  />
                  <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-brand-primary px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                    <Sparkles className="h-3 w-3" />
                    Mới
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-3">
                  <h3 className="text-sm font-semibold leading-snug text-brand-ink">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-brand-ink/80">
                    <Layers className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold text-brand-primary">Tồn kho:</span>
                    <span>{product.stock}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-ink/80">
                    <Warehouse className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold text-brand-primary">Kho:</span>
                    <span>{product.warehouse}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-end">
                    <button className={buttonClass({ variant: "secondary", size: "sm" })}>
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
