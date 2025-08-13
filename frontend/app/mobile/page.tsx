"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-provider"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Film, Vote, Upload, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
          {/* Mobile Content */}
          <main className="px-2 py-4 relative max-w-sm mx-auto">
            {/* NEW MOBILE DESIGN INDICATOR */}
            <div className="bg-green-600/90 backdrop-blur-sm text-white text-center py-3 mb-6 rounded-lg border border-green-400/50 max-w-xs mx-auto">
              <h2 className="text-lg font-bold">🎉 NEW MOBILE DESIGN LOADED! 🎉</h2>
              <p className="text-xs">This is the separate mobile page at /mobile</p>
            </div>

            {/* Hero Section - Mobile Optimized */}
            <section className="text-center mb-8">
              <div className="mb-6">
                <Image 
                  src="/Q_logo.png" 
                  alt="Q Logo" 
                  width={60}
                  height={60}
                  className="w-15 h-15 mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  Discover and vote
                </h1>
                <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                  Discover and vote for the most innovative films from around the world
                </p>
              </div>
              
              {/* CTA Buttons - Full width on mobile */}
              <div className="space-y-3">
                <Button className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-black py-3 text-base font-bold shadow-lg">
                  Submit Your Film
                </Button>
                <Button className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white py-3 text-base font-bold shadow-lg">
                  Connect Wallet
                </Button>
              </div>
            </section>

            {/* Quantum Vision Section */}
            <section className="mb-8 text-center">
              <h2 className="text-xl font-bold mb-3 text-white">
                Quantum Vision Filmfest
              </h2>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                Experience the future of filmmaking where creativity meets technology.
              </p>
              
              {/* CTA Buttons - Stacked */}
              <div className="space-y-3">
                <Button className="w-full max-w-xs bg-green-500 hover:bg-green-600 text-black py-3 shadow-lg">
                  Submit Film
                </Button>
                <Button className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white py-3 shadow-lg">
                  Connect Wallet
                </Button>
                <Button className="w-full max-w-xs bg-purple-500 hover:bg-purple-600 text-white py-3 shadow-lg">
                  Presale Info
                </Button>
              </div>
            </section>

            {/* Film Categories - 2 per row */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-6 text-center text-white">
                Film Categories
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🎬", title: "Narrative", desc: "Classic storytelling" },
                  { icon: "📹", title: "Documentary", desc: "Truth unfiltered" },
                  { icon: "🎨", title: "Animation", desc: "No limits" },
                  { icon: "🔬", title: "Experimental", desc: "Break rules" },
                  { icon: "🌍", title: "Dystopian", desc: "Future chaos" },
                  { icon: "🤖", title: "AI & Identity", desc: "Machine dreams" }
                ].map((category, index) => (
                  <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-700/50 shadow-lg">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gray-700/80 rounded-full flex items-center justify-center">
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xs font-semibold text-white mb-1">{category.title}</h3>
                    <p className="text-xs text-gray-200">{category.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Submit Requirements - Stacked */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-6 text-center text-white">
                Submit Your Entry
              </h2>
              <div className="space-y-3">
                {[
                  { icon: "⏱️", title: "Max. 5 Minutes", subtitle: "±15s", desc: ".mp4, 720p" },
                  { icon: "📖", title: "Storyline", subtitle: "(PDF)", desc: "Max. 2 pages" },
                  { icon: "📝", title: "Script Draft", subtitle: "(PDF)", desc: "4 parts" }
                ].map((req, index) => (
                  <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-700/50 shadow-lg max-w-xs mx-auto">
                    <div className="w-10 h-10 mx-auto mb-2 bg-gray-700/80 rounded-full flex items-center justify-center">
                      <span className="text-xl">{req.icon}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1">{req.title}</h3>
                    <p className="text-gray-200 mb-1 text-xs">{req.subtitle}</p>
                    <p className="text-xs text-gray-300">{req.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Vote for Films - 2 per row */}
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-6 text-center text-white">
                Vote for Films
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "The Future is Now", desc: "Sci-fi masterpiece" },
                  { title: "Earth's Last Hope", desc: "Environmental doc" },
                  { title: "Digital Dreams", desc: "Animated adventure" },
                  { title: "Breaking Boundaries", desc: "Experimental film" }
                ].map((film, index) => (
                  <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 shadow-lg">
                    <div className="aspect-video bg-gray-700/80 flex items-center justify-center">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs font-semibold text-white mb-1">{film.title}</h3>
                      <p className="text-xs text-gray-200">{film.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional content to fill the scroll height */}
            <section className="mb-8 text-center">
              <h2 className="text-xl font-bold mb-3 text-white">
                Join Our Community
              </h2>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                Connect with fellow filmmakers and film enthusiasts from around the world.
              </p>
              
              <div className="space-y-3">
                <Button className="w-full max-w-xs bg-indigo-500 hover:bg-indigo-600 text-white py-3 shadow-lg">
                  Join Discord
                </Button>
                <Button className="w-full max-w-xs bg-pink-500 hover:bg-pink-600 text-white py-3 shadow-lg">
                  Follow on Twitter
                </Button>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="mb-8 text-center">
              <h2 className="text-xl font-bold mb-3 text-white">
                Ready to Make History?
              </h2>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                Submit your film today and be part of the future of cinema.
              </p>
              
              <Button className="w-full max-w-xs bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-4 text-lg font-bold shadow-lg">
                Start Your Journey
              </Button>
            </section>
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
