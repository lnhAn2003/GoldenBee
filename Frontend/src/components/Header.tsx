import { useEffect, useState } from "react"
import { Menu, X, Search, Home, Package, Building2, Phone, Newspaper, Info, ChevronDown, Paperclip, Box, Link } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [prodOpen, setProdOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 border-b ${scrolled ? 'bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-1xl px-4 h-16 flex items-center gap-10">
        {/* Logo (left) */}
        <div className="justify-self-start">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/logo/logoongvang.jpeg" alt="Logo" className="h-15 w-50 object-contain shrink-0" />
          </a>
        </div>

        {/* Centered nav */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-5 text-base mx-auto font-display">
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/"><Home className="w-4 h-4"/>Trang chủ</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/products"><Box className="w-4 h-4"/>Sản phẩm</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/projects"><Building2 className="w-4 h-4"/>Dự án</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/news"><Newspaper className="w-4 h-4"/>Tin tức</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/aboutus"><Info className="w-4 h-4"/>Giới thiệu</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/contact"><Phone className="w-4 h-4"/>Liên hệ</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="/documents"><Paperclip className="w-4 h-4"/>Tài liệu</a>
        </nav>

        {/* Right: Search + mobile toggler */}
        <div className="ml-auto flex items-center gap-2">
          <form role="search" aria-label="Tìm kiếm" action="#search" className="hidden lg:flex items-center">
            <div className="relative">
              <Search className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${scrolled ? 'text-brand-ink/60' : 'text-brand-ink/70'}`}/>
              <input
                className={`w-64 rounded-lg bg-transparent pl-9 pr-3 py-2 text-sm outline-none border ${scrolled ? 'border-black/20 text-brand-ink placeholder:text-brand-ink/50' : 'border-brand-ink/30 text-brand-ink placeholder:text-brand-ink/60'}`}
                placeholder="Tìm sản phẩm..."
                name="q"
                type="search"
                autoComplete="off"
              />
            </div>
          </form>

          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 rounded border"
            aria-label="Toggle Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet dropdown panel (translucent) */}
      {open && (
        <div
          id="mobile-nav"
          className={`lg:hidden border-t backdrop-blur ${scrolled ? 'bg-white/70 supports-[backdrop-filter]:bg-white/50' : 'bg-white/60 supports-[backdrop-filter]:bg-white/40'} shadow-sm`}
        >
          <div className="px-4 py-3">
            <form role="search" aria-label="Tìm kiếm" action="#search" className="flex items-center">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-brand-ink/50 absolute left-3 top-1/2 -translate-y-1/2"/>
                <input
                  className="w-full rounded-lg border bg-transparent pl-9 pr-3 py-2 text-sm placeholder:text-brand-ink/50 outline-none"
                  placeholder="Tìm sản phẩm..."
                  name="q"
                  type="search"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <nav className="px-4 pb-4 grid gap-2 text-base font-display" aria-label="Mobile">
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#home"><Home className="w-4 h-4"/>Trang chủ</a>

            <div>
              <button
                type="button"
                aria-expanded={prodOpen}
                aria-controls="mobile-sub-products"
                onClick={() => setProdOpen(v => !v)}
                className="w-full inline-flex items-center justify-between gap-2 text-brand-ink/80 hover:text-brand-ink"
              >
                <span className="inline-flex items-center gap-2"><Package className="w-4 h-4"/>Sản phẩm</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${prodOpen ? 'rotate-180' : ''}`} />
              </button>
              {prodOpen && (
                <div id="mobile-sub-products" className="mt-2 ml-6 grid gap-2 border-l border-black/10 pl-3">
                  <a onClick={()=>setOpen(false)} className="text-brand-ink/70 hover:text-brand-ink" href="#products/hot">Sản phẩm nổi bật</a>
                  <a onClick={()=>setOpen(false)} className="text-brand-ink/70 hover:text-brand-ink" href="#products/best">Bán chạy</a>
                  <a onClick={()=>setOpen(false)} className="text-brand-ink/70 hover:text-brand-ink" href="#products/sale">Đang giảm giá</a>
                </div>
              )}
            </div>

            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#projects"><Building2 className="w-4 h-4"/>Dự án</a>
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#news"><Newspaper className="w-4 h-4"/>Tin tức</a>
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#about"><Info className="w-4 h-4"/>Giới thiệu</a>
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#contact"><Phone className="w-4 h-4"/>Liên hệ</a>
          </nav>
        </div>
      )}
    </header>
  )
}
