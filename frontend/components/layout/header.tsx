"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-provider";
import { cn } from "@/lib/utils";
import { Menu, X, Wallet, User, ChevronDown } from "lucide-react";
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
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <Image
                src="/Q_logo.png"
                alt="Q Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-8">
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

            {/* Right side - Auth and Language */}
            <div className="flex items-center space-x-6">
              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
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

              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <Image
              src="/Q_logo.png"
              alt="Q Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-8">
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

          {/* Right side - Auth and Language */}
          <div className="flex items-center space-x-6">
            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
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

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
