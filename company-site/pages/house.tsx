import { ReactElement, useEffect, useState } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'
import {
  Room,
  Upto,
  RoomNames,
  Rent,
  Base,
  Rooms,
  DetailTexts,
} from '../domains/house'
import { FloorPlan } from '../components/floorPlan'
import { currencyFormat } from '../domains/number'

const defaultRNum = Rooms.reduce(
  (i, r) => ({ ...i, [r]: 1 }),
  {} as typeof Upto
)
export default function House(): ReactElement {
  const [room, setRoom] = useState('a' as Room)
  const [rnum, setRNum] = useState(defaultRNum)
  return (
    <Layout>
      <HeadLine background="">シェアハウスのご案内</HeadLine>
      <div className="w-9/12 mx-auto">
        <h2 className="text-xl my-4">旗の台シェアハウス</h2>
        <div className="relative">
          <div className="mb-4 md:grid md:grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="md:col-span-3 h-96"
              style={{
                backgroundImage: 'url(/img/house01-01.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="md:w-1/2 md:h-96 md:absolute md:top-0 bg-opacity-60 bg-white">
            <h3 className="text-lg mb-4">品川区旗の台 - 庭付き一戸建</h3>
            <p className="mb-2">
              広い庭付きの一戸建てをシェアハウスにしました。
            </p>
            <p className="mb-2">
              個室中心で、広いお部屋が多くルームシェアのご希望にもお応えできます。
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg mb-4">ご案内</h3>
          <div className="grid grid-cols-5">
            <div className="col-span-2 md:col-span-3 pb-6">
              <p className="pb-4">
                ご覧になりたい部屋を間取り図から選択してください
              </p>
              <FloorPlan selected={room} setRoom={setRoom} />
            </div>
            <div className="col-span-3 md:col-span-2 pl-4">
              {Rooms.map((key) => {
                const value = Upto[key]
                return (
                  <div key={key} className={key === room ? '' : 'hidden'}>
                    <h2 className="text-lg pb-4">{RoomNames[key]}</h2>
                    <div className="h-28 m-2 mt-0 rounded-sm border border-gray-400 p-2 text-sm">
                      {DetailTexts[key]}
                    </div>
                    <div
                      className={
                        Rent[key] > 0
                          ? 'px-4 grid grid-cols-2 gap-y-2'
                          : 'hidden'
                      }
                    >
                      <h3 className="col-span-2 text-lg pb-1">月額料金計算</h3>
                      <div className="pl-2">
                        {room !== 'domi' ? '部屋' : 'ベッド'}
                        利用料金:
                      </div>
                      <p className="text-right">
                        {currencyFormat(Rent[key])} 円
                      </p>
                      <div className="pl-2">教養部利用費:</div>
                      <p className="text-right">{currencyFormat(Base)} 円</p>
                      <div className="pl-2">入居人数:</div>
                      <div className="border-b pb-2 border-gray-400 text-right">
                        <select
                          className="w-16 border text-right px-2"
                          onChange={({ target: { value } }) =>
                            setRNum({
                              ...rnum,
                              [key]: parseInt(value),
                            })
                          }
                        >
                          {[...Array(value)].map((_, i) => {
                            return <option key={i}>{i + 1}</option>
                          })}
                        </select>{' '}
                        / {value} 人
                      </div>
                      <p className="col-span-2 text-right text-lg">
                        <span className="inline-block pr-4">合計</span>
                        {currencyFormat(rnum[key] * Base + Rent[key])} 円
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <OptionList />
      </div>
    </Layout>
  )
}
function OptionList() {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-5 px-1 py-2 ">
      {[
        [
          <>
            <p>
              <img src="/img/station.svg" className="h-20" />
            </p>
            <p>徒歩</p>
            <p>３分</p>
          </>,
          <>
            <p>旗の台駅</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/laundry.svg" className="h-20" />
            </p>
            <p>縦型</p>
            <p>２台</p>
          </>,
          <>
            <p>洗濯機</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/dryer.svg" className="h-20" />
            </p>
            <p>ガス</p>
            <p>１台</p>
          </>,
          <>
            <p>乾燥機</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/pot.svg" className="h-20" />
            </p>
            <p>ガス</p>
            <p>３口</p>
          </>,
          <>
            <p>キッチン</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/bycycle.svg" className="h-20" />
            </p>
            <p>一人</p>
            <p>１台</p>
          </>,
          <>
            <p>駐輪スペース</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/internet.svg" className="h-20" />
            </p>
            <p>光回線</p>
            <p>Wifi</p>
          </>,
          <>
            <p>ネット環境</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/bathroom.svg" className="h-20" />
            </p>
            <p>3ヶ所</p>
            <p className="text-xs">(シャワートイレ)</p>
          </>,
          <>
            <p>トイレ</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/people.svg" className="h-20" />
            </p>
            <p>２ヶ所</p>
            <p className="text-xs">兼脱衣所</p>
          </>,
          <>
            <p>洗面所</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/upstairs.svg" className="h-20" />
            </p>
            <p>２階</p>
            <p> </p>
          </>,
          <>
            <p>階数</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/sofa.svg" className="h-20" />
            </p>
            <p>共用</p>
            <p>1階</p>
          </>,
          <>
            <p>リビング</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/people.svg" className="h-20" />
            </p>
            <p>最大</p>
            <p>３名</p>
          </>,
          <>
            <p>ルームシェア対応</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/lock.svg" className="h-20" />
            </p>
            <p>玄関</p>
            <p>個室</p>
          </>,
          <>
            <p>オートロック対応</p>
          </>,
        ],
        [
          <>
            <p>
              <img src="/img/trunk.svg" className="h-20" />
            </p>
            <p>あり</p>
            <p>（有料）</p>
          </>,
          <>
            <p>トランクルーム</p>
          </>,
        ],
      ].map(([icon, text], key) => (
        <Option icon={icon} key={key}>
          {text}
        </Option>
      ))}
    </div>
  )
}
function Option({
  icon,
  children,
}: {
  icon: ReactElement
  children: ReactElement | ReactElement[]
}) {
  return (
    <div className="bg-indigo-50 py-2 flex flex-col items-center">
      <div className="h-10 py-2 rounded-md flex flex-col">{children}</div>
      <div className="bg-white w-34 h-34 p-2 flex flex-col justify-center items-center">
        {icon}
      </div>
    </div>
  )
}
