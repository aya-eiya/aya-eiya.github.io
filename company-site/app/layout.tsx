'use client'

import '../styles/globals.css'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import { isPageName, PageName, titles } from './domains/pages'
import TopNavi from './components/TopNavi'
import Ogp from './components/functions/ogp'
import Link from 'next/link'

export default function RootLayout({
  children,
  params,
}: {
  children: ReactElement
  params: { page: string }
}): ReactElement {
  const { page } = params
  const pathname = usePathname()
  const [title, setTitle] = useState<(typeof titles)[PageName]>(titles.home)
  useEffect(() => {
    const id = page ? String(page) : pathname.replace(/^\//, '')
    const el = document.getElementById(id)
    if (!el) {
      return
    }
    setTitle(titles[isPageName(id) ? id : 'home'])
    el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, page])

  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P626NSEPMZ"
          strategy="afterInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/script/analytics.js"
          strategy="afterInteractive"
        ></Script>
        <Ogp />
        <link rel="canonical" href="https://www.aya-eiya.work/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="シェアハウス,ギークハウス,コワーキング,空き家活用,東京シェアハウス,パーティルーム,撮影スタジオ,品川区,旗の台,東急沿線,大井町線,浅草線,武蔵小山,西小山,戸越銀座,大岡山,自由が丘,五反田,share house,co-working,sharing economy,party room,rental studio"
        />
        <meta
          name="description"
          content="戸建シェアハウスの運営を行うAY合同会社のホームページです。ITエンジニア向けを中心としたコンセプトシェアハウスを運営しており、起業家やITエンジニアに人気の物件となっています"
        />
        <meta
          name="google-site-verification"
          content="7kSERnEQeg59zIDhceMur15WrY6TnUkPR4r2Rj8tEwY"
        />
        <title>{title}</title>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

function Layout({
  children,
}: {
  children: ReactElement | ReactElement[]
}): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const hideNavi = useMemo(() => {
    return pathname.includes('/privacy')
  }, [pathname])
  return (
    <>
      <div className="w-full relative text-brand-dark">
        <header className="flex items-center justify-center flex-col mb-4">
          <div className="w-full py-4 bg-brand-dark shadow-xs text-white fixed z-10 top-0">
            <div className="mx-auto sm:w-7/12 md:w-9/12 flex flex-row justify-between items-center px-4">
              <h1 className="text-xl">
                <Link href="/">AY合同会社</Link>
              </h1>

              <div className="text-white hover:text-gray-500 hidden md:flex">
                <Link className="cursor-pointer" href="/inquiry">
                  お問合せ
                </Link>
              </div>
            </div>
          </div>

          {hideNavi || (
            <TopNavi isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </header>
        <main
          className="mt-24 mx-auto max-w-(--breakpoint-sm) md:max-w-(--breakpoint-sm) lg:max-w-(--breakpoint-md) 2xl:max-w-(--breakpoint-lg) flex flex-col pb-11 text-brand-dark"
          onClick={
            isMenuOpen
              ? () => {
                  setIsMenuOpen(false)
                }
              : undefined
          }
        >
          <div>{children}</div>
        </main>
        <hr className="h-60 border-none" />
        <footer className="h-10 bg-brand-base p-3 w-full absolute bottom-0">
          <p className="text-center font-serif text-white">&copy; AY.LLC.</p>
        </footer>
      </div>
    </>
  )
}
