import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[]
}): ReactElement {
  return (
    <>
      <div className="m-auto min-h-screen relative">
        <Head>
          <meta name="description" content="AY HOUSE" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="keywords"
            content="シェアハウス,レンタルスペース,ギークハウス,share house,rental space"
          />
        </Head>

        <header className="w-full flex items-center justify-center flex-col mb-4">
          <div className="my-4 w-9/12">
            <h1 className="text-xl flex-auto">AY合同会社</h1>
          </div>

          <nav className="w-9/12">
            <ul className="flex flex-col md:flex-row justify-between">
              <li className="border-b md:border-b-0 md:border-r md:pr-7">
                <Link href="/">
                  <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                    AY HOUSEについて
                  </div>
                </Link>
              </li>
              <li className="border-b md:border-b-0 md:flex-1 md:text-center md:border-r">
                <Link href="/house">
                  <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                    シェアハウスのご案内
                  </div>
                </Link>
              </li>
              <li className="border-b md:border-b-0 md:flex-1 md:text-center md:border-r">
                <Link href="/space">
                  <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                    レンタルスペース紹介
                  </div>
                </Link>
              </li>
              <li className="border-b md:border-b-0 md:flex-1 md:text-center md:border-r">
                <Link href="/company">
                  <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                    会社概要
                  </div>
                </Link>
              </li>
              <li className="border-b md:border-b-0 md:flex-1 md:text-center md:border-r">
                <Link href="https://note.com/aya_eiya">
                  <a target="_blank">
                    <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                      ブログ
                    </div>
                  </a>
                </Link>
              </li>
              <li className="border-b md:border-b-0 md:text-right md:pl-7">
                <Link href="/inquiry">
                  <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
                    お問い合わせ
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col pb-11">{children}</main>
        <footer className="h-10 bg-gray-300 p-3 w-full absolute bottom-0">
          <p className="text-center font-serif text-gray-500">&copy; AY.LLC.</p>
        </footer>
      </div>
    </>
  )
}
