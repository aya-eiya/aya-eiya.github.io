'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: 'お問い合わせ',
    message: 'お問い合わせは、Twitter DM、Facebookページからお願いいたします',
    twitter: '@hatano_ay',
    facebook: 'https://www.facebook.com/hatano.ay',
    instagram: '@hatano_ay',
    externalLink: '外部リンク',
  },
  en: {
    title: 'Contact',
    message: 'Please contact us via Twitter DM or our Facebook page',
    twitter: '@hatano_ay',
    facebook: 'https://www.facebook.com/hatano.ay',
    instagram: '@hatano_ay',
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
          <p className="mb-4">{t.message}</p>
          <div className="grid md:grid-cols-6 w-1/2 gap-2">
            <div className="md:col-span-2">Twitter:</div>
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
          </div>
        </div>
      </div>
    </>
  )
}
