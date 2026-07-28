import Image from "next/image"
import { Clock, Calendar, ChevronRight, Play } from "lucide-react"
import { Video } from "@/types/video"

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="group relative bg-zinc-900/70 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col">
      {/* Thumbnail Container */}
      <div className="relative h-52 overflow-hidden flex-shrink-0 bg-zinc-950">
        <Image
          src={video.thumbnail || "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80"}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md border border-white/10 text-cyan-400">
            {video.category}
          </span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-12 h-12 rounded-full bg-cyan-500/90 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
          </div>
        </div>

        {/* Reading Time */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-md text-[11px] text-slate-300 border border-white/10">
          <Clock className="w-3 h-3 text-cyan-400" />
          {video.readingTime} min read
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        {video.page && (
          <div className="text-xs font-medium text-purple-400 mb-1.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            {video.page}
          </div>
        )}

        <h3 className="text-xl font-heading font-bold text-white mb-2.5 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-snug">
          {video.title}
        </h3>

        <p className="text-sm text-slate-400 line-clamp-3 mb-6 flex-1 leading-relaxed">
          {video.excerpt || video.description}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 mt-auto">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {new Date(video.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </div>

          <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
            Read Article <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  )
}
