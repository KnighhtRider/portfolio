import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Maitri Vatsh | Social Media Manager & Digital Marketer",
  description:
    "Social Media Manager and Digital Marketer specializing in creating scroll-stopping strategies, content, and growth for brands.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
