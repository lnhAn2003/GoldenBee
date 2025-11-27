export type ProductCard = {
  id: string
  name: string
  stock: string
  warehouse: string
  image: string
}

export const products: ProductCard[] = [
  {
    id: "gm0001",
    name: "Gạch KIM PHONG đá 40x40 GM0001",
    stock: "940,04",
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_1.jpg"
  },
  {
    id: "gm0007",
    name: "Gạch KIM PHONG đá 40x40 GM0007",
    stock: "908,62",
    warehouse: "Kho Hậu Vân Long",
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
    warehouse: "Kho Hậu Vân Long",
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
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_2.jpg"
  },
  {
    id: "gach-op-3d",
    name: "Gạch ốp 3D họa tiết Nordic 300x600",
    stock: "188,00",
    warehouse: "Kho Hậu Vân Long",
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

export const PRODUCT_KHO_OPTIONS: string[] = ["Tất cả kho", "Kho Hậu Vân Long", "Kho Hậu Giang", "Kho An Dương Vương"]