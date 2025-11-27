import type { ReactNode } from "react"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  side?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  side,
  className
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left"
  const wrapperAlign =
    align === "center" && !side
      ? "flex-col items-center"
      : "flex-row items-center justify-between"

  return (
    <header
      className={twMerge(
        "flex flex-wrap gap-4 text-brand-ink",
        wrapperAlign,
        className
      )}
    >
      <div
        className={clsx(
          "space-y-2",
          align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
          textAlign
        )}
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-brand-ink/70">
            {description}
          </p>
        )}
      </div>
      {side && (
        <div className={align === "center" ? "mx-auto" : ""}>
          {side}
        </div>
      )}
    </header>
  )
}
