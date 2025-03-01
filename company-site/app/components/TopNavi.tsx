'use client'

import { ReactElement } from 'react'
import MenuIcon from './icons/menu'
import Link from 'next/link'

export default function TopNavi({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}): ReactElement {
  return (
    <nav className="top-4 right-4 z-10 md:top-24 md:bg-opacity-70 md:bg-white fixed md:right-4 md:border-r">
      <div className="text-right md:hidden">
        <button
          name="topNavigation"
          onClick={(): void => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <ul
        className={`md:flex flex-col justify-between bg-white md:bg-transparent p-4 ${
          isMenuOpen
            ? 'flex drop-shadow-sm border-brand-bright rounded-md'
            : 'hidden'
        }`}
      >
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/home">AY HOUSEについて</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/house">シェアハウスのご案内</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/surroundings">周辺の環境</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/engineering">ソフトウェア開発</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/company">会社概要</Link>
          </div>
        </li>
        <li className="text-right">
          <Link href="https://note.com/aya_eiya" target="_blank">
            <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
              ブログ
              <span
                title="外部リンク"
                className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
              />
            </div>
          </Link>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/inquiry">お問合せ</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/privacy">プライバシーポリシー</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
