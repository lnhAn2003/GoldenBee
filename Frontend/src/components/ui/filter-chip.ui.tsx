import type { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"
import { buttonClass } from "./button.ui"

type FilterChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean
}

export function FilterChip({
  active = false,
  className,
  children,
  ...props
}: FilterChipProps) {
  return (
    <button
      type="button"
      className={buttonClass({
        variant: active ? "primary" : "light",
        size: "md",
        className: twMerge(
          "flex items-center gap-2 rounded-full",
          active ? "shadow-md" : "ring-1 ring-brand-primary/10",
          className
        )
      })}
      {...props}
    >
      {children}
    </button>
  )
}
