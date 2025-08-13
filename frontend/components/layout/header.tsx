"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-provider";
import { cn } from "@/lib/utils";
import { Menu, X, Wallet, User, ChevronDown, Search } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import LanguageSwitcher from "@/components/layout/language-switcher";
import Image from "next/image";

export default function Header() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
                  <div className="flex items-center justify-between">
            {/* Mobile: Logo centered, Desktop: Logo left */}
            <div className="flex-1 md:flex-none">
              <Link href="/" className="flex items-center justify-center md:justify-start space-x-4 group">
            <Image
              src="/Q_logo.png"
              alt="Q Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>
            </div>

          {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
                                                             <Link 
                   href="/" 
                   className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                 >
                   {t("nav.home")}
                 </Link>
                 <Link 
                   href="/about" 
                   className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                 >
                   About
                 </Link>
                 <Link 
                   href="/categories" 
                   className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                 >
                   Categories
                 </Link>
                 <Link 
                   href="/upload" 
                   className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                 >
                   {t("nav.submit")}
                 </Link>
                 <Link 
                   href="/videos" 
                   className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
                 >
                   {t("nav.vote")}
                 </Link>
          </nav>

            {/* Right side - Auth, Language, Search, and Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:space-x-6 flex-1 justify-end">
              {/* Desktop Auth Buttons - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-4">
                {session ? (
                  <div className="text-white">
                    Welcome, {session.user?.name || 'User'}
                  </div>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="text-white hover:text-blue-300">
                      Login
                    </Button>
                    <Button variant="default" size="sm">
                      Register
                </Button>
                  </>
                )}
              </div>

              {/* Desktop Language Switcher - Hidden on mobile */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* Search Icon - Visible on mobile and desktop */}
                <Button
                  variant="ghost"
                  size="sm"
                className="text-white hover:text-blue-300 p-2"
                >
                <Search className="w-5 h-5" />
                </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-blue-300 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4 pt-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home")}
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/categories" 
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  href="/upload" 
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.submit")}
                </Link>
                <Link 
                  href="/videos" 
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.vote")}
                </Link>
              </nav>

              {/* Mobile Auth and Language */}
              <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
                {/* Mobile Auth Buttons */}
                <div className="flex flex-col space-y-3">
                  {session ? (
                    <div className="text-white text-lg text-center">
                      Welcome, {session.user?.name || 'User'}
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3">
                      <Button variant="ghost" size="sm" className="text-white hover:text-blue-300 justify-center w-full">
                        Login
                      </Button>
                      <Button variant="default" size="sm" className="justify-center w-full">
                        Register
                      </Button>
                    </div>
                  )}
                </div>

                {/* Mobile Language Switcher */}
                <div className="pt-2 flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
          {/* Mobile: Logo centered, Desktop: Logo left */}
          <div className="flex-1 md:flex-none">
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-4 group">
            <Image
              src="/Q_logo.png"
              alt="Q Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>
          </div>

                    {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              <Link 
                href="/" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
              >
                {t("nav.home")}
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
              >
                About
              </Link>
              <Link 
                href="/categories" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
              >
                Categories
              </Link>
              <Link 
                href="/upload" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
              >
                {t("nav.submit")}
              </Link>
              <Link 
                href="/videos" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-xl font-medium"
              >
                {t("nav.vote")}
              </Link>
          </nav>

          {/* Right side - Auth, Language, Search, and Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:space-x-6 flex-1 justify-end">
            {/* Desktop Auth Buttons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
            {session ? (
                <div className="text-white">
                  Welcome, {session.user?.name || 'User'}
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="text-white hover:text-blue-300">
                    Login
                  </Button>
                  <Button variant="default" size="sm">
                    Register
                </Button>
                </>
              )}
            </div>

            {/* Desktop Language Switcher - Hidden on mobile */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Search Icon - Visible on mobile and desktop */}
                <Button
                  variant="ghost"
                  size="sm"
              className="text-white hover:text-blue-300 p-2"
                >
              <Search className="w-5 h-5" />
                </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-blue-300 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/categories" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
              >
                Categories
              </Link>
              <Link 
                href="/upload" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.submit")}
              </Link>
              <Link 
                href="/videos" 
                className="text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.vote")}
              </Link>
            </nav>

            {/* Mobile Auth and Language */}
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-800">
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-3">
                {session ? (
                  <div className="text-white text-lg text-center">
                    Welcome, {session.user?.name || 'User'}
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Button variant="ghost" size="sm" className="text-white hover:text-blue-300 justify-center w-full">
                      Login
                    </Button>
                    <Button variant="default" size="sm" className="justify-center w-full">
                      Register
                    </Button>
                  </div>
                )}
              </div>

              {/* Mobile Language Switcher */}
              <div className="pt-2 flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
