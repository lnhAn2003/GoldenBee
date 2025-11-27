import { Layers, Percent, Warehouse } from "lucide-react"
import { buttonClass } from "./ui/button"
import { SectionHeader } from "./ui/section-header"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { saleProducts } from "../mocks/productsale"

export default function ProductSale() {
  const filteredProducts = saleProducts

  return (
    <section
      id="product-sale"
      aria-label="Sản phẩm đang giảm giá"
      className="relative isolate bg-white pb-5"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Hàng giảm giá"
          title="Sản phẩm ưu đãi"
          description="Giá đã bao gồm khuyến mãi. Chọn kho để xem hàng còn sẵn."
          align="left"
          side={
            <Badge variant="soft" className="shadow-sm">
              {filteredProducts.length} sản phẩm
            </Badge>
          }
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {filteredProducts.map((product) => {
            return (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
