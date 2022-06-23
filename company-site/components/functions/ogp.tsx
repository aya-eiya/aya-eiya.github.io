import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { isPageName, titles } from '../../domains/pages'

export default function Ogp(): ReactElement {
  const { query } = useRouter()
  const { page: _p } = query

  const page =
    typeof _p === 'string' && isPageName(_p) && _p !== 'home' ? _p : ''

  return (
    <Head>
      <meta property="og:url" content={`https://www.aya-eiya.work/${page}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titles.home} />
      <meta property="og:site_name" content={titles.home} />
      <meta
        property="og:description"
        content="戸建シェアハウス、レンタルスペースの運営を行うAY合同会社のホームページです。ITエンジニア向けを中心としたコンセプトシェアハウスを運営しており、起業家やITエンジニアに人気の物件となっております。"
      />
      <meta
        property="og:image"
        content={`https://www.aya-eiya.work/img/house_ogp.png`}
      />
    </Head>
  )
}
