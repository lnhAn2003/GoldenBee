import { useMemo, useState } from "react"
import { Warehouse, Layers } from "lucide-react"
import { buttonClass } from "./ui/button"

type ProductCard = {
  id: string
  name: string
  stock: string
  warehouse: string
  image: string
}

const products: ProductCard[] = [
  {
    id: "gm0001",
    name: "Gạch KIM PHONG ĐÁ 40x40 GM0001",
    stock: "940,04",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_1.jpg"
  },
  {
    id: "gm0007",
    name: "Gạch KIM PHONG ĐÁ 40x40 GM0007",
    stock: "908,62",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_2.jpg"
  },
  {
    id: "tsl-m001",
    name: "Gương soi TUSLO M001 450x600mm",
    stock: "512,30",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_3.jpg"
  },
  {
    id: "tsl-m006",
    name: "Gương soi đèn LED TUSLO M006 500x700mm",
    stock: "278,40",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg"
  },
  {
    id: "sen-304",
    name: "Sen cây TUSLO Inox 304 Luxury",
    stock: "184,90",
    warehouse: "Kho An Dương Vương",
    image: "/gạch_1.jpg"
  },
  {
    id: "bon-tam-smart",
    name: "Bồn tắm nằm Smart 1700mm",
    stock: "93,10",
    warehouse: "Kho An Dương Vương",
    image: "/gạch_2.jpg"
  },
  {
    id: "lavabo-goc",
    name: "Lavabo đặt góc Smart 900mm",
    stock: "126,75",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_3.jpg"
  },
  {
    id: "heater-20l",
    name: "Máy nước nóng 20L - Smart",
    stock: "301,22",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg"
  },
  {
    id: "op-van-da",
    name: "Tấm ốp vân đá 600x1200",
    stock: "245,50",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_1.jpg"
  },
  {
    id: "ngoi-tuslo",
    name: "Ngói màu TUSLO Prestige",
    stock: "410,75",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_2.jpg"
  },
  {
    id: "gach-op-3d",
    name: "Gạch ốp 3D họa tiết Nordic 300x600",
    stock: "188,00",
    warehouse: "Kho Hồ Văn Long",
    image: "/gạch_3.jpg"
  },
  {
    id: "sen-tay",
    name: "Sen tay TUSLO áp lực cao",
    stock: "512,90",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg"
  }
]

export default function Product() {
  const khoOptions = ["Tất cả kho", "Kho Hồ Văn Long", "Kho Hậu Giang", "Kho An Dương Vương"]
  const [khoFilter, setKhoFilter] = useState<string>(khoOptions[0])

  const visibleProducts = useMemo(
    () => (khoFilter === "Tất cả kho" ? products : products.filter((item) => item.warehouse === khoFilter)),
    [khoFilter]
  )

  return (
    <section id="product" aria-label="Danh sách hàng" className="relative isolate bg-white pt-4 pb-5">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-light/70 px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm">
              Danh sách tồn kho
            </span>
            <h2 className="text-3xl font-bold text-brand-ink">Sản phẩm & kho hàng</h2>
            <p className="text-sm text-brand-ink/70">Hiển thị Tên hàng, Tồn kho, Hình ảnh và kho lưu trữ.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-brand-primary/10">
            <div className="flex items-center gap-2 text-brand-ink">
              <Warehouse className="h-5 w-5 text-brand-primary" />
              <div className="text-sm font-semibold">3 kho chính</div>
            </div>
            <button className={buttonClass({ variant: "primary", size: "sm", className: "ml-3" })}>Xem thêm hàng hóa</button>
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
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visibleProducts.map((product) => (
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
              </div>

              <div className="flex flex-1 flex-col gap-1.5 p-3">
                <h3 className="text-sm font-semibold leading-snug text-brand-ink">{product.name}</h3>
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
                  <button className={buttonClass({ variant: "secondary", size: "sm" })}>Xem chi tiết</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
