export type ProductSaleCard = {
  id: string
  name: string
  stock: string
  discount: number
  warehouse: string
  image: string
}

export const saleProducts: ProductSaleCard[] = [
  {
    id: "sale-gm0001",
    name: "Gạch KIM PHONG đá 40x40 GM0001",
    stock: "940,04",
    discount: 13,
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_1.jpg"
  },
  {
    id: "sale-tsl-m006",
    name: "Gương soi đèn LED TUSLO M006",
    stock: "512,30",
    discount: 21,
    warehouse: "Kho Hậu Giang",
    image: "/gạch_2.jpg"
  },
  {
    id: "sale-sen304",
    name: "Sen cây TUSLO Inox 304 Luxury",
    stock: "184,90",
    discount: 15,
    warehouse: "Kho An Dương Vương",
    image: "/gạch_3.jpg"
  },
  {
    id: "sale-op-van-da",
    name: "Tấm ốp vân đá 600x1200",
    stock: "245,50",
    discount: 20,
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg"
  },
  {
    id: "sale-heater-20l",
    name: "Máy nước nóng 20L - Smart",
    stock: "301,22",
    discount: 14,
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_1.jpg"
  },
  {
    id: "sale-lavabo-goc",
    name: "Lavabo đặt góc Smart 900mm",
    stock: "126,75",
    discount: 16,
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_2.jpg"
  }
]
