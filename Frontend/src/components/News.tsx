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

// Tin chính
const mainStory: Story = {
  id: "m1",
  title: "Giảm giá gạch ốp mặt tiền cho dự án Skyline",
  excerpt:
    "Lô gạch đỏ Sienna kèm keo chít mạch màu tối đã về kho, được đóng pallet sẵn để cẩu lên mái. Hai pallet trưng bày cho kiến trúc sư duyệt tối nay.",
  category: "Tin chính",
  date: "2025-11-20",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1500&auto=format&fit=crop",
  badge: "Nổi bật",
}

// Biên tập chọn
const editorsPicks: Story[] = [
  {
    id: "e1",
    title: "Bảo hành yên tâm cho gạch ốp khu vực gần biển",
    excerpt: "Gạch chịu muối, xương đặc thấp hút nước, test thực tế cho công trình mặt tiền sát biển.",
    category: "Biên tập chọn",
    date: "2025-11-18",
    image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?q=80&w=800&auto=format&fit=crop",
    badge: "Thông số kỹ thuật",
  },
  {
    id: "e2",
    title: "Kế hoạch xuất hàng giúp cẩu làm việc liên tục tại khu nhà phố ven sông",
    excerpt: "Chia 6 đợt giao trong 36 giờ, pallet được buộc dây, lót ván sẵn cho móc cẩu, không làm gián đoạn thi công.",
    category: "Tổ chức thi công",
    date: "2025-11-16",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop",
    badge: "Logistics công trường",
  },
]

// Đang quan tâm
const trending: Story[] = [
  {
    id: "t1",
    title: "Gạch xám than về lại kho, kèm keo chít mạch tối đồng bộ",
    excerpt: "Hàng mới đã quấn màng PE chống bẩn, sẵn sàng giao cho các dự án mặt tiền hiện đại.",
    category: "Đang quan tâm",
    date: "2025-11-15",
    image: "https://images.unsplash.com/photo-1529429617124-aee7fc9c5c1c?q=80&w=800&auto=format&fit=crop",
    badge: "Xu hướng",
  },
  {
    id: "t2",
    title: "Gạch block kích thước lớn – lựa chọn ưa thích của đội thi công",
    excerpt: "Mặt gạch phẳng, sai số nhỏ giúp đi hàng nhanh, phù hợp tường ngăn nội thất.",
    category: "Đang quan tâm",
    date: "2025-11-14",
    image: "https://images.unsplash.com/photo-1600460759920-9fe5c0b1c1ad?q=80&w=800&auto=format&fit=crop",
    badge: "Gợi ý thi công",
  },
  {
    id: "t3",
    title: "Video: Pha màu vữa chít mạch chuẩn mẫu khi trời âm u",
    excerpt: "Kỹ thuật viên hướng dẫn chỉnh tỉ lệ màu để mạch gạch đều tông dù độ ẩm thay đổi.",
    category: "Đang quan tâm",
    date: "2025-11-12",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    badge: "Video hướng dẫn",
  },
]

// Phổ biến
const popular: Story[] = [
  {
    id: "p1",
    title: "Cách bố trí pallet khi mặt bằng chật",
    excerpt: "Giữ gạch mặt tiền luôn sạch với đường hầm bạt và khay hứng nước trên công trình hẻm nhỏ.",
    category: "Phổ biến",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    badge: "Hướng dẫn",
  },
  {
    id: "p2",
    title: "Chuẩn bị pallet giao thẳng lên tầng: từng bước chi tiết",
    excerpt: "Dây đai, bo góc, màng co… đảm bảo pallet chịu được nắng mưa khi trung chuyển nhiều chặng.",
    category: "Phổ biến",
    date: "2025-11-09",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    badge: "Quy trình giao nhận",
  },
  {
    id: "p3",
    title: "Giải pháp giao hàng cho khu paddock đường đua mô tô",
    excerpt: "Gạch block, vữa và gạch lát được sắp theo từng ô pit, thi công liên tục không chờ hàng.",
    category: "Phổ biến",
    date: "2025-11-08",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    badge: "Case study",
  },
  {
    id: "p4",
    title: "Thoát nước sân vận động và xếp chồng gạch lát chuẩn kỹ thuật",
    excerpt: "Gạch lát và bộ phụ kiện thoát nước được đánh dấu theo từng cổng, lắp đặt qua đêm kịp bàn giao.",
    category: "Phổ biến",
    date: "2025-11-07",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    badge: "Sổ tay thi công",
  },
]

// Tin chạy chữ
const tickerItems = [
  "Flash sale: gạch ốp mặt tiền Siena giảm 45.000đ/m² đến hết thứ Sáu.",
  "Mở thêm khung giờ giao ban đêm cho Quận 1 và TP Thủ Đức ngày 22/11.",
  "Dòng gạch xám than đã có lại, kèm keo chít mạch đồng màu.",
  "Tặng mẫu mảng tường trưng bày cho kiến trúc sư đến hết tháng 12.",
]

function formatDate(s: string) {
  try {
    const d = new Date(s)
    return d.toLocaleDateString("vi-VN", { year: "numeric", month: "short", day: "2-digit" })
  } catch {
    return s
  }
}

export default function News() {
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTickerIndex((i) => (i + 1) % tickerItems.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="news"
      aria-label="Tin tức và dự án vật liệu xây dựng"
      className="relative isolate bg-white py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6">
        {/* Ticker tin nhanh */}
        <div className="flex items-center overflow-hidden rounded-full bg-brand-primary text-white shadow">
          <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px] leading-none">
              *
            </span>
            Tin nhanh
          </div>
          <div className="relative flex-1 h-10">
            {tickerItems.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center px-4 text-sm font-medium transition-all duration-500"
                style={{
                  transform: `translateY(${(i - tickerIndex) * 100}%)`,
                  opacity: i === tickerIndex ? 1 : 0,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">
              Ong Vàng Vật Liệu Xây Dựng
            </p>
            <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">Tin chính & gợi ý cho bạn</h2>
          </div>
          <a href="#catalog" className={buttonClass({ variant: "secondary", size: "md" })}>
            Xem danh mục sản phẩm
          </a>
        </div>

        {/* Tin chính + gợi ý */}
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-7 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img src={mainStory.image} alt={mainStory.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 space-y-2 text-white drop-shadow">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase">
                  <span className="rounded-full bg-red-500/90 px-3 py-1">{mainStory.badge}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1">{mainStory.category}</span>
                </div>
                <h3 className="text-2xl font-bold leading-snug md:text-3xl">{mainStory.title}</h3>
                <p className="max-w-3xl text-sm text-white/90 md:text-base">{mainStory.excerpt}</p>
                <div className="text-xs text-white/80">Cập nhật {formatDate(mainStory.date)}</div>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {editorsPicks.map((story) => (
                <SmallCard key={story.id} story={story} accent="amber" />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {trending.map((story) => (
                <TinyCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </div>

        {/* Tin phổ biến */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Tin được quan tâm</p>
              <h3 className="text-xl font-bold text-brand-ink">Nhà thầu đang xem nhiều</h3>
            </div>
            <a href="#news/all" className={buttonClass({ variant: "secondary", size: "md" })}>
              Xem tất cả tin
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {popular.map((story) => (
              <WideCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type CardProps = { story: Story }

function SmallCard({ story, accent = "red" }: CardProps & { accent?: "red" | "amber" }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3]">
        <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
        <span
          className="absolute left-3 bottom-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase text-white"
          style={{ backgroundColor: accent === "red" ? "#ef4444" : "#f59e0b" }}
        >
          {story.badge || story.category}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-primary">{story.category}</p>
        <h4 className="text-base font-semibold text-brand-ink leading-snug">{story.title}</h4>
        <p className="text-sm text-brand-ink/70">{story.excerpt}</p>
        <div className="text-xs text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}

function TinyCard({ story }: CardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <img
        src={story.image}
        alt={story.title}
        className="h-32 w-full object-cover transition duration-200 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute left-2 top-2 rounded-full bg-brand-primary px-2 py-1 text-[10px] font-semibold uppercase text-white">
        {story.badge || story.category}
      </div>
      <div className="p-3 space-y-1">
        <h5 className="text-[15px] font-semibold text-brand-ink leading-snug line-clamp-2">{story.title}</h5>
        <div className="text-[11px] text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}

function WideCard({ story }: CardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow">
      <div className="relative aspect-[4/2.2] w-full overflow-hidden">
        <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-[10px] font-semibold uppercase text-white">
          {story.badge || story.category}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <h4 className="text-base font-semibold text-brand-ink leading-snug">{story.title}</h4>
        <p className="text-sm text-brand-ink/70">{story.excerpt}</p>
        <div className="text-xs text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}
