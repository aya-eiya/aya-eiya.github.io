import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Office(): ReactElement {
  return (
    <>
      <HeadLine id="office">コワーキングスペース</HeadLine>
      <div className="mt-10 mx-2">
        <p className="mb-2">
          住民用のオフィススペースについて、コワーキングスペースやレンタルオフィスとしてご利用いただけるプランをご用意しております
        </p>
        <p className="mb-2">現在は月額利用（5000円〜）のみ募集しております</p>

        <p className="mb-2">
          お問い合わせは、右下のFBチャットボタンもしくは、
          <a href="https://forms.gle/cE6YqBN1o4DMqejKA" target={'_blank'}>
            こちらのフォーム
          </a>
          から
        </p>
        <div className="mb-2">
          <a href="https://forms.gle/cE6YqBN1o4DMqejKA" target={'_blank'}>
            <dl className="border rounded-md p-4 mt-4 bg-[url(/img/office_01.png)] pt-[65vw] md:pt-0 bg-no-repeat bg-contain md:bg-right-top md:pr-48">
              <dt className="mb-2">お問合せ</dt>
              <dd className="pl-4 mb-4">Googleフォームが開きます</dd>
              <dt className="mb-2"></dt>
              <dd className="pl-4 mb-4 break-words underline text-brand-light w-full md:w-4/6">
                https://docs.google.com/forms/d/e/1FAIpQLSfeL9mm9BaM_dIYuJ2nEbHedozUIlXIA31X0tMuRoMZmLbcJA/viewform
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
