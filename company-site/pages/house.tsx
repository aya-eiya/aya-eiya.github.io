import { ReactElement, useState } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'
import {
  Base,
  BaseRent,
  CommonFee,
  DetailTexts,
  ManageFee,
  Rent,
  Room,
  RoomNames,
  Rooms,
  Upto,
} from '../domains/house'
import { FloorPlan } from '../components/floorPlan'
import { currencyFormat } from '../domains/number'
import Image from 'next/image'
import Head from 'next/head'

const defaultRNum = Rooms.reduce(
  (i, r) => ({ ...i, [r]: 1 }),
  {} as typeof Upto
)
export default function House(): ReactElement {
  const [room, setRoom] = useState('a' as Room)
  const [rnum, setRNum] = useState(defaultRNum)
  return (
    <>
      <Head>
        <title>AY HOUSE | シェアハウスのご案内</title>
      </Head>
      <Layout>
        <HeadLine background="">シェアハウスのご案内</HeadLine>
        <div className="w-full md:w-9/12 mx-auto">
          <h2 className="px-2 md:px-0 text-xl my-4">旗の台シェアハウス</h2>
          <div className="relative">
            <div className="mb-4 md:grid md:grid-cols-5">
              <div className="col-span-2"></div>
              <div className="md:col-span-3 h-96 bg-cover bg-center bg-[url(/img/house01-01.png)]"></div>
            </div>
            <div className="px-2 md:px-0 md:w-1/2 md:h-96 md:absolute md:top-0 bg-opacity-60 bg-white">
              <h3 className="text-lg mb-4">品川区旗の台 - 庭付き一戸建</h3>
              <div className="px-2">
                <p className="mb-4">
                  品川区旗の台の駅近く、徒歩3分の立地で7LLDDKKの広い庭付き一戸建てです。
                </p>
                <p className="mb-4">
                  個室中心で広いお部屋が多く、シェアハウスでは珍しいルームシェアのご希望にもお応えできます。
                </p>
                <p className="mb-4">
                  住民はオーナーの影響からエンジニアが多く、ITに関わる方に人気が高くなっております。
                </p>
                <p className="mb-4">
                  外国人起業家や、フリーランスのエンジニアなど会社員以外のお仕事をしている人も入居しており、
                  <br />
                  週末には
                  <a
                    href="https://ay-house01.connpass.com/event/237303/"
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
                  </a>
                  を催しております。
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
                  return (
                    <div key={key} className={key === room ? '' : 'hidden'}>
                      <h2 className="text-lg pb-4">{RoomNames[key]}</h2>
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
                        <h3 className="md:col-span-2 text-lg pb-1">
                          月額料金計算
                        </h3>
                        <div className="pl-2">
                          {room !== 'domi' ? '部屋' : 'ベッド'}
                          利用料金:
                        </div>
                        <div className="text-right">
                          {currencyFormat(Rent[key])} 円
                        </div>
                        <div className="pl-2">
                          共用部利用費(*<span className="text-xs">1</span>):
                        </div>
                        <div className="text-right">
                          {currencyFormat(Base)} 円
                        </div>
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
                        <div className="md:col-span-2 text-right text-lg">
                          <span className="inline-block pr-4">合計</span>
                          {currencyFormat(rnum[key] * Base + Rent[key])} 円
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-0 w-full md:w-9/12 mx-auto pt-4">
          <OptionList />
          <hr className="border-b md:mt-4 mb-1" />
          <div className="text-gray-400 mb-6">
            <dl className="flex flex-row text-xs md:text-sm">
              <dt>(*1):</dt>
              <dd>
                共用部利用費の内訳は
                <span className="inline-block mx-1">
                  <span className="underline">
                    家賃:{currencyFormat(BaseRent)}円
                  </span>
                  {' + '}
                  <span className="underline">
                    共益費:{currencyFormat(CommonFee)}円
                  </span>
                  {' + '}
                  <span className="underline">
                    管理手数料:{currencyFormat(ManageFee)}円
                  </span>
                </span>
                となります。
              </dd>
            </dl>
          </div>
        </div>
      </Layout>
    </>
  )
}
function OptionList() {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-5 px-1 pb-2">
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
