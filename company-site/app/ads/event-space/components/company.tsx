'use client'

import { ReactElement } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { texts } from './types'

export default function Company(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-6">{t.company.title}</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            {t.company.name}{' '}
            <span className="text-sm text-gray-600">({t.company.nameEn})</span>
          </h3>
          <p className="mt-2">{t.company.representative}</p>
        </div>
        <p className="text-gray-700">{t.company.description}</p>
      </div>
    </div>
  )
}
