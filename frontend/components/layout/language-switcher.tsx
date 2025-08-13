"use client"

import { useState } from "react"
import { Check, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/lib/language-provider"

export default function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-white hover:text-blue-300 hover:bg-transparent">
          <Globe className="h-4 w-4" />
          <span className="uppercase">{language}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code)
              setOpen(false)
            }}
            className="text-white hover:bg-gray-700 focus:bg-gray-700"
          >
            <span className="flex items-center gap-2">
              {language === lang.code && <Check className="h-4 w-4 text-blue-400" />}
              <span className={language !== lang.code ? "pl-6" : ""}>{lang.name}</span>
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
