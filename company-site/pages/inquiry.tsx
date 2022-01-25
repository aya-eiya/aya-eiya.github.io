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
          <div className="grid md:grid-cols-6 w-1/2 gap-2">
            <div className="md:col-span-2">Twitter:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://twitter.com/hatano_ay">
                <a target="_blank">
                  @hatano_ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
            <div className="md:col-span-2">Facebook:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.facebook.com/hatano.ay">
                <a target="_blank" className="break-words">
                  https://www.facebook.com/hatano.ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
            <div className="md:col-span-2">Instagram:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.instagram.com/hatano_ay/">
                <a target="_blank">
                  @hatano_ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
