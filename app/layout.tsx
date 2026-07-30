import type { Metadata } from "next"
import { Orbitron, DM_Sans } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "PageCore - Deep Space Explained",
  description: "In-depth coverage of humanity's most ambitious space missions — from the lunar south pole to the asteroid belt.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${dmSans.variable}`}>
      <Script
        src="https://quge5.com/88/tag.min.js"
        data-zone="264831"
        data-cfasync="false"
        strategy="afterInteractive"
      />
      <body className="font-body bg-[#050510] text-slate-100 antialiased min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}