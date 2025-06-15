'use client'

import { useLanguage } from '../../../contexts/LanguageContext'
import { texts } from './types'
import { ReactElement } from 'react'

export default function Concept(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <div className="my-8">
      <h1 className="text-4xl font-bold mb-6">{t.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg leading-relaxed">{t.description}</p>
      </div>
    </div>
  )
}
