import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>AY HOUSE</title>
      </Head>
      <Layout>
        <HeadLine background="/img/head01.png">AY HOUSEについて</HeadLine>
        <div className="w-9/12 mx-auto mt-10">
          <div className="mb-2">
            <p className="mb-2">
              2021年に開始されたシェアハウスです。都内近郊中心に展開する予定です。
            </p>
            <p className="mb-2">
              代表はギークハウスで長らく管理人を経験してきましたが、新たなコンセプトシェアハウスとなる新ブランドとしてAY
              HOUSEをこの度スタートしました。
            </p>
          </div>
          <div className="mb-2">
            <p>現在、品川旗の台にシェアハウス１号店を運営しています。</p>
            <p>
              ご案内は
              <Link href="/house">
                <a className="font-bold underline">こちら</a>
              </Link>
              から。
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
