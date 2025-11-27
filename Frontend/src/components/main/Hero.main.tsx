import { useState } from "react"
import { Truck, ShieldCheck, Clock, Phone, Boxes, Search, ChevronLeft, ChevronRight } from "lucide-react"
import { buttonClass } from "../ui/button.ui"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Ảnh nền tối màu */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&q=80&w=1400"
          alt="Công trường xây dựng"
          className="h-full w-full object-cover brightness-[0.35]"
          loading="lazy"
          decoding="async"
        />
      </div>
      {/* Lớp phủ giúp chữ dễ đọc */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        {/* Nội dung bên trái */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-sm bg-white/10 backdrop-blur">
            <Boxes className="w-4 h-4 text-white-500"/> Nhà phân phối vật liệu xây dựng
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Vật liệu cho mọi công trình • Giao nhanh • Giá rõ ràng
          </h1>
          <p className="mt-3 text-white/80 text-base md:text-lg">
            Phân phối trực tiếp từ kho: xi măng, gạch, thép, ngói… Đồng hành kỹ thuật theo từng hạng mục và tiến độ thi công.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className={buttonClass({ variant: "primary", size: "lg" })}>Xem catalog</a>
            <a
              href="#contact"
              className={buttonClass({
                variant: "secondary",
                size: "lg",
                className: "inline-flex items-center gap-2 bg-white/90"
              })}
            >
              <Phone className="w-4 h-4" /> Nhận báo giá
            </a>
          </div>

          {/* Tìm nhanh */}
          <form className="mt-4 flex items-stretch max-w-xl" action="#catalog" role="search" aria-label="Tìm sản phẩm">
            <div className="flex-1 inline-flex items-center gap-2 rounded-l-lg border border-white/20 bg-white/90 px-3">
              <Search className="w-4 h-4 text-brand-ink/60"/>
              <input
                className="w-full py-2 outline-none placeholder:text-brand-ink/40 text-sm text-brand-ink bg-transparent"
                placeholder="Tìm sản phẩm (ví dụ: gạch 60x60, xi măng)"
                name="q"
                type="search"
                autoComplete="off"
              />
            </div>
            <button type="submit" className={buttonClass({ variant: "primary", size: "md", className: "rounded-l-none rounded-r-lg px-5" })}>Tìm</button>
          </form>

          {/* Cam kết nhanh gọn */}
          <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <li className="inline-flex items-center gap-2 text-white/90"><ShieldCheck className="w-4 h-4 text-white-500"/> Hàng chính hãng – bảo hành</li>
            <li className="inline-flex items-center gap-2 text-white/90"><Truck className="w-4 h-4 text-white-500"/> Giao nhanh trong 24–48h</li>
            <li className="inline-flex items-center gap-2 text-white/90"><Clock className="w-4 h-4 text-white-500"/> Hỗ trợ kỹ thuật kịp thời</li>
            <li className="inline-flex items-center gap-2 text-white/90"><Boxes className="w-4 h-4 text-white-500"/> Danh mục đa dạng – luôn sẵn</li>
          </ul>

          {/* Số liệu nổi bật */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg bg-white/10 backdrop-blur border border-white/15 px-4 py-3">
              <div className="text-2xl font-bold text-white">2k+</div>
              <div className="text-xs text-white/80">Mã sản phẩm</div>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur border border-white/15 px-4 py-3">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-xs text-white/80">Tỉnh thành phục vụ</div>
            </div>
            <div className="rounded-lg bg-white/10 backdrop-blur border border-white/15 px-4 py-3">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-white/80">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>

        {/* Slider PNG bên phải: hiển thị 1 ảnh/lần + tag minh họa */}
        <RightImageSlider />
      </div>
    </section>
  )
}

function RightImageSlider() {
  const images = ["/brickegg.png", "/concreteegg.png", "/roofegg.png"]
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="relative aspect-[4/3] w-full">
        {images.map((src, i) => (
          <div key={src} className="absolute inset-0 transition-opacity duration-700 ease-in-out" style={{ opacity: i === index ? 1 : 0 }}>
            <img src={src} alt="Sản phẩm" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-3 left-1/2 -translate-x-1/2 z-10 space-x-2">
        {images.map((_, i) => (
          <button key={i} aria-label="indicator" onClick={() => setIndex(i)} className={`${i===index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'} w-2.5 h-2.5 rounded-full transition`} />
        ))}
      </div>
      <button type="button" onClick={prev} className="flex absolute top-1/2 left-3 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 bg-white/50 rounded-full hover:bg-white/70 focus:outline-none transition" aria-label="Prev">
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button type="button" onClick={next} className="flex absolute top-1/2 right-3 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 bg-white/50 rounded-full hover:bg-white/70 focus:outline-none transition" aria-label="Next">
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  )
}