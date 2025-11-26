import { CheckCircle2, ShieldCheck, Truck, BadgeCheck, Wrench, Calculator } from "lucide-react"

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-brand-primary" />,
    title: "Cung cấp chính hãng",
    desc: "VLXD từ thương hiệu uy tín, nguồn gốc rõ ràng",
  },
  {
    icon: <Calculator className="h-5 w-5 text-brand-primary" />,
    title: "Tư vấn theo BOQ",
    desc: "Chọn vật tư theo hồ sơ thiết kế, tối ưu khối lượng",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-brand-primary" />,
    title: "Báo giá minh bạch",
    desc: "CO/CQ đầy đủ, hợp đồng & chính sách rõ ràng",
  },
  {
    icon: <Truck className="h-5 w-5 text-brand-primary" />,
    title: "Giao nhanh 24-48h",
    desc: "Hỗ trợ bốc xếp theo mặt bằng thi công",
  },
  {
    icon: <Wrench className="h-5 w-5 text-brand-primary" />,
    title: "Đồng hành dự án",
    desc: "Mẫu, catalogue, giải pháp thay thế tương đương",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-brand-primary" />,
    title: "Bảo hành - hậu mãi",
    desc: "Chính sách bảo hành rõ ràng, chăm sóc sau bán",
  },
]

export default function AboutUs() {
  return (
    <section id="about" aria-label="Về chúng tôi" className="relative isolate bg-white py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
              <img
                src="public/crop-architect-opening-blueprint.jpg"
                alt="Đội ngũ kỹ thuật bàn bạc tại công trường"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary ring-1 ring-brand-primary/20">
              Về chúng tôi
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              Chúng tôi có thể làm gì
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-brand-ink/80">
              Đồng hành cùng chủ đầu tư, nhà thầu và kiến trúc sư trong mọi giai đoạn: lựa chọn vật tư, tối ưu chi phí - tiến
              độ, và đảm bảo chất lượng theo tiêu chuẩn công trình.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="flex items-start gap-3 rounded-2xl border border-brand-primary/15 bg-white px-4 py-3 shadow-sm ring-1 ring-white/40"
                >
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <p className="font-semibold text-brand-ink">{f.title}</p>
                    <p className="text-sm text-brand-ink/70">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
