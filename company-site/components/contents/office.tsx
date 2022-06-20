import Link from 'next/link'
import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Office(): ReactElement {
  return (
    <>
      <HeadLine id="office">コワーキングスペース</HeadLine>
      <div className="mx-auto mt-4">
        <div className="border rounded-lg p-4 mx-2 text-white bg-brand-light">
          <p className="mb-4">
            一時利用および月額利用にてシェアハウスのオフィススペースをコワーキングスペースとしてレンタルしております。
          </p>
          <div className="grid md:grid-cols-6 w-1/2 gap-2">
            <div className="md:col-span-2">Twitter:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://twitter.com/hatano_ay">
                <a target="_blank">
                  @hatano_ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
            <div className="md:col-span-2">Facebook:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.facebook.com/hatano.ay">
                <a target="_blank" className="break-words">
                  https://www.facebook.com/hatano.ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
            <div className="md:col-span-2">Instagram:</div>
            <div className="md:col-span-4 pl-2 md:pl-0 font-bold">
              <Link href="https://www.instagram.com/hatano_ay/">
                <a target="_blank">
                  @hatano_ay
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.white.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
