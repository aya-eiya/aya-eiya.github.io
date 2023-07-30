'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'

export default function Surroundings(): ReactElement {
  return (
    <>
      <HeadLine id="surroundings">周辺の環境</HeadLine>
      <div className="mt-10 mx-2">
        <section>
          <div className="mx-2">
            <h3 className="my-1 font-semibold">旗の台駅周辺（徒歩2〜4分）</h3>
            <div className="mb-4 flex flex-row md:flex-col">
              <div className=""></div>
              <div className="">
                <p className="mb-2">
                  最寄りの駅となる旗の台は、大井町線および池上線が乗り入れる乗り換え駅です。
                </p>
                <p className="mb-2">
                  駅前商店街には、昔ながらのお店も便利のよいコンビニやスーパーチェーン、外食チェーンなどがあり大変に生活がしやすいエリアとなっています。
                </p>
                <p className="mb-2">
                  定食屋さん雑誌などでも取り上げられるラーメン店、カレーハウス、食堂など外食の選択肢が多数あります。
                </p>
                <p>
                  最寄りのスーパーは、イオン系の小型スーパーのまいばすけっとです。小型スーパーですが、徒歩2分の立地のため日常生活には非常に便利です。
                </p>
              </div>
            </div>
          </div>
          <table className="border w-full">
            <caption className="mb-2 font-semibold">周辺店舗・施設</caption>
            <tbody>
              <tr className="border-b">
                <td className="p-1 w-40 md:w-auto">
                  まいばすけっと
                  <span className="mx-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">小型スーパー</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  セブンイレブン
                  <span className="mx-2 block md:inline">旗の台店</span>
                  <span className="mx-2 block md:inline">旗の台駅前店</span>
                </td>
                <td className="p-1">コンビニ</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  ファミリーマート
                  <span className="ml-2 block md:inline">旗の台二丁目店</span>
                  <span className="ml-2 block md:inline">旗の台駅前店</span>
                </td>
                <td className="p-1">コンビニ</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  松屋
                  <span className="mx-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">牛丼チェーン</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  日高屋
                  <span className="mx-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">中華食堂</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  ポポラマーマ
                  <span className="mx-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">イタリアン・パスタ・ピザ専門店</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  サイゼリヤ
                  <span className="ml-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">イタリアン・ファミレス</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">
                  麻布しき<span className="ml-2 block md:inline">旗の台店</span>
                </td>
                <td className="p-1">和食・うなぎ</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">まるやま</td>
                <td className="p-1">老舗の昭和食堂</td>
              </tr>
              <tr className="border-b">
                <td className="p-1">スペイン食堂石井</td>
                <td className="p-1">スペイン食堂</td>
              </tr>
            </tbody>
          </table>
          <p className="text-right pt-2">
            など、
            <a
              target="_blank"
              className="text-brand-base hover:text-brand-right"
              href="https://tabelog.com/tokyo/A1317/A131712/R7912/rstLst/?svd=20221231&svt=1900&svps=2&LstRange=SF"
            >
              人気店多数
            </a>
          </p>
        </section>
      </div>
    </>
  )
}
