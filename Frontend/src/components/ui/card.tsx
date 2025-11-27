import type { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article"
  hover?: boolean
}

export function Card({
  as = "div",
  hover = true,
  className,
  ...props
}: CardProps) {
  const Tag = as as "div"

  return (
    <Tag
      className={twMerge(
        "rounded-2xl border border-brand-base bg-white shadow-sm ring-1 ring-brand-primary/5",
        hover && "transition hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      {...props}
    />
  )
}
