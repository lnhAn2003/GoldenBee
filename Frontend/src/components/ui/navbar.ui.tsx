// src/components/ui/navbar.ui.tsx
import type { ComponentType } from "react"
import { Home, Box, Building2, Newspaper, Info, Phone, Paperclip } from "lucide-react"

type NavItemConfig = {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
}

type NavItemProps = NavItemConfig

function NavItem({ icon: Icon, href, label }: NavItemProps) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 text-brand-ink/70 hover:text-brand-ink transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary group-hover:after:w-full after:transition-[width]"
    >
      <Icon className="w-4 h-4" />
      {label}
    </a>
  )
}

const NAV_ITEMS: NavItemConfig[] = [
  { label: "Trang chủ", href: "/", icon: Home },
  { label: "Sản phẩm", href: "/products", icon: Box },
  { label: "Dự án", href: "/projects", icon: Building2 },
  { label: "Tin tức", href: "/news", icon: Newspaper },
  { label: "Giới thiệu", href: "/aboutus", icon: Info },
  { label: "Liên hệ", href: "/contact", icon: Phone },
  { label: "Tài liệu", href: "/documents", icon: Paperclip },
]

export function MainNav() {
  return (
    <nav
      aria-label="Main"
      className="hidden lg:flex items-center gap-5 text-base mx-auto font-display"
    >
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </nav>
  )
}
