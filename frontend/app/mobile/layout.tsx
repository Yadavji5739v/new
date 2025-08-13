"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { LanguageProvider } from "@/lib/language-provider"

const inter = Inter({ subsets: ["latin"] })

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
