import Link from "next/link"
import { Satellite, Telescope, Globe, ArrowRight, Sparkles } from "lucide-react"

export default function About() {
  return (
    <div className="relative">
      <div className="starfield" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-heading font-semibold tracking-[0.15em] text-cyan-400/80 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" /> About PageCore
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
            Deep Space <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explained
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            PageCore is a publication dedicated to in-depth coverage of humanity&apos;s most ambitious space missions — translating complex science into captivating long-form articles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] space-y-4 hover:border-cyan-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Satellite className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">Mission Coverage</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Deep dives into spacecraft journeys, scientific instruments, and the discoveries reshaping our understanding of the solar system.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] space-y-4 hover:border-cyan-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Telescope className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">Science Translations</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complex astrophysics and planetary science explained in clear, engaging prose — no PhD required.
            </p>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.06] space-y-4 hover:border-cyan-500/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-heading font-bold text-white">Global Perspective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              From NASA to CNSA to Africa2Moon — covering the international effort to explore the cosmos.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-950/20 via-zinc-900/60 to-blue-950/20 rounded-3xl p-10 md:p-14 border border-white/[0.06] space-y-6">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">Ready to Explore?</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Browse our complete archive of space mission briefings.
          </p>
          <Link
            href="/posts"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-heading font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20"
          >
            View All Missions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}