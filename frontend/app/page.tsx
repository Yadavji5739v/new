"use client"

import { Suspense } from "react"
import dynamic from 'next/dynamic'
import Loading from "@/components/ui/loading"

// Use dynamic imports with no SSR to avoid document/window errors
const Hero = dynamic(() => import("@/components/home/hero"), { 
  ssr: false,
  loading: () => <Loading />
})
const NewGalaxyBackground = dynamic(() => import("@/components/home/new-galaxy-background"), { 
  ssr: false,
  loading: () => <Loading />
})
const BgSection = dynamic(() => import("@/components/home/bg-section"), { 
  ssr: false,
  loading: () => <Loading />
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
          Quantum Project
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover and vote for the most innovative reel videos around the world
        </p>
        <div className="space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-bold transition-colors">
            Submit Your Film
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold transition-colors">
            Connect Wallet
          </button>
        </div>
      </div>
    </main>
  )
}
