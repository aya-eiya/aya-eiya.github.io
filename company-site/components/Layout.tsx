import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import MenuIcon from './icons/menu'
import { isPageName, PageName, titles } from '../domains/pages'

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[]
}): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname, push: _push, query } = useRouter()
  const [title, setTitle] = useState<typeof titles[PageName]>(titles.home)
  useEffect(() => {
    const id = query.page ? String(query.page) : pathname.replace(/^\//, '')
    const el = document.getElementById(id)
    if (!el) {
      return
    }
    setTitle(titles[isPageName(id) ? id : 'home'])
    el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, query.page])
  const push = (url: string) => _push(url, undefined, { shallow: true })
  return (
    <>
      <Head>
        <meta name="description" content="AY HOUSE" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="シェアハウス,レンタルスペース,ギークハウス,share house,rental space"
        />
        <title>{title}</title>
      </Head>
      <div className="w-full relative text-brand-dark">
        <header className="flex items-center justify-center flex-col mb-4">
          <div className="w-full py-4 bg-brand-dark shadow-sm text-white fixed z-10 top-0">
            <div className="mx-auto md:w-9/12 flex flex-row justify-between items-center px-4">
              <h1 className="text-xl">AY合同会社</h1>

              <div className="text-gray-800 hover:text-gray-500 hidden md:flex">
                <a onClick={() => push('/inquiry')}>お問合せ</a>
              </div>
            </div>
          </div>

          <nav className="top-4 right-4 z-10 md:top-24 md:bg-transparent fixed md:right-4 md:border-r">
            <div className="text-right md:hidden">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                }}
              >
                <MenuIcon />
              </button>
            </div>
            <ul
              className={`md:flex flex-col justify-between bg-white md:bg-transparent p-4 ${
                isMenuOpen
                  ? 'flex drop-shadow border-brand-bright rounded-md'
                  : 'hidden'
              }`}
            >
              <li className="text-right">
                <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                  <a onClick={() => push('/home')}>AY HOUSEについて</a>
                </div>
              </li>
              <li className="text-right">
                <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                  <a onClick={() => push('/house')}>シェアハウスのご案内</a>
                </div>
              </li>
              <li className="text-right">
                <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                  <a onClick={() => push('/space')}>レンタルスペース紹介</a>
                </div>
              </li>
              <li className="text-right">
                <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                  <a onClick={() => push('/company')}>会社概要</a>
                </div>
              </li>
              <li className="text-right">
                <Link href="https://note.com/aya_eiya">
                  <a target="_blank">
                    <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                      ブログ
                      <span
                        title="外部リンク"
                        className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                      />
                    </div>
                  </a>
                </Link>
              </li>
              <li className="text-right">
                <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                  <a onClick={() => push('/inquiry')}>お問合せ</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <main
          className="mt-24 mx-auto max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg flex flex-col pb-11 text-brand-dark"
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
        <section className="h-60"></section>
        <footer className="h-10 bg-brand-base p-3 w-full absolute bottom-0">
          <p className="text-center font-serif text-white">&copy; AY.LLC.</p>
        </footer>
      </div>
    </>
  )
}
