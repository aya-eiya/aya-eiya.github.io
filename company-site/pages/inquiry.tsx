import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'

export default function Inquiry(): ReactElement {
  return (
    <>
      <Head>
        <title>AY HOUSE | お問い合わせ</title>
      </Head>
      <Layout>
        <HeadLine background="">お問い合わせ</HeadLine>
        <div className="w-9/12 mx-auto mt-4">
          <p className="mb-4">
            お問い合わせは、Twitter DM、Facebookページ
            <br />
            およびページ下部のチャットにて受け付けております。
          </p>
          <div className="grid grid-cols-6 w-1/2 gap-2">
            <div className="col-span-2">Twitter:</div>
            <div className="col-span-4 font-bold">
              <Link href="https://twitter.com/hatano_ay">
                <a target="_blank">@hatano_ay</a>
              </Link>
            </div>
            <div className="col-span-2">Facebook:</div>
            <div className="col-span-4 font-bold">
              <Link href="https://www.facebook.com/hatano.ay">
                <a target="_blank">https://www.facebook.com/hatano.ay</a>
              </Link>
            </div>
            <div className="col-span-2">Instagram:</div>
            <div className="col-span- font-bold">
              <Link href="https://www.instagram.com/hatano_ay/">
                <a target="_blank">@hatano_ay</a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
