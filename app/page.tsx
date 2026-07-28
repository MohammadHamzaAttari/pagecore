import Link from "next/link"
import Image from "next/image"
import VideoCard from "@/components/VideoCard"
import { getVideos, getFeaturedVideos, getPages, getCategories } from "@/lib/content"
import { Sparkles, Video, ArrowRight, BookOpen, Layers, Flame } from "lucide-react"

export default async function Home() {
  const allVideos = await getVideos()
  const featured = await getFeaturedVideos()
  const pages = await getPages()
  const categories = await getCategories()

  const heroPost = featured[0] || allVideos[0]
  const remainingFeatured = featured.slice(1, 7)

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-12 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" /> Facebook Video Deep Dives &amp; Analysis
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
              Decoding Viral <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Facebook Content
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
              In-depth articles, production breakdowns, and algorithm insights for Facebook videos from all our flagship pages.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/posts"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25"
              >
                Explore Explanations <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all"
              >
                About Platform
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 pt-12 border-t border-white/5">
            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 text-center">
              <span className="font-heading text-3xl font-bold text-cyan-400 block">{allVideos.length}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Explanations</span>
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 text-center">
              <span className="font-heading text-3xl font-bold text-purple-400 block">{pages.length}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Facebook Pages</span>
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 text-center">
              <span className="font-heading text-3xl font-bold text-amber-400 block">{categories.length}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Categories</span>
            </div>
            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 text-center">
              <span className="font-heading text-3xl font-bold text-blue-400 block">100%</span>
              <span className="text-xs uppercase tracking-wider text-slate-400 mt-1 block">Production Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Article Banner */}
      {heroPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-5 h-5 text-amber-400" />
            <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wider">
              Spotlight Explanation
            </h2>
          </div>

          <Link href={`/posts/${heroPost.slug}`} className="block group">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
              <div className="lg:col-span-7 relative h-72 lg:h-auto min-h-[350px]">
                <Image
                  src={heroPost.thumbnail || "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80"}
                  alt={heroPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
                  {heroPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                  {heroPost.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base line-clamp-3 leading-relaxed">
                  {heroPost.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Featured Articles Grid */}
      {remainingFeatured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" /> Featured Explanations
            </h2>
            <Link href="/posts" className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1">
              View All ({allVideos.length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingFeatured.map((v) => (
              <Link key={v.slug} href={`/posts/${v.slug}`} className="block h-full">
                <VideoCard video={v} />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Pages Section */}
      {pages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-purple-950/40 via-zinc-900/60 to-cyan-950/40 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-400" />
              <h2 className="text-2xl font-heading font-bold text-white">Our Facebook Pages</h2>
            </div>
            <p className="text-slate-300 max-w-2xl text-sm md:text-base leading-relaxed">
              Explore specialized video explanations grouped by their originating Facebook page.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((p) => (
                <Link
                  key={p}
                  href={`/posts?page=${encodeURIComponent(p)}`}
                  className="p-6 rounded-2xl bg-zinc-950/70 border border-white/10 hover:border-purple-500/50 hover:bg-zinc-950 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                      {p}
                    </h3>
                    <Video className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-xs text-slate-400">View all breakdown posts from {p}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
