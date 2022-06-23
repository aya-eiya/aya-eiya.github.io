import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Space(): ReactElement {
  return (
    <>
      <HeadLine id="space">レンタルスペース</HeadLine>
      <div className="mt-10 mx-2">
        <p className="mb-2">
          レンタルスペースとしてご利用いただける部屋をご用意しております。
        </p>
        <p className="mb-2">宴会・料理教室・学習会・WEB会議のほか</p>

        <p className="mb-2">
          各種広告用写真・ミュージックビデオ・配信用動画の撮影などにもご利用いただけます。
        </p>

        <p className="mb-2">
          ご予約は
          <a
            href="https://spacemarket.com/p/sp/ay-house01-2f-ldk"
            target={'_blank'}
          >
            こちら
          </a>
          からよろしくお願いします。
        </p>
        <div className="mb-2">
          <a
            href="https://spacemarket.com/p/6VFBsJ-zNNWcQ0mS"
            target={'_blank'}
          >
            <dl className="border rounded-md p-4 mt-4 bg-[url(/img/2fldk.png)] pt-[100vw] md:pt-0 bg-no-repeat bg-contain md:bg-right-top">
              <dt className="mb-2">予約サイト</dt>
              <dd className="pl-4 mb-4">スペースマーケット</dd>
              <dt className="mb-2">キッチン付きスペース</dt>
              <dd className="pl-4 mb-4 break-words underline text-brand-light">
                https://spacemarket.com/p/6VFBsJ-zNNWcQ0mS
                <span
                  title="外部リンク"
                  className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                />
              </dd>
            </dl>
          </a>
        </div>
      </div>
    </>
  )
}
