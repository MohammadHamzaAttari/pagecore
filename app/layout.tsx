import type { Metadata } from "next"
import { Orbitron, DM_Sans } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" })

export const metadata: Metadata = {
  title: "PageCore - Facebook Video Explanations",
  description: "In-depth explanations of Facebook videos from all your pages",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${dmSans.variable}`}>
      <body className="font-body bg-black text-white antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}