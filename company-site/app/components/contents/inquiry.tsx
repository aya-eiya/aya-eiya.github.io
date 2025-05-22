'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'
import { staticFiles } from '../../domains/staticFiles'

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

type Contact = {
  type: 'twitter' | 'facebook' | 'instagram' | 'line' | 'discord'
  label: string
  value: string
  url: string
  qr?: QrType
}

const contacts: Record<string, Contact[]> = {
  ja: [
    {
      type: 'twitter',
      label: 'X',
      value: '@hatano_ay',
      url: 'https://twitter.com/hatano_ay',
    },
    {
      type: 'facebook',
      label: 'Facebook',
      value: 'hatano.ay',
      url: 'https://www.facebook.com/hatano.ay',
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@hatano_ay',
      url: 'https://www.instagram.com/hatano_ay/',
      qr: 'instagram',
    },
    {
      type: 'discord',
      label: 'Discord',
      value: 'サーバーに参加',
      url: 'https://discord.gg/yAd8PEUwgh',
      qr: 'discord',
    },
    {
      type: 'line',
      label: '公式LINE',
      value: '@k6EW5Bt',
      url: 'https://lin.ee/k6EW5Bt',
      qr: 'line',
    },
  ],
  en: [
    {
      type: 'twitter',
      label: 'X',
      value: '@hatano_ay',
      url: 'https://twitter.com/hatano_ay',
    },
    {
      type: 'facebook',
      label: 'Facebook',
      value: 'hatano.ay',
      url: 'https://www.facebook.com/hatano.ay',
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@hatano_ay',
      url: 'https://www.instagram.com/hatano_ay/',
      qr: 'instagram',
    },
    {
      type: 'discord',
      label: 'Discord',
      value: 'Join Server',
      url: 'https://discord.gg/yAd8PEUwgh',
      qr: 'discord',
    },
    {
      type: 'line',
      label: 'Official LINE',
      value: '@k6EW5Bt',
      url: 'https://lin.ee/k6EW5Bt',
      qr: 'line',
    },
  ],
}

const texts = {
  ja: {
    title: 'お問い合わせ',
    message:
      'お問い合わせは、X DM、Facebook、Instagram、Discord、または公式LINEからお願いいたします',
    externalLink: '外部リンク',
  },
  en: {
    title: 'Contact',
    message:
      'Please contact us via X DM, Facebook, Instagram, Discord, or our official LINE account',
    externalLink: 'External Link',
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
          <div className="grid md:grid-cols-2 gap-8">
            {contacts[lang].map((contact) => (
              <div key={contact.type} className="flex flex-col">
                <div className="text-lg font-semibold mb-2">
                  {contact.label}:
                </div>
                <div className="flex flex-col gap-4">
                  {contact.url && (
                    <Link
                      href={contact.url}
                      target="_blank"
                      className="break-words"
                    >
                      {contact.value}
                      <span
                        title={t.externalLink}
                        className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                      />
                    </Link>
                  )}
                  {contact.qr && (
                    <picture>
                      <source
                        media="(min-width: 768px)"
                        srcSet={`/${getQrPath(contact.qr, 'm')}`}
                      />
                      <source
                        media="(min-width: 1024px)"
                        srcSet={`/${getQrPath(contact.qr, 'l')}`}
                      />
                      <img
                        src={`/${getQrPath(contact.qr, 's')}`}
                        alt={`${contact.label} QR Code`}
                        className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                      />
                    </picture>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
