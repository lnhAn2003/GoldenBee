import { useEffect, useState } from "react"
import { Menu, X, Search, Home, Package, Building2, Phone, Newspaper, Info } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto max-w-6xl px-4 h-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        {/* Logo (left) */}
        <div className="justify-self-start">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-brand-primary inline-block" />
            <span className="font-semibold">YourCompany</span>
          </a>
        </div>

        {/* Centered nav */}
        <nav aria-label="Main" className="hidden md:flex items-center gap-5 text-base justify-self-center">
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#home"><Home className="w-4 h-4"/>Trang chủ</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#products"><Package className="w-4 h-4"/>Sản phẩm</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#projects"><Building2 className="w-4 h-4"/>Dự án</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#news"><Newspaper className="w-4 h-4"/>Tin tức</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#about"><Info className="w-4 h-4"/>Giới thiệu</a>
          <a className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]" href="#contact"><Phone className="w-4 h-4"/>Liên hệ</a>
        </nav>

        {/* Right: Search + mobile toggler */}
        <div className="justify-self-end flex items-center gap-2">
          <form role="search" aria-label="Tìm kiếm" action="#search" className="hidden md:flex items-center">
            <div className="relative">
              <Search className="w-4 h-4 text-brand-ink/50 absolute left-3 top-1/2 -translate-y-1/2"/>
              <input
                className="w-64 rounded-lg border bg-white pl-9 pr-3 py-2 text-sm placeholder:text-brand-ink/40 outline-none"
                placeholder="Tìm sản phẩm..."
                name="q"
                type="search"
                autoComplete="off"
              />
            </div>
          </form>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden p-2 rounded border"
            aria-label="Toggle Menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t bg-white shadow-sm">
          <div className="px-4 py-3">
            <form role="search" aria-label="Tìm kiếm" action="#search" className="flex items-center">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-brand-ink/50 absolute left-3 top-1/2 -translate-y-1/2"/>
                <input
                  className="w-full rounded-lg border bg-white pl-9 pr-3 py-2 text-sm placeholder:text-brand-ink/40 outline-none"
                  placeholder="Tìm sản phẩm..."
                  name="q"
                  type="search"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <nav className="px-4 pb-4 grid gap-2 text-base" aria-label="Mobile">
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#home"><Home className="w-4 h-4"/>Trang chủ</a>
            <a onClick={()=>setOpen(false)} className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-ink" href="#products"><Package className="w-4 h-4"/>Sản phẩm</a>
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

