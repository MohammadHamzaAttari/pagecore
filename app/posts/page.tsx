import Link from "next/link"
import VideoCard from "@/components/VideoCard"
import { getVideos, getCategories, getPages } from "@/lib/content"

export default async function Posts({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams
  const category = params?.category
  const page = params?.page
  const videos = await getVideos()
  const categories = await getCategories()
  const pages = await getPages()

  let filtered = videos
  if (category) filtered = filtered.filter(v => v.category === category)
  if (page) filtered = filtered.filter(v => v.page === page)

  const btn = (active: boolean, href: string, label: string) => (
    <Link href={href} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900" : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"}`}>{label}</Link>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-8">All Explanations</h1>

      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Category</h2>
        <div className="flex flex-wrap gap-2">
          {btn(!category, "/posts", "All")}
          {categories.map((c,i) => <span key={i}>{btn(category === c, `/posts?category=${encodeURIComponent(c)}`, c)}</span>)}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Facebook Page</h2>
        <div className="flex flex-wrap gap-2">
          {btn(!page, "/posts", "All")}
          {pages.map((p,i) => <span key={i}>{btn(page === p, `/posts?page=${encodeURIComponent(p)}`, p)}</span>)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(v => (
          <Link key={v.slug} href={`/posts/${v.slug}`} className="block h-full"><VideoCard video={v} /></Link>
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center text-slate-500 py-12">No posts found.</p>}
    </div>
  )
}