import { Layers, Percent, Warehouse } from "lucide-react"
import { buttonClass } from "./ui/button"

type ProductSaleCard = {
  id: string
  name: string
  stock: string
  discount: number
  warehouse: string
  image: string
}

// 4 ảnh gạch có sẵn
const productImages = ["/gạch_1.jpg", "/gạch_2.jpg", "/gạch_3.jpg", "/gạch_4.jpg"]

// Dữ liệu gốc (không có image)
const baseProducts: Omit<ProductSaleCard, "image">[] = [
  {
    id: "sale-gm0001",
    name: "Gạch KIM PHONG ĐÁ 40x40 GM0001",
    stock: "940,04",
    discount: 13,
    warehouse: "Kho Hậu Văn Long"
  },
  {
    id: "sale-tsl-m006",
    name: "Gương soi đèn LED TUSLO M006",
    stock: "512,30",
    discount: 21,
    warehouse: "Kho Hậu Giang"
  },
  {
    id: "sale-sen304",
    name: "Sen cây TUSLO Inox 304 Luxury",
    stock: "184,90",
    discount: 15,
    warehouse: "Kho An Dương Vương"
  },
  {
    id: "sale-op-van-da",
    name: "Tấm ốp vân đá 600x1200",
    stock: "245,50",
    discount: 20,
    warehouse: "Kho Hậu Giang"
  },
  {
    id: "sale-heater-20l",
    name: "Máy nước nóng 20L - Smart",
    stock: "301,22",
    discount: 14,
    warehouse: "Kho Hậu Văn Long"
  },
  {
    id: "sale-lavabo-goc",
    name: "Lavabo đặt góc Smart 900mm",
    stock: "126,75",
    discount: 16,
    warehouse: "Kho Hậu Văn Long"
  }
]

// Gán ảnh “ngẫu nhiên” theo index (không cần trùng thứ tự)
const saleProducts: ProductSaleCard[] = baseProducts.map((product, index) => {
  const imgIndex = (index * 7 + 3) % productImages.length
  return {
    ...product,
    image: productImages[imgIndex]
  }
})

export default function ProductSale() {
  const filteredProducts = saleProducts

  return (
    <section
      id="product-sale"
      aria-label="Sản phẩm đang giảm giá"
      className="relative isolate bg-white py-14"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-light/70 px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm">
              Hàng giảm giá
            </span>
            <h2 className="text-3xl font-bold text-brand-ink">Sản phẩm ưu đãi</h2>
            <p className="text-sm text-brand-ink/70">
              Giá đã bao gồm khuyến mãi. Chọn kho để xem hàng còn sẵn.
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
                    <Percent className="h-3 w-3" />
                    -{product.discount}%
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-3">
                  <h3 className="text-sm font-semibold leading-snug text-brand-ink">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-brand-ink/80">
                    <Layers className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold text-brand-primary">
                      Tồn kho:
                    </span>
                    <span>{product.stock}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-ink/80">
                    <Warehouse className="h-4 w-4 text-brand-primary" />
                    <span className="font-semibold text-brand-primary">Kho:</span>
                    <span>{product.warehouse}</span>
                  </div>
                  <div className="mt-auto flex items-center justify-end">
                    <button className={buttonClass({ variant: "secondary", size: "sm" })}>Xem chi tiết</button>
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
