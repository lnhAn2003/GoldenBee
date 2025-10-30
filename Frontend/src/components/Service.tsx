import { Truck, ShieldCheck, Wrench, ClipboardList, Phone, Boxes } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: ClipboardList,
      title: "Tư vấn & bóc tách vật tư",
      desc: "Đề xuất chủng loại – khối lượng theo bản vẽ, tối ưu chi phí dự toán.",
    },
    {
      icon: Phone,
      title: "Báo giá nhanh & minh bạch",
      desc: "Bảng giá rõ ràng theo hạng mục, cập nhật theo thị trường, hỗ trợ đặt hàng nhanh.",
    },
    {
      icon: Truck,
      title: "Vận chuyển tận nơi",
      desc: "Giao hàng 24–48h tùy khu vực, theo dõi lộ trình – hẹn giờ linh hoạt.",
    },
    {
      icon: Boxes,
      title: "Kho bãi & lưu trữ",
      desc: "Hệ thống kho hàng ổn định, chủ động nguồn cung cho công trình.",
    },
    {
      icon: Wrench,
      title: "Hỗ trợ kỹ thuật hiện trường",
      desc: "Hỗ trợ kỹ thuật theo từng hạng mục thi công, hướng dẫn sử dụng vật tư.",
    },
    {
      icon: ShieldCheck,
      title: "Hậu mãi & bảo hành",
      desc: "Chính sách bảo hành chính hãng, hỗ trợ đổi trả theo điều kiện sản phẩm.",
    },
  ]

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block rounded-full border px-3 py-1 text-sm text-brand-ink/70">Dịch vụ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-brand-ink">Giải pháp chuyên nghiệp cho công trình</h2>
          <p className="mt-2 text-brand-ink/70">
            Đồng hành từ khâu tư vấn vật tư, báo giá, vận chuyển đến hỗ trợ kỹ thuật và hậu mãi.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={i}
              className="group rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center rounded-lg border bg-brand-base p-2">
                <s.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-ink">{s.title}</h3>
              <p className="mt-1 text-sm text-brand-ink/70">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#contact" className="inline-block px-4 py-2 rounded-lg text-white bg-brand-primary hover:bg-brand-dark text-sm">
            Trao đổi nhu cầu của bạn
          </a>
        </div>
      </div>
    </section>
  )
}