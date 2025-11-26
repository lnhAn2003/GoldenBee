import clsx from "clsx"
import { twMerge } from "tailwind-merge"

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "pill"
type ButtonSize = "sm" | "md" | "lg"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-60"

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base"
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white hover:-translate-y-0.5 hover:bg-brand-dark",
  secondary: "bg-white text-brand-ink ring-1 ring-brand-primary/15 hover:-translate-y-0.5 hover:bg-brand-light",
  ghost: "border border-brand-primary/30 bg-transparent text-brand-primary hover:bg-brand-light/70",
  light: "bg-brand-light text-brand-dark ring-1 ring-brand-primary/10 hover:bg-brand-light/80",
  pill: "bg-brand-light text-brand-dark ring-1 ring-brand-primary/20"
}

export function buttonClass(options: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  const { variant = "primary", size = "md", className = "" } = options
  return twMerge(clsx(base, sizeStyles[size], variantStyles[variant], className))
}
