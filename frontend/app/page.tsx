"use client"

import { Suspense, useState, useEffect } from "react"
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { Smartphone } from "lucide-react"

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
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      
      // Automatically redirect mobile users to mobile page
      if (mobile && !isRedirecting) {
        setIsRedirecting(true)
        router.push('/mobile')
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [router, isRedirecting])

  // Show loading while redirecting on mobile
  if (isMobile && isRedirecting) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <Smartphone className="w-16 h-16 mx-auto mb-4 text-blue-400 animate-pulse" />
          <h2 className="text-xl font-bold mb-2">Redirecting to Mobile View</h2>
          <p className="text-gray-400">Please wait...</p>
        </div>
      </div>
    )
  }

  // Desktop view - unchanged
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />
      <NewGalaxyBackground />
      <BgSection />
    </main>
  )
}
