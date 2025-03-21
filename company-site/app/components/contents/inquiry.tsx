'use client'

import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Inquiry(): ReactElement {
  return (
    <>
      <HeadLine id="inquiry">お問い合わせ</HeadLine>
      <div className="mt-10 mx-auto">
        <div className="border rounded-lg p-4 mx-2 text-white bg-brand-light">
          <p className="mb-4">
            お問い合わせは、Twitter DM、Facebookページからお願いいたします
          </p>
          <div className="grid md:grid-cols-6 w-1/2 gap-2">
            <div className="md:col-span-2">Twitter:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://twitter.com/hatano_ay" target="_blank">
                @hatano_ay
                <span
                  title="外部リンク"
                  className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
            <div className="md:col-span-2">Facebook:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link
                href="https://www.facebook.com/hatano.ay"
                target="_blank"
                className="break-words"
              >
                https://www.facebook.com/hatano.ay
                <span
                  title="外部リンク"
                  className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
            <div className="md:col-span-2">Instagram:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.instagram.com/hatano_ay/" target="_blank">
                @hatano_ay
                <span
                  title="外部リンク"
                  className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
