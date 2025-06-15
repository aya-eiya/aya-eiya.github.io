import { ReactElement } from 'react'
import Link from 'next/link'
import Concept from './components/concept'
import Facilities from './components/facilities'
import Examples from './components/examples'
import Conditions from './components/conditions'
import Company from './components/company'
import Head from 'next/head'

const metadata = {
  title: '旗の台シェアハウス | イベントスペース無償提供',
  description:
    '2025年10月までの期間限定で、東急池上線・大井町線 旗の台駅徒歩5分のシェアハウスにて、イベントスペースを無償提供しています。最大20名収容可能な2階イベントスペースと庭をご利用いただけます。',
}
export default function EventSpacePage(): ReactElement {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://wwww.aya-eiya.work/ads/event-space"
        />
        <meta property="og:image" content="/img/rooms/S_2fEvSp/1.png" />
      </Head>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-brand-base hover:text-brand-bright inline-flex items-center"
          >
            ← トップページへ戻る
            <span
              title="トップページへ"
              className="inline-block align-sub bg-[url(/img/icons/link.svg)] bg-no-repeat w-3 h-3 ml-1"
            />
          </Link>
        </div>
        <Concept />
        <Facilities />
        <Examples />
        <Conditions />
        <Company />
      </main>
    </>
  )
}
