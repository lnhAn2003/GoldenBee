
export type CatalogItem = {
  id: string
  name: string
  code: string
  description: string
}

export const catalogItems: CatalogItem[] = [
  {
    id: "catalog-ngoi",
    name: "Ngói màu cao cấp",
    code: "NGOI",
    description:
      "Nhóm ngói màu cho mái bê tông, nhiều tông màu hiện đại, phù hợp nhà phố và biệt thự."
  },
  {
    id: "catalog-ngoi-prime",
    name: "Ngói Prime",
    code: "NGOI-PRIME",
    description:
      "Dòng ngói thương hiệu Prime, bề mặt phủ men bền màu, hạn chế rêu mốc và bạc màu theo thời gian."
  },
  {
    id: "catalog-ngoi-secoin",
    name: "Ngói Secoin",
    code: "NGOI-SECOIN",
    description:
      "Ngói lợp Secoin dùng công nghệ ép hiện đại, chịu lực tốt, phù hợp mái dốc cho công trình dân dụng và thương mại."
  },
  {
    id: "catalog-ngoi-thai-scg",
    name: "Ngói Thái SCG",
    code: "NGOI-SCG",
    description:
      "Ngói Thái SCG chống thấm, cách nhiệt tốt, thiết kế sang trọng cho mái kiểu Thái và resort."
  },
  {
    id: "catalog-gach",
    name: "Gạch lát & ốp tường",
    code: "GACH",
    description:
      "Gạch lát nền, gạch ốp tường, gạch sân vườn và các dòng gạch trang trí phổ biến trong kho Ong Vàng."
  },
  {
    id: "catalog-phu-kien",
    name: "Phụ kiện mái & gạch",
    code: "PHU-KIEN",
    description:
      "Máng xối, ngói nóc, keo chít mạch, ke góc và các phụ kiện đồng bộ theo từng dòng sản phẩm."
  }
]
