import { useEffect, useState } from "react"
import { buttonClass } from "./ui/button"

type Story = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  badge?: string
}

type SectionKey = "projects" | "interior" | "tiles" | "company" | "construction"

// ---------------- DỮ LIỆU MẪU ----------------

// Tin dự án
const projectNews: Story[] = [
  {
    id: "pj1",
    title: "Hoàn tất giao gạch ốp mặt tiền cho dự án Skyline trước tiến độ 3 ngày",
    excerpt:
      "Hơn 1.200 m² gạch ốp Sienna và keo chít mạch màu tối đã được nâng lên mái, bàn giao cho đội thi công kiểm tra.",
    category: "Tin dự án",
    date: "2025-11-20",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1500&auto=format&fit=crop",
    badge: "Dự án lớn"
  },
  {
    id: "pj2",
    title: "Bố trí kho trung chuyển cho khu nhà phố ven sông Thủ Đức",
    excerpt:
      "Sắp xếp pallet theo từng block nhà, đảm bảo xe cẩu làm việc liên tục mà không chiếm dụng lòng đường.",
    category: "Tin dự án",
    date: "2025-11-18",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "pj3",
    title: "Đêm lắp gạch sân vận động: kế hoạch giao hàng trọn trong 8 giờ",
    excerpt:
      "Gạch lát, phụ kiện thoát nước và keo chít mạch được chia theo từng cổng, giao trọn bộ trong một đêm.",
    category: "Tin dự án",
    date: "2025-11-15",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop"
  }
]

// Tin nội thất
const interiorNews: Story[] = [
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
    title: "Chọn gạch ốp cho phòng tắm: chống trơn nhưng vẫn đẹp",
    excerpt:
      "So sánh nhanh giữa bề mặt nhám, bán nhám và phủ men sugar cho khu vực luôn ẩm ướt.",
    category: "Tin nội thất",
    date: "2025-11-12",
    image: "https://images.unsplash.com/photo-1521783593447-5702fcd0b1af?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "in3",
    title: "Gạch giả gỗ cho căn hộ nhỏ: mẹo chọn kích thước và tông màu",
    excerpt:
      "Các size 15x80, 20x120 giúp không gian bớt chia vụn, tông gỗ sáng làm phòng rộng hơn về thị giác.",
    category: "Tin nội thất",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop"
  }
]

// Bài viết gạch & ngói
const tileArticles: Story[] = [
  {
    id: "tl1",
    title: "Hướng dẫn chọn ngói cho mái bê tông: độ dốc, màu và phụ kiện",
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
      "Chọn sai màu, chít mạch khi nền chưa khô hẳn hoặc không vệ sinh bề mặt đúng cách dễ gây ố mốc.",
    category: "Bài viết gạch & ngói",
    date: "2025-11-08",
    image: "https://images.unsplash.com/photo-1529429617124-aee7fc9c5c1c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "tl3",
    title: "So sánh gạch porcelain và ceramic cho khu vực có lưu lượng lớn",
    excerpt:
      "Độ hút nước, độ cứng bề mặt và khả năng chống trầy là những tiêu chí quan trọng cần cân nhắc.",
    category: "Bài viết gạch & ngói",
    date: "2025-11-07",
    image: "https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?q=80&w=800&auto=format&fit=crop"
  }
]

// Hoạt động công ty
const companyNews: Story[] = [
  {
    id: "cp1",
    title: "Ong Vàng khai trương kho mới tại Bình Chánh",
    excerpt:
      "Kho mới rộng 5.000 m² giúp tăng khả năng lưu trữ gạch – ngói và rút ngắn thời gian giao hàng khu Tây Nam.",
    category: "Hoạt động công ty",
    date: "2025-11-05",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    badge: "Tin nội bộ"
  },
  {
    id: "cp2",
    title: "Chương trình tham quan showroom cho kiến trúc sư",
    excerpt:
      "Hơn 60 đơn vị thiết kế tham gia trải nghiệm thực tế các mẫu gạch mới và khu trưng bày ngói.",
    category: "Hoạt động công ty",
    date: "2025-11-03",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  }
]

// Tin xây dựng chung
const constructionNews: Story[] = [
  {
    id: "cn1",
    title: "Xu hướng vật liệu bền vững trong các dự án nhà ở 2025",
    excerpt:
      "Gạch tái chế, ngói năng lượng mặt trời và các giải pháp tiết kiệm nước đang được chú ý.",
    category: "Tin xây dựng",
    date: "2025-11-02",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop",
    badge: "Thị trường"
  },
  {
    id: "cn2",
    title: "Quy định mới về chống thấm cho ban công và sân thượng",
    excerpt:
      "Một số tiêu chuẩn kỹ thuật được cập nhật, ảnh hưởng trực tiếp đến việc chọn gạch và keo chống thấm.",
    category: "Tin xây dựng",
    date: "2025-11-01",
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "cn3",
    title: "Các lỗi thường gặp khi thi công gạch lát khu vực công cộng",
    excerpt:
      "Không xử lý nền đủ độ dốc, dùng sai loại keo và mạch là nguyên nhân chính gây bong tróc.",
    category: "Tin xây dựng",
    date: "2025-10-30",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  }
]

// Tin chạy chữ
const tickerItems = [
  "Flash sale: gạch ốp mặt tiền Siena giảm 45.000đ/m² đến hết thứ Sáu.",
  "Mở thêm khung giờ giao ban đêm cho Quận 1 và TP Thủ Đức ngày 22/11.",
  "Dòng gạch xám than đã có lại, kèm keo chít mạch đồng màu.",
  "Tặng mẫu mảng tường trưng bày cho kiến trúc sư đến hết tháng 12."
]

function formatDate(s: string) {
  try {
    const d = new Date(s)
    return d.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "short",
      day: "2-digit"
    })
  } catch {
    return s
  }
}

// ---------------- COMPONENT ----------------

const sections: Record<
  SectionKey,
  { label: string; subtitle: string; stories: Story[] }
> = {
  projects: {
    label: "Tin dự án",
    subtitle: "Cập nhật từ công trường",
    stories: projectNews
  },
  interior: {
    label: "Tin nội thất",
    subtitle: "Ý tưởng cho không gian sống",
    stories: interiorNews
  },
  tiles: {
    label: "Bài viết gạch & ngói",
    subtitle: "Kinh nghiệm chọn vật liệu",
    stories: tileArticles
  },
  company: {
    label: "Hoạt động công ty",
    subtitle: "Tin nội bộ Ong Vàng",
    stories: companyNews
  },
  construction: {
    label: "Tin xây dựng",
    subtitle: "Xu hướng & quy định mới",
    stories: constructionNews
  }
}

export default function News() {
  const [tickerIndex, setTickerIndex] = useState(0)
  const [activeSection, setActiveSection] = useState<SectionKey>("projects")

  useEffect(() => {
    const id = setInterval(
      () => setTickerIndex((i) => (i + 1) % tickerItems.length),
      2800
    )
    return () => clearInterval(id)
  }, [])

  const current = sections[activeSection]
  const [featured, ...rest] = current.stories

  return (
    <section
      id="news"
      aria-label="Tin tức và bài viết vật liệu xây dựng"
      className="relative isolate bg-white py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />

      <div className="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        {/* Ticker tin nhanh */}
        <div className="flex items-center overflow-hidden rounded-full bg-brand-primary text-white shadow">
          <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px] leading-none">
              *
            </span>
            Tin nhanh
          </div>
          <div className="relative h-10 flex-1">
            {tickerItems.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center px-4 text-sm font-medium transition-all duration-500"
                style={{
                  transform: `translateY(${(i - tickerIndex) * 100}%)`,
                  opacity: i === tickerIndex ? 1 : 0
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
              Ong Vàng Vật Liệu Xây Dựng
            </p>
            <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">
              Tin & bài viết theo chủ đề
            </h2>
            <p className="max-w-2xl text-sm text-brand-ink/70">
              Chọn chủ đề bạn quan tâm để xem nhanh tin dự án, nội thất, gạch
              ngói, hoạt động công ty và tin xây dựng mới nhất.
            </p>
          </div>
          <a
            href="#news/all"
            className={buttonClass({ variant: "secondary", size: "md" })}
          >
            Xem tất cả bài viết
          </a>
        </div>

        {/* Thanh filter 5 mục */}
        <div className="flex gap-2 overflow-x-auto rounded-full bg-brand-light/60 px-2 py-2 text-sm text-brand-ink ring-1 ring-brand-primary/10">
          {(Object.keys(sections) as SectionKey[]).map((key) => {
            const isActive = key === activeSection
            const sec = sections[key]
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveSection(key)}
                className={[
                  "flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition",
                  isActive
                    ? "bg-brand-primary text-white shadow-md"
                    : "bg-white text-brand-ink hover:bg-brand-light"
                ].join(" ")}
              >
                <span>{sec.label}</span>
              </button>
            )
          })}
        </div>

        {/* Nội dung section hiện tại */}
        <div className="space-y-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary">
              {current.subtitle}
            </p>
            <h3 className="text-lg font-bold text-brand-ink">
              {current.label}
            </h3>
          </div>

          {featured && <FeaturedCard story={featured} />}

          {rest.length > 0 && (
            <div className="grid gap-4 md:grid-cols-3">
              {rest.map((story) => (
                <SmallCard key={story.id} story={story} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// ---------------- CARD COMPONENTS ----------------

function FeaturedCard({ story }: { story: Story }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-6 bottom-5 space-y-2 text-white drop-shadow">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase">
            {story.badge && (
              <span className="rounded-full bg-red-500/90 px-3 py-1">
                {story.badge}
              </span>
            )}
            <span className="rounded-full bg-white/15 px-3 py-1">
              {story.category}
            </span>
          </div>
          <h4 className="text-xl font-bold leading-snug md:text-2xl">
            {story.title}
          </h4>
          <p className="max-w-2xl text-sm text-white/90">
            {story.excerpt}
          </p>
          <p className="text-[11px] text-white/80">
            {formatDate(story.date)}
          </p>
        </div>
      </div>
    </article>
  )
}

function SmallCard({ story }: { story: Story }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/2.4] w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {story.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-[10px] font-semibold uppercase text-white">
            {story.badge}
          </span>
        )}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-primary">
          {story.category}
        </p>
        <h5 className="text-sm font-semibold leading-snug text-brand-ink line-clamp-2">
          {story.title}
        </h5>
        <p className="text-xs text-brand-ink/70 line-clamp-3">
          {story.excerpt}
        </p>
        <p className="text-[11px] text-brand-ink/60">
          {formatDate(story.date)}
        </p>
      </div>
    </article>
  )
}
