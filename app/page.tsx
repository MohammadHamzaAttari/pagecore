import Link from "next/link"
import VideoCard from "@/components/VideoCard"
import { getFeaturedVideos, getPages } from "@/lib/content"

export default async function Home() {
  const featured = await getFeaturedVideos()
  const pages = await getPages()
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Facebook Video Explanations
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Deep dives into the most interesting Facebook videos from our pages.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/posts" className="inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-700 transition-colors">
            Browse All Posts
          </Link>
        </div>
      </section>
      {pages.length > 1 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Facebook Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map(p => (
              <Link key={p} href={"/posts?page=" + encodeURIComponent(p)} className="block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors">
                <h3 className="text-lg font-bold">{p}</h3>
                <p className="text-sm text-slate-500 mt-1">View videos from this page</p>
              </Link>
            ))}
          </div>
        </section>
      )}
      {featured.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-8">Featured Explanations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map(v => (
              <Link key={v.slug} href={"/posts/" + v.slug} className="block h-full">
                <VideoCard video={v} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
