import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Video } from "@/types/video"

export async function getVideos(): Promise<Video[]> {
  const dir = path.join(process.cwd(), "content", "posts")
  if (!fs.existsSync(dir)) return []
  const names = fs.readdirSync(dir).filter(f => f.endsWith(".md"))
  return (await Promise.all(names.map(async (name) => {
    const slug = name.replace(/\.md$/, "")
    const { data, content } = matter(fs.readFileSync(path.join(dir, name), "utf8"))
    return { slug, ...data, content } as unknown as Video
  }))).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getFeaturedVideos(): Promise<Video[]> {
  return (await getVideos()).filter(v => v.featured).slice(0, 6)
}

export async function getVideo(slug: string): Promise<Video | null> {
  return (await getVideos()).find(v => v.slug === slug) || null
}

export async function getCategories(): Promise<string[]> {
  return [...new Set((await getVideos()).map(v => v.category))].sort()
}

export async function getPages(): Promise<string[]> {
  return [...new Set((await getVideos()).map(v => v.page))].sort()
}

export async function getVideosByPage(page: string): Promise<Video[]> {
  return (await getVideos()).filter(v => v.page === page)
}
