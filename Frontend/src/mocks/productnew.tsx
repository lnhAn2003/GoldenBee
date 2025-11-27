export type ProductNewCard = {
  id: string
  name: string
  stock: string
  warehouse: string
  image: string
}

export const newProducts: ProductNewCard[] = [
  {
    id: "new-terrazzo-60",
    name: "Gạch terrazzo khổ lớn 60x60 Urban Light",
    stock: "402,50",
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_3.jpg"
  },
  {
    id: "new-smartwash-r02",
    name: "Bồn cầu thông minh SmartWash R02",
    stock: "275,30",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_4.jpg"
  },
  {
    id: "new-faucet-halo",
    name: "Bộ vòi lavabo Inox 304 Halo",
    stock: "198,40",
    warehouse: "Kho An Dương Vương",
    image: "/gạch_1.jpg"
  },
  {
    id: "new-op-nano-go",
    name: "Tấm ốp nano họa tiết gỗ 300x600",
    stock: "325,10",
    warehouse: "Kho Hậu Giang",
    image: "/gạch_2.jpg"
  },
  {
    id: "new-hex-frost",
    name: "Gạch lục giác Mosaic Frost",
    stock: "143,75",
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_3.jpg"
  },
  {
    id: "new-mirror-aura",
    name: "Gương tràn viền nhôm đèn LED Aura",
    stock: "264,90",
    warehouse: "Kho Hậu Vân Long",
    image: "/gạch_4.jpg"
  }
]
