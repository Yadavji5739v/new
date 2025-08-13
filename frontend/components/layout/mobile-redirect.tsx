"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Smartphone, X } from "lucide-react"
import Link from "next/link"

export default function MobileRedirect() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsVisible(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isVisible || !isMobile) return null

  return (
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
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-white/80 p-1"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
