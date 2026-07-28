"use client"

import { useState } from "react"
import { Play, Video as VideoIcon } from "lucide-react"

export default function VideoEmbed({ url, title }: { url: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const isFacebook = url.includes("facebook.com") || url.includes("fb.watch")
  
  // Format proper Facebook embed URL
  const embedUrl = isFacebook
    ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`
    : url

  return (
    <div className="relative aspect-video bg-zinc-950 rounded-2xl overflow-hidden mb-10 shadow-2xl border border-white/10 group">
      {!isPlaying ? (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/80 via-zinc-950 to-purple-950/80 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all shadow-xl shadow-cyan-500/20">
            <Play className="w-7 h-7 fill-cyan-400 ml-1" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            <VideoIcon className="w-3.5 h-3.5" /> Facebook Video Explanation
          </div>
          <h3 className="text-lg md:text-xl font-heading font-bold text-white max-w-xl line-clamp-1">{title}</h3>
          <button
            onClick={() => setIsPlaying(true)}
            className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-semibold text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/25"
          >
            Watch Facebook Video
          </button>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
          allowFullScreen
        />
      )}
    </div>
  )
}
