'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Home(): ReactElement {
  return (
    <>
      <HeadLine id="home">AY HOUSEについて</HeadLine>
      <div className="mt-10 mx-auto">
        <div className="mx-2">
          <div className="mb-2">
            <p className="mb-2">
              2021年に開始されたシェアハウスです。都内近郊中心に展開する予定です
            </p>
            <p className="mb-2">
              代表はギークハウスで長らく管理人を経験してきましたが、新たなコンセプトシェアハウスとなる新ブランドとしてAY
              HOUSEを2021年08月にスタートしました
            </p>
          </div>
          <div className="mb-2">
            <p>現在、品川旗の台にシェアハウス1号店を運営しています</p>
            <p>
              ご案内は
              <Link href="/house" className="font-bold underline">
                こちら
              </Link>
              から
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
