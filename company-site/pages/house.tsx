import { ReactElement } from 'react'
import HeadLine from '../components/HeadLine'
import Layout from '../components/Layout'

export default function House(): ReactElement {
  return (
    <Layout>
      <HeadLine background="">シェアハウスのご案内</HeadLine>
      <div className="w-9/12 mx-auto">
        <h2 className="text-xl my-4">
          旗の台シェアハウス<span className="text-gray-400">(仮)</span>
        </h2>
        <div className="relative">
          <div className="mb-4 mb:grid mb:grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="mb:col-span-3 h-96"
              style={{
                backgroundImage: 'url(/img/house01-01.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mb:w-1/2 mb:h-96 mb:absolute mb:top-0 bg-opacity-60 bg-white">
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
          <div className="mb-4 mb:grid mb:grid-cols-9">
            <div
              className="hidden md:block mb:col-span-4 h-80"
              style={{
                backgroundImage: 'url(/img/price.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <img className="md:hidden" src="/img/price.png" />
          </div>
          <div className="mb:w-1/2 md:h-80 mb:absolute mb:top-0 right-0 bg-opacity-60 bg-white">
            <h3 className="text-lg mb-4">賃料の設定</h3>
            <p className="mb-2"></p>
            <p className="mb-2">
              左記の賃料を基準に、個別の事情による調整も可能です。
            </p>
            <p className="mb-2">
              とくに、２０２１年中は物件設備の準備などの都合によりご不便がありますため、一部の賃料に反映させていただく場合が多いと思います。
            </p>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-2 md:grid-cols-8 px-1 py-2 ">
          {[
            [
              <>
                <p>徒歩</p>
                <p>３分</p>
              </>,
              <>
                <p>旗の台駅</p>
              </>,
            ],
            [
              <>
                <p>縦型</p>
                <p>２台</p>
              </>,
              <>
                <p>洗濯機</p>
              </>,
            ],
            [
              <>
                <p>ガス</p>
                <p>１台</p>
              </>,
              <>
                <p>乾燥機</p>
              </>,
            ],
            [
              <>
                <p>ガス</p>
                <p>３口</p>
              </>,
              <>
                <p>キッチン</p>
              </>,
            ],
            [
              <>
                <p>一人</p>
                <p>１台</p>
              </>,
              <>
                <p>駐輪</p>
                <p>スペース</p>
              </>,
            ],
            [
              <>
                <p>光回線</p>
                <p>Wifi</p>
              </>,
              <>
                <p>ネット</p>
                <p>環境</p>
              </>,
            ],
            [
              <>
                <p>3ヶ所</p>
                <p className="text-xs">ウォシュレット付き</p>
              </>,
              <>
                <p>トイレ</p>
              </>,
            ],
            [
              <>
                <p>２ヶ所</p>
                <p className="text-xs">兼脱衣所</p>
              </>,
              <>
                <p>洗面所</p>
              </>,
            ],
            [
              <>
                <p>２階</p>
              </>,
              <>
                <p>階数</p>
              </>,
            ],
            [
              <>
                <p>共用</p>
              </>,
              <>
                <p>リビング</p>
              </>,
            ],
            [
              <>
                <p>最大</p>
                <p>３名</p>
              </>,
              <>
                <p>ルームシェア</p>
                <p>対応</p>
              </>,
            ],
            [
              <>
                <p>玄関</p>
                <p>個室</p>
              </>,
              <>
                <p>オートロック</p>
                <p>対応</p>
              </>,
            ],
            [
              <>
                <p>あり</p>
                <p>（有料）</p>
              </>,
              <>
                <p>トランク</p>
                <p>ルーム</p>
              </>,
            ],
          ].map(([icon, text], key) => (
            <HouseElem {...{ icon }} key={key}>
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
      <div className="h-16 rounded-md flex flex-col">{children}</div>
      <div className="bg-white w-16 h-16 flex flex-col justify-center items-center">
        {icon}
      </div>
    </div>
  )
}
