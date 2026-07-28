import Image from "next/image"
import { Clock } from "lucide-react"
import { Video } from "@/types/video"

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{video.category}</span>
        <h3 className="text-lg font-bold mt-1 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{video.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 flex-1">{video.excerpt}</p>
        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 dark:text-slate-500">
          <Clock className="w-3 h-3" /> {video.readingTime} min read
        </div>
      </div>
    </div>
  )
}
