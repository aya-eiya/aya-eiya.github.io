'use client'

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react'
import type { Lang } from '../domains/house'
import { usePathname } from 'next/navigation'

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}): ReactNode {
  const pathLang = usePathname().includes('/en') ? 'en' : undefined
  const paramLang =
    new URLSearchParams(globalThis.location?.search).get('lang') === 'en'
      ? 'en'
      : undefined
  const cookieLang =
    globalThis.document?.cookie
      ?.split('; ')
      ?.find((row) => row.startsWith('lang='))
      ?.split('=')[1] === 'en'
      ? 'en'
      : undefined
  const defaultLang = pathLang || paramLang || cookieLang || 'ja'
  const [lang, setLang] = useState<Lang>(defaultLang)
  useEffect(() => {
    // confirm lang is valid
    if (lang !== 'ja' && lang !== 'en') {
      console.error(`Invalid lang: ${lang}`)
      return
    }
    globalThis.document.cookie = `lang=${lang}; path=/; max-age=31536000`
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
