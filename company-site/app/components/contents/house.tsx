'use client'

import { ReactElement, useState } from 'react'
import HeadLine from '../HeadLine'
import {
  Available,
  CommonFee,
  DetailTexts,
  Rent,
  Room,
  RoomNames,
  Rooms,
  Deposit,
  Upto,
  ShareRent,
  isAvailable,
} from '../../domains/house'
import { FloorPlan } from '../floorPlan'
import { currencyFormat } from '../../domains/number'
import Link from 'next/link'

const defaultRNum = Rooms.reduce(
  (i, r) => ({ ...i, [r]: 1 }),
  {} as typeof Upto
)
export default function House(): ReactElement {
  const [room, setRoom] = useState('a' as Room)
  const [rnum, setRNum] = useState(defaultRNum)
  return (
    <>
      <HeadLine id="house">シェアハウスのご案内</HeadLine>
      <div className="mt-10 mx-auto">
        <h2 className="px-2 md:px-0 text-xl my-4">旗の台シェアハウス</h2>
        <div className="bg-right bg-[url(/img/house01-01.png)] mb-4">
          <div className="p-2 md:w-1/2 bg-opacity-60 bg-white text-shadow">
            <h3 className="text-lg mb-4">品川区旗の台 - 庭付き一戸建</h3>
            <div className="px-2">
              <p className="mb-4">
                品川区旗の台の駅近く、徒歩3分の立地で7LLDDKK（7室 &amp;
                LDK2箇所）の広い庭付き一戸建てです
              </p>
              <p className="mb-4">
                個室中心で広いお部屋が多く、シェアハウスでは珍しいルームシェアでのご利用もいただけます
              </p>
              <p className="mb-4">
                住民はオーナーの影響からエンジニアが多く、ITに関わる方に人気が高くなっております
              </p>
              <p>
                外国人起業家や、フリーランスのエンジニアなど会社員以外のお仕事をしている人も入居しており、
                <br />
                週末には
                <Link
                  href="https://ay-house01.connpass.com/"
                  target="_blank"
                  title="connpass イベントグループページ"
                >
                  <span className="underline inline-block mx-1 ">
                    オーナー主催のIT勉強会
                    <span
                      title="外部リンク"
                      className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-4 h-4 ml-1"
                    />
                  </span>
                </Link>
                を催しております
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-0">
          <h3 className="text-lg mb-4">ご案内</h3>
          <p className="px-2 pb-4 text-sm">
            ご覧になりたい部屋を間取り図から選択してください
          </p>
          <div className="grid grid-cols-5">
            <div className="col-span-2 md:col-span-3 pb-6">
              <FloorPlan selected={room} setRoom={setRoom} />
            </div>
            <div className="col-span-3 md:col-span-2 pl-4">
              {Rooms.map((key) => {
                const value = Upto[key]
                const comment = isAvailable(Available[key])
                return (
                  <div
                    key={key}
                    className={`${key === room ? '' : 'hidden'} ${
                      comment ? '' : 'text-gray-400'
                    }`}
                  >
                    <h2 className="text-lg pb-4">
                      {RoomNames[key]}
                      {!comment && <span className="text-red-500">(満室)</span>}
                      {typeof comment === 'string' && comment}
                    </h2>
                    <div className="m-2 mt-0 rounded-sm border border-gray-400 p-2 text-sm">
                      {DetailTexts[key]}
                    </div>
                    <div
                      className={
                        Rent[key] > 0
                          ? 'px-4 md:grid md:grid-cols-2 gap-y-2'
                          : 'hidden'
                      }
                    >
                      <h3 className="md:col-span-2 text-lg pb-1">初期費用</h3>
                      <div className="pl-2">デポジット:</div>
                      <div className="text-right">
                        {currencyFormat(Deposit)} 円
                      </div>
                      <h3 className="md:col-span-2 text-lg pb-1">賃料月額</h3>
                      <div className="pl-2">賃料:</div>
                      <div className="text-right">
                        {currencyFormat(Rent[key])} 円
                      </div>
                      <div className="pl-2">共益費:</div>
                      <div className="text-right">
                        {currencyFormat(CommonFee)} 円
                      </div>
                      {value > 1 && (
                        <>
                          <div className="pl-2">入居人数:</div>
                          <div className=" border-gray-400 text-right">
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
                        </>
                      )}
                      <div className="md:col-span-2 pt-2 border-t text-right text-lg">
                        <span className="inline-block pr-4">合計</span>
                        {currencyFormat(
                          (rnum[key] - 1) * ShareRent + Rent[key] + CommonFee
                        )}{' '}
                        円
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mx-auto pt-4">
        <OptionList />
        <hr className="border-b md:mt-4 mb-1" />
        <div>
          備考：女子ドミトリーには上記以外に専用キッチン・水回りが含まれます
        </div>
      </div>
    </>
  )
}
function OptionList() {
  return (
    <div className="grid gap-2 grid-cols-3 md:grid-cols-5 px-1 pb-2">
      {[
        [
          <>
            <p className="mb-2">
              <img
                src="/img/station.svg"
                alt="最寄り駅"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img
                src="/img/laundry.svg"
                alt="洗濯機"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img
                src="/img/dryer.svg"
                alt="衣類乾燥機"
                className="h-8 md:h-20"
              />
            </p>
            <p>ガス</p>
            <p>１台</p>
          </>,
          <>
            <p>衣類乾燥機</p>
          </>,
        ],
        [
          <>
            <p className="mb-2">
              <img src="/img/pot.svg" alt="キッチン" className="h-8 md:h-20" />
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
            <p className="mb-2">
              <img
                src="/img/bicycle.svg"
                alt="駐輪スペース"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img
                src="/img/internet.svg"
                alt="ネット環境"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img
                src="/img/bathroom.svg"
                alt="トイレ"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img src="/img/sink.svg" alt="洗面所" className="h-8 md:h-20" />
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
            <p className="mb-2">
              <img src="/img/bath.svg" alt="浴室" className="h-8 md:h-20" />
            </p>
            <p>２ヶ所</p>
          </>,
          <>
            <p>風呂・シャワー</p>
          </>,
        ],
        [
          <>
            <p className="mb-2">
              <img src="/img/upstairs.svg" alt="階数" className="h-8 md:h-20" />
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
            <p className="mb-2">
              <img
                src="/img/sofa.svg"
                alt="共用リビング"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img
                src="/img/people.svg"
                alt="個室シェア"
                className="h-8 md:h-20"
              />
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
            <p className="mb-2">
              <img src="/img/lock.svg" alt="玄関" className="h-8 md:h-20" />
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
            <p className="mb-2">
              <img
                src="/img/trunk.svg"
                alt="トランクルーム"
                className="h-8 md:h-20"
              />
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
    <div className="bg-brand-base text-xs md:text-sm lg:text-base text-white rounded-lg py-2 flex flex-col items-center">
      <div className="h-6 md:h-10 rounded-md flex flex-col justify-center">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center">{icon}</div>
    </div>
  )
}
