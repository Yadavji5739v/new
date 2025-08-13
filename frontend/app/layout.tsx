"use client"
// Layout restored with all original providers and components

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-provider"
import { SessionProvider } from "next-auth/react"
import { AuthProvider } from "@/lib/auth-provider"
import { SnackbarProvider } from "notistack"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import MobileRedirect from "@/components/layout/mobile-redirect"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <SessionProvider>
              <AuthProvider>
                <SnackbarProvider
                  maxSnack={3}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  autoHideDuration={2000}
                  preventDuplicate
                >
                  {/* Mobile Redirect Banner - Temporarily disabled */}
                  {/* <MobileRedirect /> */}
                  
                  <Header />
                  {children}
                  <Footer />
                  <Toaster />
                </SnackbarProvider>
              </AuthProvider>
            </SessionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}