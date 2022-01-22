import { ReactElement, useEffect, useState } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'

const Rooms = {
  a: '1階 洋室＋サービスルーム',
  b: '準備中',
  c: '1階 和寝室＋書斎',
  d: '2階 ベッドルーム小',
  e: '2階 ベッドルーム中',
  f: '2階 ベッドルーム中',
  domi: '1階 ドミトリー',
}

type Room = keyof typeof Rooms
const Upto: Record<Room, number> = {
  a: 3,
  b: 0,
  c: 2,
  d: 2,
  e: 2,
  f: 2,
  domi: 1,
}
const Base = 55000
const Rent: Record<Room, number> = {
  a: 50000,
  b: 0,
  c: 50000,
  d: 35000,
  e: 35000,
  f: 35000,
  domi: 15000,
}

export default function House(): ReactElement {
  const [room, setRoom] = useState('a' as Room)
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

        <div className="relative">
          <div id="room-navi-tab" className="flex-row hidden md:flex">
            {Object.entries(Upto).map(([k, value]) => {
              if (!value) {
                return <></>
              }
              return (
                <div key={k}>
                  <button
                    className="border p-2 rounded-t-md"
                    onClick={() => {
                      setRoom(k as Room)
                    }}
                  >
                    {Rooms[k as Room]}
                  </button>
                </div>
              )
            })}
          </div>
          <section id="room-navi">
            {Object.entries(Upto).map(([k, value]) => {
              if (!value) {
                return <></>
              }
              const key = k as Room
              return (
                <div key={key} className={key === room ? '' : 'hidden'}>
                  <div className="p-2">
                    <h2 className="text-lg">{Rooms[key]}</h2>
                    <div className="p-4">
                      <p>
                        <span className="inline-block w-36">部屋料金:</span>{' '}
                        {Rent[key]} 円
                      </p>
                      <p>
                        <span className="inline-block w-36">教養部利用費:</span>{' '}
                        {Base} 円
                      </p>
                      <p>
                        <span className="inline-block w-36">入居人数:</span>
                        <select className="w-16 border text-right px-2">
                          {[...Array(value)].map((_, i) => {
                            return <option key={i}>{i + 1}</option>
                          })}
                        </select>{' '}
                        / {value} 人
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        </div>

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
            <HouseElem icon={icon} key={key}>
              {text}
            </HouseElem>
          ))}
        </div>
      </div>
    </Layout>
  )
}

function HouseElem({
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
