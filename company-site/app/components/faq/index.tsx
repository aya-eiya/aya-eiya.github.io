import { ReactElement } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import { texts } from '../house/texts'

export function FAQ(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <h4 className="text-lg my-4">{t.faq.title}</h4>
      <div className="space-y-4">
        {t.faq.items.map((item, index) => (
          <details
            key={index}
            className="group bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <summary className="flex justify-between items-center cursor-pointer px-4 py-3 font-medium">
              <span className="pr-6">{item.q}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="px-4 pb-4 text-gray-700">{item.a}</div>
          </details>
        ))}
      </div>
    </>
  )
}
