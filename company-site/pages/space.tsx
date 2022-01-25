import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>AY HOUSE | レンタルスペース</title>
      </Head>
      <Layout>
        <HeadLine background="/img/head01.png">レンタルスペース</HeadLine>
        <div className="w-9/12 mx-auto mt-10">
          <p className="mb-2">
            レンタルスペースとしてご利用いただける部屋をご用意しております。
          </p>
          <p className="mb-2">宴会・料理教室・学習会・WEB会議のほか</p>

          <p className="mb-2">
            各種広告用写真・ミュージンクビデオ・配信用動画の撮影などにもご利用いただけます。
          </p>

          <p className="mb-2">
            ご予約は
            <a
              href="https://www.instabase.jp/owners/8543911892"
              target={'_blank'}
            >
              こちら
            </a>
            からよろしくお願いします。
          </p>
          <div className="mb-2">
            <a
              href="https://www.instabase.jp/owners/8543911892"
              target={'_blank'}
            >
              <dl className="border rounded-md p-4">
                <dt className="mb-2">予約サイト</dt>
                <dd className="pl-4 mb-4">インスタベース</dd>
                <dt className="mb-2">URL</dt>
                <dd className="pl-4 mb-4 break-words">
                  https://www.instabase.jp/owners/8543911892
                </dd>
              </dl>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}
