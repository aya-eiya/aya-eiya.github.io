import MenuIcon from './icons/menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TopNavi({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}) {
  const { push: _push } = useRouter()
  const push = (url: string) => _push(url, undefined, { shallow: true })
  return (
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
        <li className="text-right">
          <div className="h-10 pt-2 text-gray-800 hover:text-gray-500 cursor-pointer">
            <a onClick={() => push('/privacy')}>プライバシーポリシー</a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
