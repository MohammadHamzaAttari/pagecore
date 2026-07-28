export default function VideoEmbed({ url, title }: { url: string; title: string }) {
  const isFacebook = url.includes("facebook.com") || url.includes("fb.watch")
  const embedUrl = isFacebook
    ? url.replace("/watch?v=", "/plugins/video.php?href=").replace("fb.watch", "www.facebook.com/watch")
    : url
  return (
    <div className="aspect-video bg-black rounded-xl overflow-hidden mb-8 shadow-lg">
      <iframe src={embedUrl} title={title} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen />
    </div>
  )
}
