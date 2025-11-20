import { useEffect, useState } from "react"

type Story = {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  badge?: string
}

const mainStory: Story = {
  id: "m1",
  title: "Face brick drop for skyline facade mock-up",
  excerpt: "Siena deep red with dark joint mortar arrives pre-wrapped for rooftop hoist. Two pallets staged for architect review tonight.",
  category: "Main",
  date: "2025-11-20",
  image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1500&auto=format&fit=crop",
  badge: "Main Story",
}

const editorsPicks: Story[] = [
  {
    id: "e1",
    title: "Peace-of-mind warranty on pressed brick for coastal builds",
    excerpt: "Salt-resistant slips and low-porosity bodies tested for waterfront towers.",
    category: "Editor\'s pick",
    date: "2025-11-18",
    image: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?q=80&w=800&auto=format&fit=crop",
    badge: "Spec",
  },
  {
    id: "e2",
    title: "Load-out plan keeps cranes moving at riverside townhomes",
    excerpt: "Six drops over 36 hours with banded packs and slab mats ready for hoist hooks.",
    category: "Project",
    date: "2025-11-16",
    image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=800&auto=format&fit=crop",
    badge: "Logistics",
  },
]

const trending: Story[] = [
  {
    id: "t1",
    title: "Graphite brick run is back with matching dark mortar",
    excerpt: "New batch ready with plastic-wrapped pallets to prevent staining in transit.",
    category: "Trending",
    date: "2025-11-15",
    image: "https://images.unsplash.com/photo-1529429617124-aee7fc9c5c1c?q=80&w=800&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: "t2",
    title: "Crew favorites: smooth utility blocks for fast layout",
    excerpt: "Clean arrises and tight tolerances speed up courses for interior partitions.",
    category: "Trending",
    date: "2025-11-14",
    image: "https://images.unsplash.com/photo-1600460759920-9fe5c0b1c1ad?q=80&w=800&auto=format&fit=crop",
    badge: "Trending",
  },
  {
    id: "t3",
    title: "Watch: mortar color match demo on a cloudy day",
    excerpt: "Field techs show pigment adjustments to keep joints even when humidity spikes.",
    category: "Trending",
    date: "2025-11-12",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop",
    badge: "Watch",
  },
]

const popular: Story[] = [
  {
    id: "p1",
    title: "Ways to stage pallets when space is tight",
    excerpt: "How to keep face brick clean with tarp tunnels and drip trays on narrow sites.",
    category: "Popular",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    badge: "Guide",
  },
  {
    id: "p2",
    title: "Step-by-step flight-ready pallet prep",
    excerpt: "Strapping, corner guards, and shrink wrap that survive the airport tarmac to island projects.",
    category: "Popular",
    date: "2025-11-09",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=800&auto=format&fit=crop",
    badge: "Logistics",
  },
  {
    id: "p3",
    title: "Track-ready delivery for motorsport pits",
    excerpt: "Block, mortar, and pavers sequenced by bay so crews pour, lay, and grout without waiting.",
    category: "Popular",
    date: "2025-11-08",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    badge: "Case study",
  },
  {
    id: "p4",
    title: "Stadium-grade drainage and paver stacks",
    excerpt: "Pre-matched pavers and drainage kits staged by gate for overnight installs.",
    category: "Popular",
    date: "2025-11-07",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
    badge: "Playbook",
  },
]

const tickerItems = [
  "Flash deal: Siena face brick bundles minus $45 per thousand until Friday.",
  "Night delivery slots open for District 1 and Thu Duc on 11/22.",
  "Graphite series back in stock with matching dark joint mortar.",
  "Free sample wall panels for architects through December.",
]

function formatDate(s: string) {
  try {
    const d = new Date(s)
    return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" })
  } catch {
    return s
  }
}

export default function News() {
  const [tickerIndex, setTickerIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTickerIndex((i) => (i + 1) % tickerItems.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="news" aria-label="Brick updates and projects" className="relative isolate py-12 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_31px,rgba(15,23,42,0.04)_32px),repeating-linear-gradient(0deg,transparent,transparent_31px,rgba(15,23,42,0.04)_32px)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-6">
        {/* Newsflash ticker - left unchanged */}
        <div className="flex items-center overflow-hidden rounded-full bg-brand-primary text-white shadow">
          <div className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-[10px] leading-none">*</span>
            Newsflash
          </div>
          <div className="relative flex-1 h-10">
            {tickerItems.map((item, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center px-4 text-sm font-medium transition-all duration-500"
                style={{
                  transform: `translateY(${(i - tickerIndex) * 100}%)`,
                  opacity: i === tickerIndex ? 1 : 0,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-primary">GoldenBee Brick Supply</p>
            <h2 className="text-3xl font-bold text-brand-ink md:text-4xl">Main stories & picks</h2>
          </div>
          <a
            href="#catalog"
            className="inline-flex items-center rounded-full border border-brand-primary/20 bg-white px-4 py-2 text-sm font-semibold text-brand-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow"
          >
            View catalog
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <article className="lg:col-span-7 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img src={mainStory.image} alt={mainStory.title} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 space-y-2 text-white drop-shadow">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase">
                  <span className="rounded-full bg-red-500/90 px-3 py-1">{mainStory.badge}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1">{mainStory.category}</span>
                </div>
                <h3 className="text-2xl font-bold leading-snug md:text-3xl">{mainStory.title}</h3>
                <p className="max-w-3xl text-sm text-white/90 md:text-base">{mainStory.excerpt}</p>
                <div className="text-xs text-white/80">Updated {formatDate(mainStory.date)}</div>
              </div>
            </div>
          </article>

          <div className="lg:col-span-5 grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              {editorsPicks.map((story) => (
                <SmallCard key={story.id} story={story} accent="amber" />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {trending.map((story) => (
                <TinyCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Popular Stories</p>
              <h3 className="text-xl font-bold text-brand-ink">What teams are clicking right now</h3>
            </div>
            <a
              href="#news/all"
              className="inline-flex items-center rounded-lg border border-brand-primary/20 bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand-light"
            >
              Browse all
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {popular.map((story) => (
              <WideCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type CardProps = { story: Story }

function SmallCard({ story, accent = "red" }: CardProps & { accent?: "red" | "amber" }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3]">
        <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
        <span
          className="absolute left-3 bottom-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase text-white"
          style={{ backgroundColor: accent === "red" ? "#ef4444" : "#f59e0b" }}
        >
          {story.badge || story.category}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-primary">{story.category}</p>
        <h4 className="text-base font-semibold text-brand-ink leading-snug">{story.title}</h4>
        <p className="text-sm text-brand-ink/70">{story.excerpt}</p>
        <div className="text-xs text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}

function TinyCard({ story }: CardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
      <img src={story.image} alt={story.title} className="h-32 w-full object-cover transition duration-200 group-hover:scale-105" loading="lazy" />
      <div className="absolute left-2 top-2 rounded-full bg-brand-primary px-2 py-1 text-[10px] font-semibold uppercase text-white">
        {story.badge || story.category}
      </div>
      <div className="p-3 space-y-1">
        <h5 className="text-[15px] font-semibold text-brand-ink leading-snug line-clamp-2">{story.title}</h5>
        <div className="text-[11px] text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}

function WideCard({ story }: CardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow">
      <div className="relative aspect-[4/2.2] w-full overflow-hidden">
        <img src={story.image} alt={story.title} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-[10px] font-semibold uppercase text-white">
          {story.badge || story.category}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <h4 className="text-base font-semibold text-brand-ink leading-snug">{story.title}</h4>
        <p className="text-sm text-brand-ink/70">{story.excerpt}</p>
        <div className="text-xs text-brand-ink/60">{formatDate(story.date)}</div>
      </div>
    </article>
  )
}
