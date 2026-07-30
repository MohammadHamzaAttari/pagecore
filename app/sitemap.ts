import type { MetadataRoute } from "next"
import { getVideos } from "@/lib/content"

const BASE_URL = "https://pagecore.vercel.app"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const videos = await getVideos()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/posts`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ]

  const articlePages: MetadataRoute.Sitemap = videos.map((v) => ({
    url: `${BASE_URL}/posts/${v.slug}`,
    lastModified: new Date(v.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}
