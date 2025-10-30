import { Truck, ShieldCheck, Clock, Phone, Boxes, Search } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-light to-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-brand-primary/10 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots-hero" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="1440" height="800" fill="url(#dots-hero)" className="text-brand-primary" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-brand-ink/70 bg-white/70 backdrop-blur">
            <Boxes className="w-4 h-4 text-brand-primary"/> Nhà phân phối vật liệu xây dựng
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-brand-ink text-balance">
            Vật liệu cho mọi công trình • Giao nhanh • Giá rõ ràng
          </h1>
          <p className="mt-3 text-brand-ink/70 text-base md:text-lg">
            Phân phối trực tiếp từ kho: xi măng, gạch, thép, ngói… Đồng hành kỹ thuật theo hạng mục và tiến độ thi công.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="px-4 py-2 rounded-lg text-white bg-brand-primary hover:bg-brand-dark text-sm md:text-base">Xem catalog</a>
            <a href="#contact" className="px-4 py-2 rounded-lg border text-brand-ink hover:border-brand-primary hover:text-brand-primary text-sm md:text-base inline-flex items-center gap-2">
              <Phone className="w-4 h-4"/> Nhận báo giá
            </a>
          </div>

          {/* Quick search */}
          <form className="mt-4 flex items-stretch max-w-xl" action="#catalog" role="search" aria-label="Tìm sản phẩm">
            <div className="flex-1 inline-flex items-center gap-2 rounded-l-lg border bg-white px-3">
              <Search className="w-4 h-4 text-brand-ink/50"/>
              <input
                className="w-full py-2 outline-none placeholder:text-brand-ink/40 text-sm"
                placeholder="Tìm sản phẩm (ví dụ: gạch 60x60, xi măng)"
                name="q"
                type="search"
                autoComplete="off"
              />
            </div>
            <button type="submit" className="px-4 rounded-r-lg bg-brand-primary hover:bg-brand-dark text-white text-sm">Tìm</button>
          </form>

          {/* Trust badges */}
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <li className="inline-flex items-center gap-2 text-brand-ink/80"><Truck className="w-4 h-4 text-brand-primary"/> Giao nhanh trong 24–48h</li>
            <li className="inline-flex items-center gap-2 text-brand-ink/80"><ShieldCheck className="w-4 h-4 text-brand-primary"/> Hàng chính hãng – bảo hành</li>
            <li className="inline-flex items-center gap-2 text-brand-ink/80"><Clock className="w-4 h-4 text-brand-primary"/> Hỗ trợ kỹ thuật kịp thời</li>
            <li className="inline-flex items-center gap-2 text-brand-ink/80"><Boxes className="w-4 h-4 text-brand-primary"/> Danh mục đa dạng – luôn sẵn</li>
          </ul>

          {/* KPIs */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg border bg-white py-3">
              <div className="text-xl font-semibold text-brand-ink">2k+</div>
              <div className="text-xs text-brand-ink/60">Mã sản phẩm</div>
            </div>
            <div className="rounded-lg border bg-white py-3">
              <div className="text-xl font-semibold text-brand-ink">20+</div>
              <div className="text-xs text-brand-ink/60">Tỉnh thành phục vụ</div>
            </div>
            <div className="rounded-lg border bg-white py-3">
              <div className="text-xl font-semibold text-brand-ink">98%</div>
              <div className="text-xs text-brand-ink/60">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border shadow">
            <img
              src="https://www.shutterstock.com/image-photo/building-under-construction-workers-600nw-57862405.jpg"
              alt="Vật liệu xây dựng tại kho"
              className="w-full h-full object-cover"
              loading="lazy" decoding="async"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -top-3 left-3 rounded-full bg-white border shadow px-3 py-1 text-xs text-brand-ink/80">
            Hệ thống kho toàn quốc
          </div>
          {/* Overlay stats card */}
          <div className="absolute bottom-3 left-3 right-auto md:left-auto md:right-3 bg-white/90 backdrop-blur rounded-lg border shadow p-3 md:p-4 w-[260px]">
            <div className="text-sm font-semibold text-brand-ink">Về chúng tôi</div>
            <p className="text-xs text-brand-ink/70 mt-1">
              Hơn 500+ công trình đã cung cấp, 98% khách hàng hài lòng. Tư vấn vật tư phù hợp từng hạng mục.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
