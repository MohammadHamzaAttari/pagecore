import Link from "next/link"
import VideoCard from "@/components/VideoCard"
import { getVideos, getCategories, getPages } from "@/lib/content"
import { Search, Filter, Sparkles, X } from "lucide-react"

export default async function Posts({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>
}) {
  const params = await searchParams
  const category = params?.category
  const pageParam = params?.page
  const query = params?.q?.toLowerCase().trim()

  const videos = await getVideos()
  const categories = await getCategories()
  const pages = await getPages()

  let filtered = videos

  if (category) {
    filtered = filtered.filter((v) => v.category === category)
  }

  if (pageParam) {
    filtered = filtered.filter((v) => v.page === pageParam)
  }

  if (query) {
    filtered = filtered.filter(
      (v) =>
        v.title.toLowerCase().includes(query) ||
        v.description?.toLowerCase().includes(query) ||
        v.category?.toLowerCase().includes(query) ||
        v.content?.toLowerCase().includes(query)
    )
  }

  // Helper to build filter URLs preserving active parameters
  const buildUrl = (newCat?: string | null, newPage?: string | null, newQuery?: string | null) => {
    const search = new URLSearchParams()
    const activeCat = newCat === null ? undefined : newCat !== undefined ? newCat : category
    const activePage = newPage === null ? undefined : newPage !== undefined ? newPage : pageParam
    const activeQuery = newQuery === null ? undefined : newQuery !== undefined ? newQuery : query

    if (activeCat) search.set("category", activeCat)
    if (activePage) search.set("page", activePage)
    if (activeQuery) search.set("q", activeQuery)

    const str = search.toString()
    return str ? `/posts?${str}` : "/posts"
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Banner */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" /> Archive &amp; Directory
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
          Facebook Video Explanations
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          Search, filter, and explore comprehensive breakdowns across all categories and pages.
        </p>
      </div>

      {/* Search & Filter Control Panel */}
      <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl mb-12 space-y-6">
        {/* Search Bar Form */}
        <form action="/posts" method="GET" className="relative">
          {category && <input type="hidden" name="category" value={category} />}
          {pageParam && <input type="hidden" name="page" value={pageParam} />}
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            name="q"
            defaultValue={query || ""}
            placeholder="Search by title, topic, or keyword..."
            className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm transition-all"
          />
          {query && (
            <Link
              href={buildUrl(undefined, undefined, null)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Link>
          )}
        </form>

        {/* Category Pills */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <h2 className="text-xs font-heading uppercase tracking-widest text-slate-400 font-semibold">
              Filter by Category
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={buildUrl(null, undefined, undefined)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                !category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              All Categories
            </Link>
            {categories.map((c) => (
              <Link
                key={c}
                href={buildUrl(category === c ? null : c, undefined, undefined)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  category === c
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/25"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {c}
              </Link>
            ))}
          </div>
        </div>

        {/* Facebook Page Filter Pills */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <h2 className="text-xs font-heading uppercase tracking-widest text-slate-400 font-semibold">
              Filter by Facebook Page
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={buildUrl(undefined, null, undefined)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                !pageParam
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/25"
                  : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              All Pages
            </Link>
            {pages.map((p) => (
              <Link
                key={p}
                href={buildUrl(undefined, pageParam === p ? null : p, undefined)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  pageParam === p
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-md shadow-purple-500/25"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        </div>

        {/* Clear Filters Status Bar */}
        {(category || pageParam || query) && (
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong className="text-white">{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""}
            </span>
            <Link href="/posts" className="text-cyan-400 hover:underline flex items-center gap-1">
              <X className="w-3.5 h-3.5" /> Reset All Filters
            </Link>
          </div>
        )}
      </div>

      {/* Explanations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((v) => (
          <Link key={v.slug} href={`/posts/${v.slug}`} className="block h-full">
            <VideoCard video={v} />
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-20 bg-zinc-900/40 rounded-2xl border border-white/5">
          <p className="text-slate-400 text-lg font-medium mb-4">No explanations match your current filters.</p>
          <Link
            href="/posts"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all"
          >
            Clear Filters &amp; View All
          </Link>
        </div>
      )}
    </div>
  )
}