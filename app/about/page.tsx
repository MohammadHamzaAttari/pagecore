import Link from "next/link"
import { Sparkles, Video, BarChart2, Lightbulb, ShieldCheck, ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" /> About Platform
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white tracking-tight">
          Understanding the Art &amp; Science of <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Facebook Video
          </span>
        </h1>
        <p className="text-slate-300 text-lg leading-relaxed">
          PageCore is a premier technical publication platform dedicated to providing comprehensive, publication-grade explanations of viral Facebook video content.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Video className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white">Video Breakdowns</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            In-depth analysis of narrative arcs, visual hook mechanics, audio design, and editing pacing that drive viewer retention past the critical 30-second benchmark.
          </p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
            <BarChart2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white">Algorithm Intelligence</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Updated insights on Facebook ranking signals, watch time weights, private Messenger shares, and repeat viewer engagement metrics.
          </p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white">Scientific &amp; Tech Coverage</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            From deep-space missions to groundbreaking AI developments, we translate complex technological achievements into captivating long-form articles.
          </p>
        </div>

        <div className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white">Production Quality</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every breakdown article is formatted to publication standards with clear data tables, structural diagrams, verified sources, and embedded video clips.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center bg-gradient-to-r from-cyan-950/40 via-zinc-900/80 to-purple-950/40 rounded-3xl p-10 border border-white/10 space-y-6">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">Ready to Explore Our Content?</h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Browse our complete library of Facebook video explanations and strategic breakdowns today.
        </p>
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25"
        >
          Browse All Explanations <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
