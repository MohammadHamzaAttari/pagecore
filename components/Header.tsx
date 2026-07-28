import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">PageCore</Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/posts" className="hover:text-blue-600 transition-colors">Posts</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
        </div>
      </nav>
    </header>
  )
}
