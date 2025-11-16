'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: 'AY合同会社について',
    description1:
      '受託開発事業として、高品質なソフトウェア開発サービスを提供しています',
    description2:
      '20年以上のキャリアを持つ弊社代表がウェブアプリケーション、モバイルアプリケーション、システムインテグレーション、AI・機械学習ソリューションなどに対応いたします',
    description3:
      '開発プロセスに関するコンサルや、組織づくりのアドバイス、技術顧問などもご相談いただけます',
  },
  en: {
    title: 'About AY.LLC.',
    description1:
      'We provide high-quality software development services as a contract development business',
    description2:
      'Our CEO, with over 20 years of development experience, handles web applications, mobile applications, system integration, and AI/machine learning solutions',
    description3:
      'We also offer consulting on development processes, organizational development advice, and technical advisory services',
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
            <p className="mb-2">{t.description3}</p>
          </div>
        </div>
      </div>
    </>
  )
}
