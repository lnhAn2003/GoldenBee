// src/components/News.tsx
type Post = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  href: string
}

const posts: Post[] = [
  {
    id: 'p1',
    title: 'Cập nhật bảng giá xi măng, gạch, ngói tháng 11/2025',
    excerpt: 'Tổng hợp nhanh đơn giá một số mặt hàng VLXD phổ biến khu vực TP.HCM và miền Đông; kèm lưu ý giao hàng công trình.',
    category: 'Bảng giá',
    date: '2025-11-01',
    image: 'https://images.unsplash.com/photo-1589927986089-35812388d1ab?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'p2',
    title: '5 mẫu gạch ốp lát bền đẹp cho công trình dân dụng',
    excerpt: 'Gợi ý lựa chọn gạch theo không gian sử dụng, chống trơn trượt và tối ưu chi phí.',
    category: 'Hướng dẫn',
    date: '2025-10-25',
    image: 'https://images.unsplash.com/photo-1616486886892-1022643d8b88?q=80&w=1200&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'p3',
    title: 'Kinh nghiệm nhận hàng tại công trình an toàn – đúng tiến độ',
    excerpt: 'Quy trình tiếp nhận – kiểm đếm – lưu kho tạm để giảm rủi ro và chậm trễ.',
    category: 'Mẹo thi công',
    date: '2025-10-18',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'p4',
    title: 'Hướng dẫn chọn màu ngói theo kiến trúc nhà',
    excerpt: 'Phối màu mái ngói hài hòa với tổng thể công trình và vật liệu bao che.',
    category: 'Hướng dẫn',
    date: '2025-10-10',
    image: 'https://images.unsplash.com/photo-1622979135225-8dc3f9a6b685?q=80&w=1400&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'p5',
    title: 'Dự án nhà ở Bình Dương: giao vật tư 24–48h',
    excerpt: 'Tổ chức kho bãi và điều phối phương tiện đảm bảo tiến độ thi công.',
    category: 'Dự án',
    date: '2025-09-28',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop',
    href: '#',
  },
]

function formatDate(s: string) {
  try {
    const d = new Date(s)
    return d.toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })
  } catch {
    return s
  }
}

export default function News() {
  const [featured, ...rest] = posts
  const list = rest.slice(0, 4)

  return (
    <section id="news" aria-label="Tin tức & dự án" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-ink">Tin tức & dự án</h2>
          <p className="mt-2 text-brand-ink/70">Cập nhật giá, kinh nghiệm thi công và các dự án tiêu biểu</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured */}
          <article className="lg:col-span-6 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <a href={featured.href} className="block">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/20 backdrop-blur">{featured.category}</span>
              </div>
              <div className="p-5">
                <time dateTime={featured.date} className="text-xs text-brand-ink/60">{formatDate(featured.date)}</time>
                <h3 className="mt-2 text-2xl font-bold text-brand-ink hover:text-brand-primary transition">{featured.title}</h3>
                <p className="mt-2 text-brand-ink/75">{featured.excerpt}</p>
              </div>
            </a>
          </article>

          {/* List */}
          <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
            {list.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
                <a href={p.href} className="block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-primary ring-1 ring-brand-primary/20 backdrop-blur">{p.category}</span>
                  </div>
                  <div className="p-4">
                    <time dateTime={p.date} className="text-xs text-brand-ink/60">{formatDate(p.date)}</time>
                    <h3 className="mt-1.5 line-clamp-2 text-base font-semibold text-brand-ink hover:text-brand-primary transition">{p.title}</h3>
                    <p className="mt-1.5 line-clamp-3 text-sm text-brand-ink/75">{p.excerpt}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          <a href="#news/all" className="inline-flex items-center rounded-lg border border-brand-primary/20 bg-white px-4 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-light">Xem tất cả</a>
        </div>
      </div>
    </section>
  )
}

