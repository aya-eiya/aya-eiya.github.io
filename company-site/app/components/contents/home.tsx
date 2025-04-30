'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: 'AY HOUSEについて',
    description1:
      '2021年に開始されたシェアハウスです。都内近郊中心に展開する予定です',
    description2:
      '代表はギークハウスで長らく管理人を経験してきましたが、新たなコンセプトシェアハウスとなる新ブランドとしてAY HOUSEを2021年08月にスタートしました',
    currentStatus: '現在、品川旗の台にシェアハウス1号店を運営しています',
    guide1: 'ご案内は',
    guide2: 'こちら',
    guide3: 'から',
  },
  en: {
    title: 'About AY HOUSE',
    description1:
      'AY HOUSE is a share house project started in 2021, with plans to expand primarily in and around Tokyo',
    description2:
      'Our CEO, who has extensive experience as a manager at Geek House, launched AY HOUSE in August 2021 as a new brand offering a fresh concept in share house living',
    currentStatus:
      'We currently operate our first share house in Hatanodai, Shinagawa',
    guide1: 'For more details, please check',
    guide2: 'here',
    guide3: '',
  },
}

export default function Home(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="home">{t.title}</HeadLine>
      <div className="mt-10 mx-auto">
        <div className="mx-2">
          <div className="mb-2">
            <p className="mb-2">{t.description1}</p>
            <p className="mb-2">{t.description2}</p>
          </div>
          <div className="mb-2">
            <p>{t.currentStatus}</p>
            <p>
              {t.guide1}&nbsp;
              <Link href="/house" className="font-bold underline">
                {t.guide2}
              </Link>
              &nbsp;
              {t.guide3}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
