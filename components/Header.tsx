"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Sparkles, Menu, X, Video, BookOpen, Info } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home", icon: Sparkles },
    { href: "/posts", label: "Explanations", icon: Video },
    { href: "/about", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a1a]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-cyan-950/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-wider bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent">
            PAGE<span className="text-cyan-400">CORE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/posts?featured=true"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:bg-cyan-500/20 transition-all shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Featured
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0a1a]/95 backdrop-blur-2xl px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-white/5"
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
