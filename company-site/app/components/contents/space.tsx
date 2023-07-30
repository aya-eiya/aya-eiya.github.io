'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Space(): ReactElement {
  return (
    <>
      <HeadLine id="space">レンタルスペース</HeadLine>
      <div className="mt-10 mx-2">
        <p className="mb-2">
          シェアハウスの共用部を、レンタルスペースとしてお貸し出ししております
        </p>

        <p className="mb-2">
          ご予約は
          <a
            href="https://spacemarket.com/p/sp/ay-house01-2f-ldk"
            target={'_blank'}
            className="underline inline-block mx-1"
          >
            こちら
            <span
              title="外部リンク"
              className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
            />
          </a>
          からよろしくお願いします
        </p>

        <dl className="mt-4">
          <dt className="text-lg mb-2">スペース一覧</dt>
          <dd>
            <div className="border rounded-md p-4 mt-4 bg-[url(/img/2fldk.png)] pt-[100vw] md:pt-1 bg-no-repeat bg-contain md:bg-right-top md:pr-52">
              <a
                href="https://spacemarket.com/p/6VFBsJ-zNNWcQ0mS"
                target={'_blank'}
              >
                <dl>
                  <dt className="mb-4">キッチン付きスペース</dt>
                  <dd className="mb-2">2FのLDKをお使いいただけます</dd>
                  <dd className="mb-2">
                    <p className="px-2 md:pr-4">宴会・料理教室・学習会のほか</p>
                    <p className="px-2 md:pr-4">
                      屋内でのドラマシーンの撮影や、MVなどの配信用動画の撮影などにもご利用いただけます
                    </p>
                  </dd>
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
          </dd>

          <dd>
            <div className="border rounded-md p-4 mt-4 bg-[url(/img/garden.png)] pt-[100vw] md:pt-1 bg-no-repeat bg-contain md:bg-right-top md:pr-52">
              <a
                href="https://www.spacemarket.com/p/VrpL5gw2XGTtExbZ/"
                target={'_blank'}
              >
                <dl>
                  <dt className="mb-4">ガーデンテラス</dt>
                  <dd className="mb-2">こちらは屋外のみのエリアです</dd>
                  <dd className="mb-2">
                    <p className="px-2 md:pr-4">
                      BBQやお茶会、子供用プールでの水遊びのほか
                    </p>
                    <p className="px-2 md:pr-4">
                      アウトドアグッズの広告用写真や、屋外レクリエーションシーンなどの撮影などにもご利用いただけます
                    </p>
                  </dd>
                  <dd className="pl-4 mb-4 break-words underline text-brand-light">
                    https://www.spacemarket.com/p/VrpL5gw2XGTtExbZ/
                    <span
                      title="外部リンク"
                      className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                    />
                  </dd>
                </dl>
              </a>
            </div>
          </dd>

          <dd>
            <div className="border rounded-md p-4 mt-4 bg-[url(/img/aroom.png)] pt-[100vw] md:pt-1 bg-no-repeat bg-contain md:bg-right-top md:pr-52">
              <a
                href="https://www.spacemarket.com/p/sUKtqT73-eHtwPCL/"
                target={'_blank'}
              >
                <dl>
                  <dt className="mb-4">作業スペース・休憩所</dt>
                  <dd className="mb-2">
                    庭に隣接の離れの一室をお貸ししております
                  </dd>
                  <dd className="mb-2">
                    <p className="px-2 md:pr-4">
                      WEB会議や日中の楽器練習、勉強部屋のほか
                    </p>
                    <p className="px-2 md:pr-4">
                      室内に冷蔵庫と電子レンジが設置してありますので、お庭での撮影・イベントの際に控え室、休憩所としてご利用いただけます。
                    </p>
                  </dd>
                  <dd className="pl-4 mb-4 break-words underline text-brand-light">
                    https://www.spacemarket.com/p/sUKtqT73-eHtwPCL/
                    <span
                      title="外部リンク"
                      className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                    />
                  </dd>
                </dl>
              </a>
            </div>
          </dd>
        </dl>
        <dl className="mt-4">
          <dt className="text-lg mb-2">法人のご利用</dt>
          <dd>
            <div className="mt-4 p-3 border rounded">
              <p>
                そのほか、法人さまのご利用については別途相談を承っております
              </p>
              <p>
                ご予約にあたっては、
                <a
                  className="inline-block mx-1 underline"
                  href="https://forms.gle/Q8qeywx7cMvEUAcX9"
                  target="_blank"
                  title="レンタルスペースの法人利用問い合わせ"
                >
                  こちらのフォーム
                  <span
                    title="外部リンク"
                    className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-3 h-3 ml-1"
                  />
                </a>
                からお問い合わせください
              </p>
            </div>
          </dd>
        </dl>
      </div>
    </>
  )
}
