'use client'

import Link from 'next/link'
import { ReactElement, useState } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'
import { staticFiles } from '../../domains/staticFiles'
import { ImageModal } from '../imageModal'

type QrSize = 's' | 'm' | 'l'
type QrType = 'line' | 'instagram' | 'discord'
type QrPath = `img/contacts/${QrType}_qr/${QrSize}.png`

function getQrPath(type: QrType, size: QrSize): QrPath {
  const qrPath = staticFiles.find(
    (f) => f === `img/contacts/${type}_qr/${size}.png`
  ) as QrPath | undefined

  if (!qrPath) {
    throw new Error(`QR code image not found for type: ${type}, size: ${size}`)
  }
  return qrPath
}

type ContactType = 'twitter' | 'facebook' | 'instagram' | 'line' | 'discord'

type Contact = {
  type: ContactType
  url: string
  qr?: QrType
}

type ContactText = {
  label: string
  value: string
}

type ContactTexts = {
  [K in ContactType]: ContactText
}

type TextContent = {
  title: string
  message: string
  externalLink: string
  showQrCode: string
  contacts: ContactTexts
}

type Texts = {
  [lang: string]: TextContent
}

const contacts: Contact[] = [
  {
    type: 'twitter',
    url: 'https://twitter.com/hatano_ay',
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/hatano.ay',
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/hatano_ay/',
    qr: 'instagram',
  },
  {
    type: 'discord',
    url: 'https://discord.gg/yAd8PEUwgh',
    qr: 'discord',
  },
  {
    type: 'line',
    url: 'https://lin.ee/k6EW5Bt',
    qr: 'line',
  },
]

const texts: Texts = {
  ja: {
    title: 'お問い合わせ',
    message:
      'お問い合わせは、X DM、Facebook、Instagram、Discord、または公式LINEからお願いいたします',
    externalLink: '外部リンク',
    showQrCode: '{label}のQRコードを表示',
    contacts: {
      twitter: {
        label: 'X',
        value: '@hatano_ay',
      },
      facebook: {
        label: 'Facebook',
        value: 'hatano.ay',
      },
      instagram: {
        label: 'Instagram',
        value: '@hatano_ay',
      },
      discord: {
        label: 'Discord',
        value: 'サーバーに参加',
      },
      line: {
        label: '公式LINE',
        value: '@k6EW5Bt',
      },
    },
  },
  en: {
    title: 'Contact',
    message:
      'Please contact us via X DM, Facebook, Instagram, Discord, or our official LINE account',
    externalLink: 'External Link',
    showQrCode: 'Show {label} QR Code',
    contacts: {
      twitter: {
        label: 'X',
        value: '@hatano_ay',
      },
      facebook: {
        label: 'Facebook',
        value: 'hatano.ay',
      },
      instagram: {
        label: 'Instagram',
        value: '@hatano_ay',
      },
      discord: {
        label: 'Discord',
        value: 'Join Server',
      },
      line: {
        label: 'Official LINE',
        value: '@k6EW5Bt',
      },
    },
  },
}

export default function Inquiry(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="inquiry">{t.title}</HeadLine>
      <div className="mt-10 mx-auto">
        <div className="border rounded-lg p-4 mx-2 text-white bg-brand-light">
          <p className="mb-8">{t.message}</p>
          <div className="space-y-8">
            {/* QRコードなしの連絡先 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {contacts
                .filter((contact) => !contact.qr)
                .map((contact) => (
                  <div key={contact.type} className="flex flex-col">
                    <div className="text-lg font-semibold mb-2">
                      {t.contacts[contact.type].label}:
                    </div>
                    {contact.url && (
                      <Link
                        href={contact.url}
                        target="_blank"
                        className="break-words"
                      >
                        {t.contacts[contact.type].value}
                        <span
                          title={t.externalLink}
                          className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                        />
                      </Link>
                    )}
                  </div>
                ))}
            </div>

            {/* QRコードありの連絡先 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contacts
                .filter((contact) => contact.qr)
                .map((contact) => (
                  <div key={contact.type} className="flex flex-col">
                    <div className="text-lg font-semibold mb-2">
                      {t.contacts[contact.type].label}:
                    </div>
                    <div className="flex flex-col gap-4">
                      {contact.url && (
                        <Link
                          href={contact.url}
                          target="_blank"
                          className="break-words"
                        >
                          {t.contacts[contact.type].value}
                          <span
                            title={t.externalLink}
                            className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                          />
                        </Link>
                      )}
                      {contact.qr && (
                        <>
                          <div className="hidden md:block">
                            <picture>
                              <source
                                media="(min-width: 1024px)"
                                srcSet={`/${getQrPath(contact.qr, 'l')}`}
                              />
                              <img
                                src={`/${getQrPath(contact.qr, 'm')}`}
                                alt={`${t.contacts[contact.type].label} QR Code`}
                                className="w-32 h-32 lg:w-36 lg:h-36"
                              />
                            </picture>
                          </div>
                          <QRCodeButton
                            label={t.contacts[contact.type].label}
                            qrType={contact.qr}
                            t={t}
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

type QRCodeButtonProps = {
  label: string
  qrType: QrType
  t: TextContent
}

function QRCodeButton({ label, qrType, t }: QRCodeButtonProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="md:hidden bg-white text-brand-base px-4 py-2 rounded-lg font-medium hover:bg-gray-50"
      >
        {t.showQrCode.replace('{label}', label)}
      </button>
      <ImageModal
        images={[`/${getQrPath(qrType, 'l')}`]}
        alt={`${label} QR Code`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
