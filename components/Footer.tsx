import Link from "next/link"
import { Satellite, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#030308] text-slate-500 mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/80 to-blue-600/80 p-[1px]">
                <div className="w-full h-full bg-[#030308] rounded-[6px] flex items-center justify-center">
                  <Satellite className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-lg tracking-wider text-white">
                PAGE<span className="text-cyan-400">CORE</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              In-depth coverage of humanity&apos;s most ambitious space missions — from the lunar south pole to the metal heart of the asteroid belt.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/posts" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  All Briefings <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About PageCore</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/posts/psyche-mars-flyby" className="hover:text-cyan-400 transition-colors">Psyche Mars Flyby</Link>
              </li>
              <li>
                <Link href="/posts/china-africa-moon-balls" className="hover:text-cyan-400 transition-colors">Africa2Moon BALLS</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} PageCore. All rights reserved.</p>
          <span>Deep Space Coverage</span>
        </div>
      </div>
    </footer>
  )
}