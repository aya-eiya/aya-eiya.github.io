import Head from 'next/head'
import { ReactElement } from 'react'

export default function Meta(): ReactElement {
  return (
    <Head>
      <meta
        name="description"
        content="戸建シェアハウス、レンタルスペースの運営を行うAY合同会社のホームページです。ITエンジニア向けを中心としたコンセプトシェアハウスを運営しており、起業家やITエンジニアに人気の物件となっております。"
      />
      <link rel="canonical" href="https://www.aya-eiya.work/" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="シェアハウス,レンタルスペース,ギークハウス,コワーキング,空き家活用,東京シェアハウス,パーティルーム,撮影スタジオ,share house,rental space,co-working,sharing economy,party room,rental studio"
      />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}
