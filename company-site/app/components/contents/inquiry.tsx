'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: 'お問い合わせ',
    message:
      'お問い合わせは、X DM、Facebook、Instagram、または公式LINEからお願いいたします',
    twitter: '@hatano_ay',
    facebook: 'https://www.facebook.com/hatano.ay',
    instagram: '@hatano_ay',
    externalLink: '外部リンク',
    line: '公式LINE',
    lineQr: 'LINEのQRコード',
  },
  en: {
    title: 'Contact',
    message:
      'Please contact us via X DM, Facebook, Instagram, or our official LINE account',
    twitter: '@hatano_ay',
    facebook: 'https://www.facebook.com/hatano.ay',
    instagram: '@hatano_ay',
    externalLink: 'External Link',
    line: 'Official LINE',
    lineQr: 'LINE QR Code',
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
          <p className="mb-4">{t.message}</p>
          <div className="grid md:grid-cols-6 w-1/2 gap-2">
            <div className="md:col-span-2">X:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://twitter.com/hatano_ay" target="_blank">
                {t.twitter}
                <span
                  title={t.externalLink}
                  className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
            <div className="md:col-span-2">Facebook:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href={t.facebook} target="_blank" className="break-words">
                {t.facebook}
                <span
                  title={t.externalLink}
                  className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
            <div className="md:col-span-2">Instagram:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.instagram.com/hatano_ay/" target="_blank">
                {t.instagram}
                <span
                  title={t.externalLink}
                  className="inline-block align-sub bg-[url(/img/icons/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
            <div className="md:col-span-2">{t.line}:</div>
            <div className="md:col-span-4 pl-2 md:pl-0">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="/img/line_qr/m.png"
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet="/img/line_qr/l.png"
                />
                <img
                  src="/img/line_qr/s.png"
                  alt={t.lineQr}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
