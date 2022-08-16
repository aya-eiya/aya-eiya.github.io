import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { isPageName, PageName, titles } from '../domains/pages'
import TopNavi from './TopNavi'

export default function Layout({
  children,
  hideNavi,
}: {
  children: ReactElement | ReactElement[]
  hideNavi?: boolean
}): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname, push: _push, query } = useRouter()
  const [title, setTitle] = useState<typeof titles[PageName]>(titles.home)
  const push = (url: string) => _push(url, undefined, { shallow: true })
  useEffect(() => {
    const id = query.page ? String(query.page) : pathname.replace(/^\//, '')
    const el = document.getElementById(id)
    if (!el) {
      return
    }
    setTitle(titles[isPageName(id) ? id : 'home'])
    el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, query.page])
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full relative text-brand-dark">
        <header className="flex items-center justify-center flex-col mb-4">
          <div className="w-full py-4 bg-brand-dark shadow-sm text-white fixed z-10 top-0">
            <div className="mx-auto sm:w-7/12 md:w-9/12 flex flex-row justify-between items-center px-4">
              <h1 className="text-xl">
                <a className="cursor-pointer" onClick={() => push('/')}>
                  AY合同会社
                </a>
              </h1>

              <div className="text-white hover:text-gray-500 hidden md:flex">
                <a className="cursor-pointer" onClick={() => push('/inquiry')}>
                  お問合せ
                </a>
              </div>
            </div>
          </div>

          {hideNavi || (
            <TopNavi isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
        </header>
        <main
          className="mt-24 mx-auto max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-md 2xl:max-w-screen-lg flex flex-col pb-11 text-brand-dark"
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
