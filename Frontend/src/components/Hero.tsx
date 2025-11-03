// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-light to-white">
      

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* GALLERY TRÁI – mô-đun xếp lớp hiện đại */}
          <div className="grid grid-cols-6 grid-rows-6 gap-4 lg:order-1">
            {/* Ảnh lớn chính (cao) */}
            <figure className="col-span-4 row-span-6 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <img
                src="https://cafefcdn.com/203337114487263232/2023/9/27/17-2299-1695818398972-16958183990901425659148.jpg"
                alt="Kho bãi & vận chuyển VLXD"
                className="h-full w-full object-cover"
              />
            </figure>

            {/* Ảnh nhỏ 1 */}
            <figure className="col-span-2 row-span-3 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <img
                src="https://ongvang.vn/thumbnails/posts/large/uploads/2024/09/ngoi-prime-3-1.jpg.webp"
                alt="Ngói màu công trình"
                className="h-full w-full object-cover"
              />
            </figure>

            {/* Ảnh nhỏ 2 (chồng nhẹ) */}
            <div className="col-span-2 row-span-3 relative">
              <div className="absolute -top-3 -right-3 h-full w-full rounded-2xl bg-brand-primary/10 blur-sm" />
              <figure className="relative rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
                <img
                  src="https://ongvang.vn/uploads/c881b40ebef063b28dfe66277ce037c3.webp"
                  alt="Gạch ốp lát"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>

            {/* Ảnh dài ngang (float) */}
            <figure className="hidden md:block col-span-6 -mt-6 rounded-2xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <img
                src="https://ongvang.vn/thumbnails/posts/large/uploads/20250917-1028-mau-ngoi-lop-remix-01k5avbazsf4ps542nq0npanpp.jpg.webp"
                alt="Mẫu vật tư phối cảnh"
                className="h-48 w-full object-cover"
              />
            </figure>
          </div>

          {/* TEXT PHẢI – chỉ tiêu đề và mô tả, không nút */}
          <div
            className="space-y-6 lg:order-2"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="60"
          >
            <h1 className="text-4xl font-extrabold leading-tight text-brand-ink sm:text-5xl">
              Vật liệu xây dựng <span className="text-brand-primary">chuẩn công trình</span>, giao nhanh, báo giá minh bạch
            </h1>

            <p className="text-base sm:text-lg text-gray-700">
              Cung ứng gạch, xi măng, ngói màu, thép và phụ kiện lắp đặt từ các thương hiệu uy tín.
              Tư vấn theo hồ sơ thiết kế để tối ưu khối lượng, chi phí và tiến độ; hồ sơ CO/CQ đầy đủ,
              đáp ứng yêu cầu nghiệm thu và an toàn thi công.
            </p>

            {/* gạch đầu dòng chữ (không nút) */}
            <ul className="space-y-2 text-sm sm:text-base text-brand-ink/80">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Giao nội thành 24–48h, hỗ trợ bốc xếp theo mặt bằng thi công
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Báo giá theo BOQ, thay thế tương đương khi hết hàng
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Hỗ trợ lấy mẫu và catalogue cho kiến trúc/supervisor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
