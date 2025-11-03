// src/components/AboutUs.tsx
import { CheckCircle2, ShieldCheck, Truck, BadgeCheck, Wrench, Calculator } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" aria-label="Về chúng tôi" className="relative isolate overflow-hidden py-20 bg-white">
      {/* Subtle, non-distracting background (no images) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_12%_0%,rgba(31,41,55,0.06),transparent_60%),radial-gradient(800px_400px_at_100%_100%,rgba(220,38,38,0.06),transparent_55%)]" />
        <svg className="absolute inset-0 h-full w-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1F2937" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-brand-primary/10 bg-white shadow-sm">
              <img
                src="https://plus.unsplash.com/premium_photo-1661775464344-d2206be8a482?ixlib=rb-4.1.0&fm=jpg&q=60&w=1600"
                alt="Kho vật liệu và thiết bị thi công"
                className="h-[340px] w-full object-cover sm:h-[420px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content: Chúng tôi có thể làm gì */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/20">
              Về chúng tôi
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Chúng tôi có thể làm gì
            </h2>
            <p className="mt-3 max-w-2xl text-brand-ink/80">
              Đồng hành cùng chủ đầu tư, nhà thầu và kiến trúc sư trong mọi giai đoạn: lựa chọn vật tư,
              tối ưu chi phí – tiến độ, và đảm bảo chất lượng theo tiêu chuẩn công trình.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <ShieldCheck className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Cung cấp chính hãng</p>
                  <p className="text-sm text-brand-ink/70">VLXD từ thương hiệu uy tín, nguồn gốc rõ ràng</p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <Calculator className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Tư vấn theo BOQ</p>
                  <p className="text-sm text-brand-ink/70">Chọn vật tư theo hồ sơ thiết kế, tối ưu khối lượng</p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <BadgeCheck className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Báo giá minh bạch</p>
                  <p className="text-sm text-brand-ink/70">CO/CQ đầy đủ, hợp đồng & chính sách rõ ràng</p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <Truck className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Giao nhanh 24–48h</p>
                  <p className="text-sm text-brand-ink/70">Hỗ trợ bốc xếp theo mặt bằng thi công</p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <Wrench className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Đồng hành dự án</p>
                  <p className="text-sm text-brand-ink/70">Mẫu, catalogue, giải pháp thay thế tương đương</p>
                </div>
              </li>

              <li className="flex items-start gap-3 rounded-lg border border-brand-primary/10 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 text-brand-primary" />
                <div>
                  <p className="font-semibold text-brand-ink">Bảo hành – hậu mãi</p>
                  <p className="text-sm text-brand-ink/70">Chính sách bảo hành rõ ràng, chăm sóc sau bán</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-brand-primary/20 bg-white px-4 py-2 text-sm font-semibold text-brand-ink hover:bg-brand-light"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

