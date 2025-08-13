"use client"

import { Suspense } from "react"
import dynamic from 'next/dynamic'

// Use dynamic imports with no SSR to avoid document/window errors
const Hero = dynamic(() => import("../components/home/hero"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})
const NewGalaxyBackground = dynamic(() => import("../components/home/new-galaxy-background"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})
const BgSection = dynamic(() => import("../components/home/bg-section"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />
      <NewGalaxyBackground />
      <BgSection />
    </main>
  )
}
