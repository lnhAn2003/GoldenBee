export type Story = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  badge?: string
}


export const projectNews: Story[] = [
  {
    id: "pj1",
    title: "Hoàn tất giao gạch ốp mặt tiền dự án Skyline",
    excerpt:
      "Hơn 1.200 m² gạch ốp Sienna và keo chít mạch màu tối đã được nâng lên mái, bàn giao cho đội thi công kiểm tra.",
    category: "Tin dự án",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1500&auto=format&fit=crop",
    badge: "Dự án lớn"
  },
  {
    id: "pj2",
    title: "Bố trí kho trung chuyển cho khu nhà phố ven sông",
    excerpt:
      "Sắp xếp pallet theo từng block nhà, đảm bảo xe cẩu làm việc liên tục mà không chiếm dụng lối đi.",
    category: "Tin dự án",
    date: "2025-11-18",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pj3",
    title: "Đổ ầm lót, gạch sân vườn: kế hoạch giao hàng trong 8 giờ",
    excerpt:
      "Gạch lát, phụ kiện thoát nước và keo chít mạch được chia theo từng công, giao trọn bộ trong một đêm.",
    category: "Tin dự án",
    date: "2025-11-15",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
  }
]

export const interiorNews: Story[] = [
  {
    id: "in1",
    title: "Xu hướng gạch terrazzo khổ lớn cho phòng khách 2025",
    excerpt:
      "Bề mặt mài bóng nhẹ, ít ron, tông xám – be đang được nhiều kiến trúc sư lựa chọn cho không gian mở.",
    category: "Tin nội thất",
    date: "2025-11-14",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=800&auto=format&fit=crop",
    badge: "Xu hướng"
  },
  {
    id: "in2",
    title: "Chọn gạch ốp phòng tắm: chống trơn nhưng vẫn đẹp",
    excerpt:
      "So sánh nhanh giữa bề mặt nhám, bán nhám và phủ men sugar cho khu vực luôn ẩm ướt.",
    category: "Tin nội thất",
    date: "2025-11-12",
    image: "https://images.unsplash.com/photo-1521783593447-5702fcd0b1af?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "in3",
    title: "Gạch giả gỗ cho căn hộ nhỏ: mẹo chọn kích thước & tông màu",
    excerpt:
      "Kích thước 15x80, 20x120 giúp không gian bớt chia vệt, tăng cảm giác dài và rộng hơn.",
    category: "Tin nội thất",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop"
  }
]

export const tileArticles: Story[] = [
  {
    id: "tl1",
    title: "Hướng dẫn chọn ngói cho mỗi bề tông: độ dốc, màu & phụ kiện",
    excerpt:
      "Từ độ dốc tối thiểu đến cách xử lý diềm mái, bài viết giúp bạn hình dung trọn bộ vật tư cần đặt.",
    category: "Bài viết gạch & ngói",
    date: "2025-11-09",
    image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=800&auto=format&fit=crop",
    badge: "Hướng dẫn"
  },
  {
    id: "tl2",
    title: "5 lỗi thường gặp khi chít mạch gạch ngoài trời",
    excerpt:
      "Chọn sai màu, chít mạch khi nền chưa khô hẳn hoặc không vệ sinh bề mặt đúng cách dễ gây đốm mốc.",
    category: "Bài viết gạch & ngói",
    date: "2025-11-07",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop"
  }
]

export const companyNews: Story[] = [
  {
    id: "cp1",
    title: "Ong Vàng khai trương kho Hậu Giang",
    excerpt:
      "Kho mới giúp rút ngắn thời gian giao hàng cho các công trình khu Tây và miền Tây Nam Bộ.",
    category: "Hoạt động công ty",
    date: "2025-11-05",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800&auto=format&fit=crop",
    badge: "Sự kiện"
  },
  {
    id: "cp2",
    title: "Workshop cùng kiến trúc sư: chọn vật liệu cho nhà phố 5m",
    excerpt:
      "Buổi chia sẻ về cách kết hợp gạch, ngói và thiết bị vệ sinh để tối ưu ngân sách.",
    category: "Hoạt động công ty",
    date: "2025-11-02",
    image: "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?q=80&w=800&auto=format&fit=crop"
  }
]

export const constructionNews: Story[] = [
  {
    id: "cs1",
    title: "Cập nhật giá xi măng và thép xây dựng tháng 11",
    excerpt:
      "Tổng hợp nhanh biến động giá các hãng chính, gợi ý thời điểm chốt vật liệu thô.",
    category: "Tin xây dựng",
    date: "2025-11-01",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cs2",
    title: "3 lưu ý khi bảo quản vật liệu trong mùa mưa",
    excerpt:
      "Che phủ đúng cách, kê pallet và sắp xếp lối đi an toàn giúp giảm hư hao.",
    category: "Tin xây dựng",
    date: "2025-10-28",
    image: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=800&auto=format&fit=crop"
  }
]
