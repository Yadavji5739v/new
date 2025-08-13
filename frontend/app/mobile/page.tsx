"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Film, Vote, Upload, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import dynamic from 'next/dynamic'

// Use dynamic imports with no SSR to avoid document/window errors
const Hero = dynamic(() => import("@/components/home/hero"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})
const NewGalaxyBackground = dynamic(() => import("@/components/home/new-galaxy-background"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})
const BgSection = dynamic(() => import("@/components/home/bg-section"), { 
  ssr: false,
  loading: () => <div className="flex items-center justify-center min-h-screen">Loading...</div>
})

export default function MobilePage() {
  const { t, language, setLanguage, languages } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image with Content Overlay */}
      <div className="relative w-full">
        {/* Background Image */}
        <Image 
          src="../../mobile.png" 
          alt="Mobile Background" 
          width={1920}
          height={9254}
          className="w-full h-auto object-contain"
          priority
        />
        
        {/* Content Overlay - Positioned on top of the image */}
        <div className="absolute inset-0 top-0 left-0 right-0 z-10">
          {/* Mobile Header */}
          <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo - Centered */}
              <div className="flex-1 flex justify-center">
                <Link href="/mobile" className="flex items-center space-x-2">
                  <Image
                    src="/Q_logo.png"
                    alt="Q Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <span className="text-lg font-bold text-white">Quantum</span>
                </Link>
              </div>

              {/* Right side - Search and Menu */}
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm" className="text-white p-2">
                  <Search className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white p-2"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="mt-4 pb-4 border-t border-gray-800 bg-black/90 backdrop-blur-sm">
                <nav className="flex flex-col space-y-4 pt-4">
                  <Link 
                    href="/mobile" 
                    className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("nav.home")}
                  </Link>
                  <Link 
                    href="/mobile#about" 
                    className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/mobile#categories" 
                    className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categories
                  </Link>
                  <Link 
                    href="/mobile#submit" 
                    className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("nav.submit")}
                  </Link>
                  <Link 
                    href="/mobile#vote" 
                    className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("nav.vote")}
                  </Link>
                </nav>

                {/* Mobile Auth and Language */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
                  <div className="flex flex-col space-y-3">
                    <Button variant="ghost" size="sm" className="text-white hover:text-blue-300 justify-center w-full">
                      Login
                    </Button>
                    <Button variant="default" size="sm" className="justify-center w-full">
                      Register
                    </Button>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="flex justify-center space-x-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant={language === lang.code ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setLanguage(lang.code)}
                        className={`px-3 py-1 text-sm ${
                          language === lang.code 
                            ? "bg-blue-600 text-white" 
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {lang.code.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Desktop Content Components - Mobile Optimized */}
          <main className="relative">
            {/* Hero Component */}
            <div className="mobile-hero-optimized">
              <Hero />
            </div>

            {/* New Galaxy Background Component */}
            <div className="mobile-galaxy-optimized">
              <NewGalaxyBackground />
            </div>

            {/* Bg Section Component */}
            <div className="mobile-bg-optimized">
              <BgSection />
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800 px-4 py-2 z-50">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'home' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </button>
          
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'categories' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Film className="w-5 h-5 mb-1" />
            <span className="text-xs">Categories</span>
          </button>
          
          <button
            onClick={() => setActiveTab('submit')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'submit' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Upload className="w-5 h-5 mb-1" />
            <span className="text-xs">Submit</span>
          </button>
          
          <button
            onClick={() => setActiveTab('vote')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'vote' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Vote className="w-5 h-5 mb-1" />
            <span className="text-xs">Vote</span>
          </button>
        </div>
      </nav>

      {/* Mobile Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm text-center py-8 px-4 mt-12 border-t border-gray-800">
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="text-sm text-gray-300 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-gray-300 hover:text-white">
              Cookies
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © 2024 Quantum Vision Filmfest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
