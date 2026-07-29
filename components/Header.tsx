"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Satellite, BookOpen, Info, Sparkles } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home", icon: Sparkles },
    { href: "/posts", label: "Missions", icon: Satellite },
    { href: "/about", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#050510]/85 backdrop-blur-xl border-b border-white/[0.05]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/80 to-blue-600/80 p-[1px] shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/20 transition-shadow">
            <div className="w-full h-full bg-[#050510] rounded-[10px] flex items-center justify-center">
              <Satellite className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-white">
            PAGE<span className="text-cyan-400">CORE</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.06]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-heading font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/20 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/posts"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-heading font-semibold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/20 transition-all"
          >
            <BookOpen className="w-3 h-3" />
            All Briefings
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.05] bg-[#050510]/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-heading transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/10 to-blue-600/10 text-cyan-300 border border-cyan-500/20"
                    : "text-slate-400 hover:bg-white/[0.04]"
                }`}
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}