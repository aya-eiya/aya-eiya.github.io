'use client'

import { ReactElement } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { texts } from './types'

export default function Examples(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-6">{t.examples.title}</h2>
      <p className="text-lg mb-8">{t.examples.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.examples.list.map((example, index) => (
          <div
            key={index}
            className={
              example.image
                ? 'bg-white rounded-lg shadow-lg overflow-hidden'
                : ''
            }
          >
            {example.image && (
              <img
                src={`/${example.image}`}
                alt={example.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className={example.image ? 'p-6' : 'mb-8'}>
              <h3 className="text-2xl font-semibold mb-4">{example.title}</h3>
              <p className="text-gray-700">{example.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
