import Link from "next/link"
import { Sparkles, Github, Twitter, Facebook, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070714] text-slate-400 mt-20 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-zinc-950 rounded-[6px] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg tracking-wider text-white">
                PAGE<span className="text-cyan-400">CORE</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Deep dives, technical breakdowns, and comprehensive analysis of viral Facebook videos across our media pages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-slate-200 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  All Explanations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  About PageCore
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-widest text-slate-200 font-semibold mb-4">Categories</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/posts?category=Space%20Exploration" className="hover:text-cyan-400 transition-colors">
                  Space Exploration
                </Link>
              </li>
              <li>
                <Link href="/posts?category=Analysis" className="hover:text-cyan-400 transition-colors">
                  Algorithm & Analysis
                </Link>
              </li>
              <li>
                <Link href="/posts?category=Strategy" className="hover:text-cyan-400 transition-colors">
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} PageCore. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Facebook Video Deep Dives &amp; Publishing</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
