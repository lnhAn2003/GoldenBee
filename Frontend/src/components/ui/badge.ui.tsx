import type { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type BadgeVariant = "solid" | "soft" | "outline"

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
}

export function Badge({ variant = "soft", className, ...props }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold"

  const variantClass: Record<BadgeVariant, string> = {
    solid: "bg-brand-primary text-white shadow-sm",
    soft: "bg-brand-light text-brand-dark ring-1 ring-brand-primary/10",
    outline: "border border-brand-primary/40 text-brand-primary bg-white"
  }

  return (
    <span
      className={twMerge(base, variantClass[variant], className)}
      {...props}
    />
  )
}
