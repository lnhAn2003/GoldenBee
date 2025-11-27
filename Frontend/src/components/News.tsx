import { useState } from "react"
import { buttonClass } from "./ui/button"
import { SectionHeader } from "./ui/section-header"
import { FilterChip } from "./ui/filter-chip"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

import type { Story } from "../mocks/news"
import { projectNews } from "../mocks/news"
import { tileArticles } from "../mocks/news"
import { interiorNews } from "../mocks/news"
import { companyNews } from "../mocks/news"
import { constructionNews } from "../mocks/news"

type SectionKey = "projects" | "interior" | "tiles" | "company" | "construction"

const sections: Record<
  SectionKey,
  { label: string; subtitle: string; stories: Story[] }
> = {
  projects: {
    label: "Dự án & công trình",
    subtitle: "Cập nhật tiến độ, vật liệu cho từng dự án.",
    stories: projectNews
  },
  interior: {
    label: "Nội thất & hoàn thiện",
    subtitle: "Ý tưởng chọn gạch, thiết bị cho không gian sống.",
    stories: interiorNews
  },
  tiles: {
    label: "Gạch & ngói",
    subtitle: "Kiến thức chọn gạch, ngói và phụ kiện.",
    stories: tileArticles
  },
  company: {
    label: "Hoạt động công ty",
    subtitle: "Tin tức từ hệ thống kho và đội ngũ Ong Vàng.",
    stories: companyNews
  },
  construction: {
    label: "Thị trường xây dựng",
    subtitle: "Giá vật liệu và xu hướng xây dựng mới.",
    stories: constructionNews
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
}

export default function News() {
  const [activeSection, setActiveSection] = useState<SectionKey>("projects")
  const current = sections[activeSection]
  const [featured, ...rest] = current.stories

  return (
    <section
      id="news"
      aria-label="Tin tức & câu chuyện"
      className="relative isolate bg-white py-12 md:py-16"
    >
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(31,41,55,0.04)_32px)]" />

      <div className="container mx-auto max-w-6xl px-4">
        <div className="space-y-6">
          <SectionHeader
            eyebrow="Tin tức & câu chuyện"
            title="Tin mới về dự án, vật liệu & doanh nghiệp"
            description="Chọn chủ đề bạn quan tâm để xem nhanh tin dự án, nội thất, gạch ngói, hoạt động công ty và tin xây dựng mới nhất."
            align="left"
            side={
              <a
                href="#news/all"
                className={buttonClass({ variant: "secondary", size: "md" })}
              >
                Xem tất cả bài viết
              </a>
            }
          />

          {/* Filter tabs */}
          <div className="flex gap-2 overflow-x-auto rounded-full bg-brand-light/60 px-2 py-2 text-sm text-brand-ink ring-1 ring-brand-primary/10">
            {(Object.keys(sections) as SectionKey[]).map((key) => {
              const sec = sections[key]
              const isActive = key === activeSection
              return (
                <FilterChip
                  key={key}
                  active={isActive}
                  onClick={() => setActiveSection(key)}
                >
                  {sec.label}
                </FilterChip>
              )
            })}
          </div>

          {/* Current section content */}
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-primary">
                {current.subtitle}
              </p>
              <h3 className="text-lg font-bold text-brand-ink">
                {current.label}
              </h3>
            </div>

            {featured && <FeaturedCard story={featured} />}

            {rest.length > 0 && (
              <div className="grid gap-4 md:grid-cols-3">
                {rest.map((story) => (
                  <SmallCard key={story.id} story={story} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ story }: { story: Story }) {
  return (
    <Card
      as="article"
      className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-6 bottom-5 space-y-2 text-white drop-shadow">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase">
            {story.badge && (
              <Badge
                variant="solid"
                className="bg-red-500/90 text-white px-3 py-1"
              >
                {story.badge}
              </Badge>
            )}
            <Badge
              variant="outline"
              className="border-white/40 bg-white/10 text-white px-3 py-1"
            >
              {story.category}
            </Badge>
          </div>
          <h4 className="text-xl font-bold leading-snug md:text-2xl">
            {story.title}
          </h4>
          <p className="max-w-2xl text-sm text-white/90">
            {story.excerpt}
          </p>
          <p className="text-[11px] text-white/80">
            {formatDate(story.date)}
          </p>
        </div>
      </div>
    </Card>
  )
}

function SmallCard({ story }: { story: Story }) {
  return (
    <Card
      as="article"
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/2.4] w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {story.badge && (
          <Badge
            variant="solid"
            className="absolute left-3 top-3 bg-brand-primary text-white px-3 py-1 text-[10px] uppercase"
          >
            {story.badge}
          </Badge>
        )}
      </div>
      <div className="space-y-1 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-primary">
          {story.category}
        </p>
        <h5 className="line-clamp-2 text-sm font-semibold leading-snug text-brand-ink">
          {story.title}
        </h5>
        <p className="line-clamp-3 text-xs text-brand-ink/70">
          {story.excerpt}
        </p>
        <p className="text-[11px] text-brand-ink/60">
          {formatDate(story.date)}
        </p>
      </div>
    </Card>
  )
}
