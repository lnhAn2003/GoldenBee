import { useMemo, useState } from "react"
import { Warehouse, Layers } from "lucide-react"
import { buttonClass } from "../ui/button.ui"
import { SectionHeader } from "../ui/section-header.ui"
import { Card } from "../ui/card.ui"
import { products, PRODUCT_KHO_OPTIONS } from "../../mocks/product"


export default function Product() {
  const khoOptions = PRODUCT_KHO_OPTIONS
  const [khoFilter, setKhoFilter] = useState<string>(khoOptions[0])

  const visibleProducts = useMemo(
    () =>
      khoFilter === "Tất cả kho"
        ? products
        : products.filter((item) => item.warehouse === khoFilter),
    [khoFilter]
  )

  return (
    <section
      id="product"
      aria-label="Danh sách hàng"
      className="relative isolate bg-white pt-4 pb-5"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Danh sách tồn kho"
          title="Sản phẩm & kho hàng"
          description="Hiển thị tên hàng, tồn kho, hình ảnh và kho lưu trữ."
          align="left"
          side={
            <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-brand-primary/10">
              <div className="flex items-center gap-2 text-brand-ink">
                <Warehouse className="h-5 w-5 text-brand-primary" />
                <div className="text-sm font-semibold">3 kho chính</div>
              </div>
              <button
                className={buttonClass({
                  variant: "primary",
                  size: "sm",
                  className: "ml-1"
                })}
              >
                Xem thêm hàng hóa
              </button>
              <select
                value={khoFilter}
                onChange={(e) => setKhoFilter(e.target.value)}
                className="rounded-full border border-brand-primary/30 bg-white px-3 py-2 text-xs font-semibold text-brand-ink shadow-sm focus:border-brand-primary focus:outline-none"
              >
                {khoOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          }
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visibleProducts.map((product) => (
            <Card
              key={product.id}
              as="article"
              className="group relative flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain p-1 transition duration-500"
                />
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-3">
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
                  <button
                    className={buttonClass({
                      variant: "secondary",
                      size: "sm"
                    })}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
