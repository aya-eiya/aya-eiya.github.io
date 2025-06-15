'use client'

import { ReactElement } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { texts } from './types'

export default function Facilities(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold mb-6">{t.spaces.title}</h2>
      <p className="text-lg mb-8">{t.spaces.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.spaces.list.map((space, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="space-y-4 p-6">
              <h3 className="text-2xl font-semibold">{space.name}</h3>
              <p>{space.description}</p>
              <div className="grid grid-cols-1 gap-4">
                {space.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={`/${image}`}
                    alt={`${space.name} ${imgIndex + 1}`}
                    className="w-full rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
