'use client'

import { ReactElement } from 'react'
import HeadLine from '../HeadLine'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'

const texts = {
  ja: {
    title: '周辺の環境',
    stationArea: '旗の台駅周辺(徒歩2〜4分)',
    description1:
      '最寄りの駅となる旗の台は、大井町線および池上線が乗り入れる乗り換え駅です',
    description2:
      '駅前商店街には、昔ながらのお店も便利のよいコンビニやスーパーチェーン、外食チェーンなどがあり大変に生活がしやすいエリアとなっています',
    description3:
      '昔ながらの定食屋さんや、雑誌などでも取り上げられるラーメン店、カレーハウス、食堂など外食の選択肢が多数あります',
    description4:
      '最寄りのスーパーは、イオン系の小型スーパーのまいばすけっとです。小型スーパーですが、徒歩2分の立地のため日常生活には非常に便利です',
    facilitiesTitle: '周辺店舗・施設',
    stores: [
      { name: 'まいばすけっと', branch: ['旗の台店'], type: '小型スーパー' },
      {
        name: 'セブンイレブン',
        branch: ['旗の台店', '旗の台駅前店'],
        type: 'コンビニ',
      },
      {
        name: 'ファミリーマート',
        branch: ['旗の台二丁目店', '旗の台駅前店'],
        type: 'コンビニ',
      },
      { name: '松屋', branch: ['旗の台店'], type: '牛丼チェーン' },
      { name: '日高屋', branch: ['旗の台店'], type: '中華食堂' },
      {
        name: 'ポポラマーマ',
        branch: ['旗の台店'],
        type: 'イタリアン・パスタ・ピザ専門店',
      },
      {
        name: 'サイゼリヤ',
        branch: ['旗の台店'],
        type: 'イタリアン・ファミレス',
      },
      { name: '麻布しき', branch: ['旗の台店'], type: '和食・うなぎ' },
      { name: 'まるやま', branch: [], type: '老舗の昭和食堂' },
    ],
    andMore: 'など、',
    popularStores: '人気店多数',
  },
  en: {
    title: 'Surroundings',
    stationArea: 'Around Hatanodai Station (2-4 min walk)',
    description1:
      'Hatanodai is a transfer station served by both the Oimachi Line and Ikegami Line',
    description2:
      'The station shopping street features a mix of traditional shops, convenient stores, supermarket chains, and restaurant chains, making it a very convenient area to live',
    description3:
      'There are many dining options including traditional diners, magazine-featured ramen shops, curry houses, and various restaurants',
    description4:
      'The nearest supermarket is AEON\'s small-format store "My Basket". Although it\'s a small supermarket, its 2-minute walking distance location makes it very convenient for daily life',
    facilitiesTitle: 'Nearby Facilities',
    stores: [
      { name: 'My Basket', branch: ['Hatanodai'], type: 'Small Supermarket' },
      {
        name: '7-Eleven',
        branch: ['Hatanodai', 'Hatanodai Station'],
        type: 'Convenience Store',
      },
      {
        name: 'Family Mart',
        branch: ['Hatanodai 2-chome', 'Hatanodai Station'],
        type: 'Convenience Store',
      },
      { name: 'Matsuya', branch: ['Hatanodai'], type: 'Beef Bowl Chain' },
      { name: 'Hidakaya', branch: ['Hatanodai'], type: 'Chinese Restaurant' },
      {
        name: 'Popola Mama',
        branch: ['Hatanodai'],
        type: 'Italian Restaurant (Pasta & Pizza)',
      },
      {
        name: 'Saizeriya',
        branch: ['Hatanodai'],
        type: 'Italian Family Restaurant',
      },
      {
        name: 'Azabu Shiki',
        branch: ['Hatanodai'],
        type: 'Japanese & Eel Restaurant',
      },
      { name: 'Maruyama', branch: [], type: 'Traditional Japanese Diner' },
    ],
    andMore: 'and',
    popularStores: 'many more popular stores',
  },
}

export default function Surroundings(): ReactElement {
  const { lang } = useLanguage()
  const t = texts[lang]

  return (
    <>
      <HeadLine id="surroundings">{t.title}</HeadLine>
      <div className="mt-10 mx-2">
        <section>
          <div className="mx-2">
            <h2 className="my-1 font-semibold">{t.stationArea}</h2>
            <div className="mb-4 flex flex-row md:flex-col">
              <div className=""></div>
              <div className="">
                <p className="mb-2">{t.description1}</p>
                <p className="mb-2">{t.description2}</p>
                <p className="mb-2">{t.description3}</p>
                <p>{t.description4}</p>
              </div>
            </div>
          </div>
          <table className="border w-full">
            <caption className="mb-2 font-semibold">
              {t.facilitiesTitle}
            </caption>
            <tbody>
              {t.stores.map((store, index) => (
                <tr key={index} className="border-b">
                  <td className="p-1 w-40 md:w-auto">
                    {store.name}
                    {store.branch.map((b) => (
                      <span key={b} className="mx-2 block md:inline">
                        {b}
                      </span>
                    ))}
                  </td>
                  <td className="p-1">{store.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-right pt-2">
            {t.andMore}
            <Link
              target="_blank"
              className="text-brand-base hover:text-brand-right"
              href="https://tabelog.com/tokyo/A1317/A131712/R7912/rstLst/?svd=20221231&svt=1900&svps=2&LstRange=SF"
            >
              {t.popularStores}
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}
