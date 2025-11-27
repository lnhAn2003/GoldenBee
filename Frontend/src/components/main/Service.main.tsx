import { Truck, ShieldCheck, Wrench, ClipboardList, Phone, Boxes } from "lucide-react"
import { SectionHeader } from "../ui/section-header.ui"
import { Card } from "../ui/card.ui"

export default function Services() {
  const services = [
    {
      icon: ClipboardList,
      title: "Tư vấn & bóc tách vật tư",
      desc: "Đề xuất chủng loại - khối lượng theo bản vẽ, tối ưu chi phí dự toán."
    },
    {
      icon: Phone,
      title: "Báo giá nhanh & minh bạch",
      desc: "Bảng giá rõ ràng theo hạng mục, cập nhật theo thị trường, hỗ trợ đặt hàng nhanh."
    },
    {
      icon: Truck,
      title: "Vận chuyển tận nơi",
      desc: "Giao hàng 24-48h tùy khu vực, theo dõi lộ trình - hẹn giờ linh hoạt."
    },
    {
      icon: Boxes,
      title: "Kho bãi & lưu trữ",
      desc: "Hệ thống kho hàng ổn định, chủ động nguồn cung cho công trình."
    },
    {
      icon: Wrench,
      title: "Hỗ trợ kỹ thuật hiện trường",
      desc: "Hỗ trợ kỹ thuật theo từng hạng mục thi công, hướng dẫn sử dụng vật tư."
    },
    {
      icon: ShieldCheck,
      title: "Hậu mãi & bảo hành",
      desc: "Chính sách bảo hành chính hãng, hỗ trợ đổi trả theo điều kiện sản phẩm."
    }
  ]

  return (
    <section id="services" className="relative isolate bg-white py-12 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Dịch vụ"
          title="Giải pháp chuyên nghiệp cho công trình"
          description="Đồng hành từ khâu tư vấn vật tư, báo giá, vận chuyển đến hỗ trợ kỹ thuật và hậu mãi."
          align="center"
        />

        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card
              key={i}
              as="article"
              className="group p-5 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center rounded-lg border bg-brand-base p-2">
                <s.icon className="w-5 h-5 text-brand-primary" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-brand-ink">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-brand-ink/70">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
