import Link from "next/link"
import Image from "next/image"
import { getVideos } from "@/lib/content"
import { ArrowRight, Satellite, Telescope, Calendar, Clock, ArrowUpRight } from "lucide-react"

export default async function Home() {
  const allVideos = await getVideos()
  const [primary, secondary] = allVideos

  return (
    <div className="relative">
      {/* Persistent Star Field Background */}
      <div className="starfield" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-transparent to-[#050510] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-heading font-semibold tracking-[0.15em] text-cyan-400/80 mb-8 backdrop-blur-sm">
            <Satellite className="w-3.5 h-3.5" /> Deep Space Explained
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.9] mb-6">
            <span className="text-white">Beyond the</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent glow-text">
              Observable
            </span>
          </h1>

          <p className="text-slate-500 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            In-depth coverage of humanity&apos;s most ambitious missions — from the lunar south pole to the metal heart of the asteroid belt.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="/posts"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Telescope className="w-4 h-4" /> Explore Missions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-medium text-sm hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-sm"
            >
              About PageCore
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce text-slate-600">
            <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5 mx-auto">
              <div className="w-1 h-2 rounded-full bg-slate-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 -mt-10 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            Mission Briefings
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Two extraordinary journeys. Two stories that redefine what humanity can achieve.
          </p>
        </div>

        <div className="space-y-10">
          {allVideos.map((video, i) => (
            <Link
              key={video.slug}
              href={`/posts/${video.slug}`}
              className="group block"
            >
              <div className={`relative rounded-3xl overflow-hidden border border-white/[0.06] bg-zinc-900/40 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-500/5 ${i === 0 ? "lg:grid-cols-12" : "lg:grid-cols-12 lg:flex-row-reverse"}`}>
                <div className={`grid grid-cols-1 ${i === 0 ? "lg:grid-cols-12" : "lg:grid-cols-12"}`}>
                  {/* Image Side */}
                  <div className={`relative h-72 lg:h-auto min-h-[400px] ${i === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:order-last"}`}>
                    <Image
                      src={video.thumbnail || "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&q=80"}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className={`absolute inset-0 ${i === 0 ? "bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" : "bg-gradient-to-t lg:bg-gradient-to-l from-zinc-950 via-zinc-950/60 to-transparent"}`} />
                  </div>

                  {/* Content Side */}
                  <div className={`${i === 0 ? "lg:col-span-5" : "lg:col-span-5"} p-8 lg:p-12 flex flex-col justify-center relative`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-heading font-semibold uppercase tracking-widest text-cyan-400 w-fit mb-5">
                      <Satellite className="w-3 h-3" />
                      {video.category}
                    </div>

                    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight mb-4 ${i === 0 ? "" : ""}`}>
                      {video.title}
                    </h3>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3 mb-6">
                      {video.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(video.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {video.readingTime} min read
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-cyan-400 font-heading text-xs font-semibold uppercase tracking-widest group-hover:gap-3 transition-all">
                      Read Mission Briefing <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/posts"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-slate-300 font-heading text-sm font-semibold tracking-wider hover:bg-white/[0.06] hover:text-white hover:border-cyan-500/30 transition-all backdrop-blur-sm group"
          >
            View All Mission Archives <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}