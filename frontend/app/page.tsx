"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button } from "../components/ui/button"
import { Smartphone, X } from "lucide-react"

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
  const [showMobileBanner, setShowMobileBanner] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setShowMobileBanner(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Mobile Redirect Banner */}
      {showMobileBanner && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white p-3 shadow-lg">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm font-medium">
                Get the best mobile experience
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Link href="/mobile">
                <Button size="sm" variant="secondary" className="text-blue-600">
                  Go Mobile
                </Button>
              </Link>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowMobileBanner(false)}
                className="text-white hover:text-white/80 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
        <Hero />
        <NewGalaxyBackground />
        <BgSection />
      </main>
    </>
  )
}
