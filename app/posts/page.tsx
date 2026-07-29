import Link from "next/link"
import Image from "next/image"
import { getVideos } from "@/lib/content"
import { Calendar, Clock, ArrowUpRight, Satellite } from "lucide-react"

export default async function Posts() {
  const videos = await getVideos()

  return (
    <div className="relative min-h-screen pb-24">
      {/* Star field */}
      <div className="starfield" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-heading font-semibold tracking-[0.15em] text-cyan-400/80 mb-6 backdrop-blur-sm">
            <Satellite className="w-3.5 h-3.5" /> Mission Archive
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight mb-4">
            All Mission Briefings
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive coverage of humanity&apos;s most ambitious space exploration missions.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <Link
              key={video.slug}
              href={`/posts/${video.slug}`}
              className="group relative"
            >
              <div className="h-full rounded-3xl overflow-hidden border border-white/[0.06] bg-zinc-900/40 backdrop-blur-sm shadow-xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-500/5">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={video.thumbnail || "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80"}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/[0.08] text-[11px] font-heading font-semibold uppercase tracking-widest text-cyan-400">
                      <Satellite className="w-3 h-3" />
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight mb-3">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(video.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {video.readingTime} min
                      </span>
                    </div>
                    <span className="text-cyan-400 font-heading text-xs font-semibold uppercase tracking-wider group-hover:tracking-[0.15em] transition-all">
                      Read <ArrowUpRight className="w-3 h-3 inline" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {videos.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">No mission briefings available yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}