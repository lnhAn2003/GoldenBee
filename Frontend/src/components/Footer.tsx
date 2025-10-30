
import { Phone, Mail, MapPin, Facebook, Youtube, Store, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-12 bg-brand-dark text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand + contact */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded bg-brand-primary inline-block" />
            <span className="font-semibold">YourCompany</span>
          </div>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="inline-flex items-center gap-2"><Phone className="w-4 h-4"/> 0123 456 789</li>
            <li className="inline-flex items-center gap-2"><Mail className="w-4 h-4"/> contact@yourco.vn</li>
            <li className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/> 123 Đường ABC, Q.1, HCM</li>
            <li className="inline-flex items-center gap-2"><Globe className="w-4 h-4"/> MST: 0123456789</li>
          </ul>
          <a
            href="https://online.gov.vn/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-xs text-white/70 hover:text-white"
            aria-label="Đã thông báo Bộ Công Thương"
          >
            <span className="inline-block rounded bg-white/10 px-2 py-1">Bộ Công Thương</span>
            <span>Đã thông báo</span>
          </a>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-semibold mb-3">Chính sách</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a className="hover:text-white" href="#policy-products">Sản phẩm & chất lượng</a></li>
            <li><a className="hover:text-white" href="#policy-shipping">Vận chuyển & giao nhận</a></li>
            <li><a className="hover:text-white" href="#policy-warranty">Bảo hành</a></li>
            <li><a className="hover:text-white" href="#policy-returns">Đổi trả</a></li>
          </ul>
        </div>

        {/* Social + TMDT */}
        <div>
          <h4 className="font-semibold mb-3">Kết nối</h4>
          <div className="flex gap-3">
            <a className="p-2 rounded-lg border border-white/20 hover:bg-white/10" href="#facebook" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
            <a className="p-2 rounded-lg border border-white/20 hover:bg-white/10" href="#youtube" aria-label="YouTube"><Youtube className="w-5 h-5"/></a>
            <a className="p-2 rounded-lg border border-white/20 hover:bg-white/10" href="#store" aria-label="Sàn TMDT"><Store className="w-5 h-5"/></a>
          </div>
          <ul className="mt-3 text-sm text-white/80 space-y-1">
            <li><a className="hover:text-white" href="#shopee">Shopee</a></li>
            <li><a className="hover:text-white" href="#lazada">Lazada</a></li>
            <li><a className="hover:text-white" href="#tiki">Tiki</a></li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="font-semibold mb-3">Bản đồ</h4>
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
            <iframe
              title="Google Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=ho%20chi%20minh&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-white/80 text-sm">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
          <div>© {new Date().getFullYear()} YourCompany</div>
          <nav aria-label="Footer" className="flex gap-4">
            <a className="hover:text-white" href="#terms">Điều khoản</a>
            <a className="hover:text-white" href="#privacy">Bảo mật</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
