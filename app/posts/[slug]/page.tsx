import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getVideo } from "@/lib/content"
import VideoEmbed from "@/components/VideoEmbed"

export default async function Post({ params }: { params: Promise<Record<string, string>> }) {
  const { slug } = await params
  const video = await getVideo(slug)
  if (!video) notFound()

  const Heading2 = ({ children }: any) => (
    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-10 mb-4 border-l-4 border-cyan-500 pl-4">{children}</h2>
  )

  const Heading3 = ({ children }: any) => (
    <h3 className="text-xl font-heading font-semibold text-slate-100 mt-8 mb-3">{children}</h3>
  )

  const Paragraph = ({ children }: any) => (
    <p className="mb-5 leading-8 text-slate-300">{children}</p>
  )

  const UnorderedList = ({ children }: any) => (
    <ul className="space-y-3 my-6">{children}</ul>
  )

  const ListItem = ({ children }: any) => (
    <li className="text-slate-300 relative pl-6 before:content-['♦'] before:absolute before:left-0 before:text-cyan-500">{children}</li>
  )

  const BlockQuote = ({ children }: any) => (
    <blockquote className="border-l-4 border-amber-500 pl-6 py-4 my-8 bg-white/[0.02] rounded-r-xl text-lg text-slate-200 italic">{children}</blockquote>
  )

  const Strong = ({ children }: any) => (
    <strong className="text-white font-bold">{children}</strong>
  )

  const Emphasis = ({ children }: any) => (
    <em className="text-cyan-400 not-italic">{children}</em>
  )

  const Hr = () => (
    <hr className="border-white/10 my-12" />
  )

  const MdImage = ({ src, alt }: any) => (
    <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-white/5">
      <img src={src} alt={alt || ""} className="w-full object-cover" />
      {alt && <p className="text-center text-xs text-slate-500 py-2 px-4 bg-black/40">{alt}</p>}
    </div>
  )

  return (
    <article>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {video.thumbnail && (
          <div className="absolute inset-0">
            <Image src={video.thumbnail} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-cyan-400">
              <Clock className="w-3 h-3" />{video.readingTime} min
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-slate-400">
              <Calendar className="w-3 h-3" />{new Date(video.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-amber-400">
              {video.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-white" style={{ textShadow: "0 0 40px rgba(0,212,255,0.3)" }}>
            {video.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">{video.description}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-20 pb-24">
        <div className="bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl border border-white/5">
          <VideoEmbed url={video.videoUrl} title={video.title} />
          <div className="prose-cosmic">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: MdImage,
                h2: Heading2,
                h3: Heading3,
                p: Paragraph,
                ul: UnorderedList,
                li: ListItem,
                blockquote: BlockQuote,
                strong: Strong,
                em: Emphasis,
                hr: Hr,
              }}
            >
              {video.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  )
}
