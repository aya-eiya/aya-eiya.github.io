'use client'

import { ReactElement } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { texts } from './types'
import { staticFiles } from '../../../domains/staticFiles'

const discordQRImages = {
  small: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/s')
  ),
  medium: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/m')
  ),
  large: staticFiles.find((path) =>
    path.startsWith('img/contacts/discord_qr/l')
  ),
}

export default function Conditions(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <div className="my-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">{t.conditions.title}</h2>
        <p className="text-lg mb-8">{t.conditions.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.conditions.list.map((condition, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{condition.title}</h3>
              <p className="text-gray-700">{condition.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">{t.contact.description}</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <div>
              {discordQRImages.small && (
                <img
                  src={`/${discordQRImages.small}`}
                  alt="Discord QR Code"
                  className="w-32 h-32 block sm:hidden"
                />
              )}
              {discordQRImages.medium && (
                <img
                  src={`/${discordQRImages.medium}`}
                  alt="Discord QR Code"
                  className="w-40 h-40 hidden sm:block md:hidden"
                />
              )}
              {discordQRImages.large && (
                <img
                  src={`/${discordQRImages.large}`}
                  alt="Discord QR Code"
                  className="w-48 h-48 hidden md:block"
                />
              )}
            </div>
            <a
              href="https://discord.gg/your-invite-link"
              target="_blank"
              className="text-brand-base hover:text-brand-bright inline-flex items-center"
            >
              Discord
              <span
                title="外部リンク"
                className="inline-block align-sub bg-[url(/img/icons/link.svg)] bg-no-repeat w-3 h-3 ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
