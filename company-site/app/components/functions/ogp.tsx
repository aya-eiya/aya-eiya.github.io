'use client'

import { useParams } from 'next/navigation'
import { ReactElement } from 'react'
import { isPageName, getTitles } from '../../domains/pages'
import { useLanguage } from '../../contexts/LanguageContext'
import { staticFiles } from '../../domains/staticFiles'

const descriptions = {
  ja: '品川区にて戸建シェアハウスの運営を行うAY合同会社のホームページです。ITエンジニア向けを中心としたコンセプトシェアハウスを運営しており、起業家やITエンジニア、海外移住者の一時帰国時の滞在に人気の物件となっております',
  en: 'Welcome to AY LLC, operating residential share houses in Shinagawa, Tokyo. We manage concept share houses focused on IT engineers, which are popular among entrepreneurs and tech professionals.',
}

export default function Ogp(): ReactElement {
  const { lang } = useLanguage()
  const { page: _p } = useParams()
  const titles = getTitles(lang)

  const page =
    typeof _p === 'string' && isPageName(_p) && _p !== 'home' ? _p : ''

  return (
    <>
      <meta property="og:url" content={`https://www.aya-eiya.work/${page}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titles.home} />
      <meta property="og:site_name" content={titles.home} />
      <meta property="og:description" content={descriptions[lang]} />
      <meta
        property="og:image"
        content={`https://www.aya-eiya.work/${staticFiles.find((f) => f === 'img/house_ogp.png')}`}
      />
    </>
  )
}
