import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Calendar, Clock, ArrowLeft, Tag, BookOpen } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getVideo, getVideos } from "@/lib/content"
import VideoCard from "@/components/VideoCard"

export async function generateStaticParams() {
  return (await getVideos()).map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Record<string, string>> }): Promise<Metadata> {
  const { slug } = await params
  const video = await getVideo(slug)
  if (!video) return {}
  return {
    title: `${video.title} — PageCore`,
    description: video.description,
    openGraph: { title: video.title, description: video.description, type: "article", publishedTime: video.publishedAt },
  }
}

export default async function Post({ params }: { params: Promise<Record<string, string>> }) {
  const { slug } = await params
  const video = await getVideo(slug)
  if (!video) notFound()

  const allVideos = await getVideos()
  const relatedVideos = allVideos
    .filter((v) => v.slug !== slug && (v.category === video.category || v.page === video.page))
    .slice(0, 3)

  // Markdown Custom Renderers
  const Heading2 = ({ children }: any) => (
    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mt-12 mb-6 border-l-4 border-cyan-400 pl-4 py-1 bg-gradient-to-r from-cyan-950/30 to-transparent rounded-r-lg">
      {children}
    </h2>
  )

  const Heading3 = ({ children }: any) => (
    <h3 className="text-xl font-heading font-bold text-cyan-200 mt-8 mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-cyan-400" />
      {children}
    </h3>
  )

  const Paragraph = ({ children }: any) => (
    <div className="mb-6 leading-relaxed text-slate-300 text-base md:text-lg font-normal">{children}</div>
  )

  const UnorderedList = ({ children }: any) => <ul className="space-y-3 my-6 pl-2">{children}</ul>

  const ListItem = ({ children }: any) => (
    <li className="text-slate-300 relative pl-6 before:content-['◆'] before:absolute before:left-0 before:text-cyan-400 before:text-xs before:top-1 leading-relaxed">
      {children}
    </li>
  )

  const BlockQuote = ({ children }: any) => (
    <blockquote className="border-l-4 border-amber-400 pl-6 py-4 my-8 bg-gradient-to-r from-amber-500/10 to-transparent rounded-r-2xl text-lg text-amber-100 italic shadow-inner">
      {children}
    </blockquote>
  )

  const Strong = ({ children }: any) => <strong className="text-white font-bold">{children}</strong>

  const Emphasis = ({ children }: any) => <em className="text-cyan-400 not-italic font-medium">{children}</em>

  const Hr = () => <hr className="border-t border-white/10 my-10" />

  const MdImage = ({ src, alt }: any) => (
    <span className="my-10 block rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950">
      <span className="relative block w-full aspect-video">
        <Image src={src} alt={alt || ""} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" loading="lazy" />
      </span>
      {alt && <span className="block text-center text-xs text-slate-400 py-3 px-4 bg-zinc-950/90 border-t border-white/5">{alt}</span>}
    </span>
  )

  const Table = ({ children }: any) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-white/10 shadow-xl bg-zinc-950">
      <table className="w-full text-left border-collapse text-sm">{children}</table>
    </div>
  )

  const Thead = ({ children }: any) => (
    <thead className="bg-zinc-900 text-cyan-400 font-heading text-xs uppercase tracking-wider border-b border-white/10">
      {children}
    </thead>
  )

  const Tbody = ({ children }: any) => <tbody className="divide-y divide-white/5 text-slate-300">{children}</tbody>

  const Tr = ({ children }: any) => <tr className="hover:bg-white/[0.02] transition-colors">{children}</tr>

  const Th = ({ children }: any) => <th className="px-5 py-3.5 font-semibold">{children}</th>

  const Td = ({ children }: any) => <td className="px-5 py-3.5 leading-relaxed">{children}</td>

  const Pre = ({ children }: any) => (
    <div className="my-8 rounded-xl overflow-hidden border border-cyan-500/20 bg-zinc-950 shadow-2xl p-4 font-mono text-sm text-cyan-300 overflow-x-auto leading-relaxed">
      <pre>{children}</pre>
    </div>
  )

  const Code = ({ children }: any) => (
    <code className="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-sm font-mono font-medium">
      {children}
    </code>
  )

  return (
    <article className="min-h-screen pb-24">
      {/* Back Navigation Bar */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Explanations
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            {video.readingTime} min read
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-slate-400 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(video.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs uppercase tracking-widest text-purple-300 font-semibold">
            <Tag className="w-3.5 h-3.5" />
            {video.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
          {video.title}
        </h1>

        <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light border-l-2 border-cyan-500/50 pl-4">
          {video.description}
        </p>
      </section>

      {/* Article Content Container */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-zinc-900/60 backdrop-blur-2xl rounded-3xl p-6 md:p-12 shadow-2xl border border-white/10">
          {/* Rendered Markdown Body */}
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
                table: Table,
                thead: Thead,
                tbody: Tbody,
                tr: Tr,
                th: Th,
                td: Td,
                pre: Pre,
                code: Code,
              }}
            >
              {video.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Related Explanations */}
      {relatedVideos.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              Related Explanations
            </h2>
            <Link href="/posts" className="text-sm font-semibold text-cyan-400 hover:underline">
              View All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedVideos.map((v) => (
              <Link key={v.slug} href={`/posts/${v.slug}`} className="block h-full">
                <VideoCard video={v} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
