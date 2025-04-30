'use client'

import { ReactElement } from 'react'
import MenuIcon from './icons/menu'
import Link from 'next/link'
import type { Lang } from '../domains/pages'

const menuItems = {
  ja: {
    home: 'AY HOUSEについて',
    house: 'シェアハウスのご案内',
    surroundings: '周辺の環境',
    engineering: 'ソフトウェア開発',
    company: '会社概要',
    blog: 'ブログ',
    inquiry: 'お問合せ',
    privacy: 'プライバシーポリシー',
  },
  en: {
    home: 'About AY HOUSE',
    house: 'Share House Guide',
    surroundings: 'Surroundings',
    engineering: 'Software Development',
    company: 'Company Profile',
    blog: 'Blog',
    inquiry: 'Contact',
    privacy: 'Privacy Policy',
  },
}

export default function TopNavi({
  isMenuOpen,
  setIsMenuOpen,
  lang = 'ja',
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
  lang?: Lang
}): ReactElement {
  const items = menuItems[lang]

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
            <Link href="/home">{items.home}</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/house">{items.house}</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/surroundings">{items.surroundings}</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/engineering">{items.engineering}</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/company">{items.company}</Link>
          </div>
        </li>
        <li className="text-right">
          <Link href="https://note.com/aya_eiya" target="_blank">
            <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
              {items.blog}
              <span
                title="外部リンク"
                className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
              />
            </div>
          </Link>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/inquiry">{items.inquiry}</Link>
          </div>
        </li>
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <Link href="/privacy">{items.privacy}</Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
