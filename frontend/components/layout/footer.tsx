"use client";

import type React from "react";

import Link from "next/link";
import { Film } from "lucide-react";
import { useLanguage } from "@/lib/language-provider";
import Image from "next/image";

export default function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Extract the section ID from the href
    const sectionId = href.includes("#") ? href.split("#")[1] : null;

    if (sectionId && typeof document !== "undefined") {
      // Find the section element and scroll to it
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else if (typeof window !== "undefined") {
      // If it's the home link, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== "undefined") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative w-full border-t overflow-hidden min-h-[400px] md:h-[632px]">
      {/* Footer Background */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/footer-bg.png" 
          alt="Footer background" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container py-8 md:py-10 px-4 md:px-0 relative z-10 min-h-[400px] md:h-[632px] flex flex-col justify-center">
        {/* Legal Information Section */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-white">{t("legal.title")}</h2>
          <p className="text-base md:text-xl text-white/80 mb-6 md:mb-8">{t("legal.subtitle")}</p>

          {/* Legal Links - Stacked on mobile */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 justify-center">
            <Link
              href=""
              className="text-sm md:text-lg text-white/80 hover:text-white underline underline-offset-4 transition-colors py-2 md:py-0"
            >
              {t("legal.terms")}
            </Link>
            <Link
              href=""
              className="text-sm md:text-lg text-white/80 hover:text-white underline underline-offset-4 transition-colors py-2 md:py-0"
            >
              {t("legal.privacy")}
            </Link>
            <Link
              href=""
              className="text-sm md:text-lg text-white/80 hover:text-white underline underline-offset-4 transition-colors py-2 md:py-0"
            >
              {t("legal.cookies")}
            </Link>
            <Link
              href=""
              className="text-sm md:text-lg text-white/80 hover:text-white underline underline-offset-4 transition-colors py-2 md:py-0"
            >
              {t("legal.gdpr")}
            </Link>
          </div>
        </div>

        {/* Footer Content - Stacked on mobile */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-3 md:gap-2 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2"
              onClick={(e) => handleNavClick(e, "/")}
            >
              <Image
                src="/Q_logo.png"
                alt="Q Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg md:text-xl font-bold text-white">Quantum Vision</span>
            </Link>
            <p className="text-sm md:text-base text-white/70 max-w-xs mx-auto md:mx-0">
              Discover and vote for the most innovative films from around the world
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 md:gap-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Quick Links</h3>
            <Link
              href="/about"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              About Us
            </Link>
            <Link
              href="/categories"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Categories
            </Link>
            <Link
              href="/upload"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Submit Film
            </Link>
            <Link
              href="/videos"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Vote Now
            </Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3 md:gap-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Support</h3>
            <Link
              href="/help"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Help Center
            </Link>
            <Link
              href="/contact"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              FAQ
            </Link>
            <Link
              href="/guidelines"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Guidelines
            </Link>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col gap-3 md:gap-2 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Connect</h3>
            <Link
              href="/twitter"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Twitter
            </Link>
            <Link
              href="/discord"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Discord
            </Link>
            <Link
              href="/telegram"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Telegram
            </Link>
            <Link
              href="/newsletter"
              className="text-sm md:text-base text-white/70 hover:text-white transition-colors py-1"
            >
              Newsletter
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
          <p className="text-sm md:text-base text-white/60">
            © {currentYear} Quantum Vision Filmfest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
