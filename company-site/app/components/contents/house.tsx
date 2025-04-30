'use client'

import { ReactElement, useState } from 'react'
import HeadLine from '../HeadLine'
import {
  Available,
  CommonFee,
  Rent,
  Room,
  Rooms,
  Deposit,
  Upto,
  ShareRent,
  isAvailable,
  getRoomNames,
  getDetailTexts,
  getSpecialSales,
} from '../../domains/house'
import { FloorPlan } from '../floorPlan'
import { currencyFormat } from '../../domains/number'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'

type FacilityInfo = {
  name: string
  detail1: string
  detail2: string
  label: string
}

type Facilities = Record<string, FacilityInfo>
type FacilityTuple = [string, FacilityInfo]

const defaultRNum = Rooms.reduce(
  (i, r) => ({ ...i, [r]: 1 }),
  {} as typeof Upto
)

const texts = {
  ja: {
    title: 'シェアハウスのご案内',
    houseName: '旗の台シェアハウス',
    houseType: '品川区旗の台 - 庭付き一戸建',
    description1:
      '品川区旗の台の駅近く、徒歩3分の立地で7LLDDKK(7室 & LDK2箇所)の広い庭付き一戸建てです',
    description2:
      '個室中心で広いお部屋が多く、シェアハウスでは珍しいルームシェアでのご利用もいただけます',
    description3:
      '住民はオーナーの影響からエンジニアが多く、ITに関わる方に人気が高くなっております',
    description4:
      '外国人起業家や、フリーランスのエンジニアなど会社員以外のお仕事をしている人も入居しており、',
    eventLink: 'オーナー主催のIT勉強会',
    description5: 'を催しております',
    selectRoom: 'ご覧になりたい部屋を間取り図からクリックしてください',
    full: '満室',
    initialCost: '初期費用',
    deposit: 'デポジット',
    monthlyFee: '賃料月額',
    rent: '賃料',
    commonFee: '共益費',
    campaign: 'キャンペーン割引',
    occupants: '入居人数',
    people: '人',
    total: '合計',
    dormitoryNote:
      'ドミトリーを継続して3ヶ月以上一人でご利用の方について、4ヶ月目から個室とみなした差分賃料が発生します',
    femaleDormitoryNote:
      '備考:女子ドミトリーには上記以外に専用キッチン・水回りが含まれます',
    facilities: {
      station: {
        name: '最寄り駅',
        detail1: '徒歩',
        detail2: '3分',
        label: '旗の台駅',
      },
      laundry: {
        name: '洗濯機',
        detail1: '縦型',
        detail2: '2台',
        label: '洗濯機',
      },
      dryer: {
        name: '衣類乾燥機',
        detail1: 'ガス',
        detail2: '1台',
        label: '衣類乾燥機',
      },
      kitchen: {
        name: 'キッチン',
        detail1: 'ガス',
        detail2: '3口',
        label: 'キッチン',
      },
      bicycle: {
        name: '駐輪スペース',
        detail1: '一人',
        detail2: '1台',
        label: '駐輪スペース',
      },
      internet: {
        name: 'ネット環境',
        detail1: '光回線',
        detail2: 'Wifi',
        label: 'ネット環境',
      },
      bathroom: {
        name: 'トイレ',
        detail1: '3ヶ所',
        detail2: '(シャワートイレ)',
        label: 'トイレ',
      },
      sink: {
        name: '洗面所',
        detail1: '2ヶ所',
        detail2: '兼脱衣所',
        label: '洗面所',
      },
      bath: {
        name: '浴室',
        detail1: '2ヶ所',
        detail2: '',
        label: '風呂・シャワー',
      },
      floor: {
        name: '階数',
        detail1: '2階',
        detail2: ' ',
        label: '階数',
      },
      livingroom: {
        name: '共用リビング',
        detail1: '共用',
        detail2: '1階',
        label: 'リビング',
      },
      share: {
        name: '個室シェア',
        detail1: '最大',
        detail2: '3名',
        label: 'ルームシェア対応',
      },
      lock: {
        name: '玄関',
        detail1: '玄関',
        detail2: '個室',
        label: 'オートロック対応',
      },
      storage: {
        name: 'トランクルーム',
        detail1: 'あり',
        detail2: '(有料)',
        label: 'トランクルーム',
      },
    } as Facilities,
  },
  en: {
    title: 'Share House Guide',
    houseName: 'Hatanodai Share House',
    houseType: 'Shinagawa Hatanodai - Detached House with Garden',
    description1:
      'A spacious 7LLDDKK (7 rooms & 2 LDK) detached house with garden, just 3 minutes walk from Hatanodai Station in Shinagawa',
    description2:
      'Featuring many spacious private rooms, we uniquely offer room sharing options which is rare in share houses',
    description3:
      "Due to the owner's influence, many residents are engineers, making it popular among IT professionals",
    description4:
      'Our residents include foreign entrepreneurs and freelance engineers, and',
    eventLink: 'owner-hosted IT study sessions',
    description5: 'are held on weekends',
    selectRoom: 'Please click on a room in the floor plan to view details',
    full: 'Full',
    initialCost: 'Initial Costs',
    deposit: 'Deposit',
    monthlyFee: 'Monthly Fees',
    rent: 'Rent',
    commonFee: 'Common Fee',
    campaign: 'Campaign Discount',
    occupants: 'Occupants',
    people: 'people',
    total: 'Total',
    dormitoryNote:
      'Note: For dormitory residents staying alone for more than 3 months, additional private room rate difference will apply from the 4th month',
    femaleDormitoryNote:
      'Note: Female dormitory includes exclusive kitchen and water facilities in addition to the above',
    facilities: {
      station: {
        name: 'Nearest Station',
        detail1: 'Walk',
        detail2: '3min',
        label: 'Hatanodai Station',
      },
      laundry: {
        name: 'Washing Machine',
        detail1: 'Vertical',
        detail2: '2 units',
        label: 'Washing Machine',
      },
      dryer: {
        name: 'Clothes Dryer',
        detail1: 'Gas',
        detail2: '1 unit',
        label: 'Clothes Dryer',
      },
      kitchen: {
        name: 'Kitchen',
        detail1: 'Gas',
        detail2: '3 burners',
        label: 'Kitchen',
      },
      bicycle: {
        name: 'Bicycle Parking',
        detail1: 'Per person',
        detail2: '1 space',
        label: 'Bicycle Parking',
      },
      internet: {
        name: 'Internet',
        detail1: 'Fiber',
        detail2: 'Wifi',
        label: 'Internet',
      },
      bathroom: {
        name: 'Bathroom',
        detail1: '3 rooms',
        detail2: '(Toilet)',
        label: 'Bathroom',
      },
      sink: {
        name: 'Bathroom',
        detail1: '2 rooms',
        detail2: '(Change Area)',
        label: 'Bathroom',
      },
      bath: {
        name: 'Bathroom',
        detail1: '2 rooms',
        detail2: '(Shower Room)',
        label: 'Bathroom',
      },
      floor: {
        name: 'Floors',
        detail1: '2F',
        detail2: ' ',
        label: 'Floors',
      },
      livingroom: {
        name: 'Shared Living',
        detail1: 'Shared',
        detail2: '1F',
        label: 'Living Room',
      },
      share: {
        name: 'Room Share',
        detail1: 'Up to',
        detail2: '3 people',
        label: 'Room Share',
      },
      lock: {
        name: 'Entrance',
        detail1: 'Main',
        detail2: 'Private',
        label: 'Auto Lock',
      },
      storage: {
        name: 'Storage',
        detail1: 'Available',
        detail2: '(Paid)',
        label: 'Storage Room',
      },
    } as Facilities,
  },
}

export default function House(): ReactElement {
  const { lang } = useLanguage()
  const [room, setRoom] = useState('a' as Room)
  const [rnum, setRNum] = useState(defaultRNum)
  const t = texts[lang]

  const roomNames = getRoomNames(lang)
  const detailTexts = getDetailTexts(lang)
  const specialSales = getSpecialSales(lang)

  return (
    <>
      <HeadLine id="house">{t.title}</HeadLine>
      <div className="mt-10 mx-auto">
        <h2 className="px-2 md:px-0 text-xl my-4">{t.houseName}</h2>
        <div className="bg-right bg-no-repeat bg-[url(/img/house01-01.png)] mb-4">
          <div className="p-2 md:w-1/2 bg-opacity-60 bg-white text-shadow">
            <h3 className="text-lg mb-4">{t.houseType}</h3>
            <div className="px-2">
              <p className="mb-4">{t.description1}</p>
              <p className="mb-4">{t.description2}</p>
              <p className="mb-4">{t.description3}</p>
              <p>
                {t.description4}
                <br />
                <Link
                  href="https://ay-house01.connpass.com/"
                  target="_blank"
                  title="connpass Event Group Page"
                >
                  <span className="underline inline-block mx-1 ">
                    {t.eventLink}
                    <span
                      title="External Link"
                      className="inline-block align-sub bg-[url(/img/link.svg)] bg-no-repeat w-4 h-4 ml-1"
                    />
                  </span>
                </Link>
                {t.description5}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2 md:px-0">
          <h3 className="text-lg mb-4">{t.title}</h3>
          <p className="px-2 pb-4 text-sm">{t.selectRoom}</p>
          <div className="grid grid-cols-5">
            <div className="col-span-2 md:col-span-3 pb-6">
              <FloorPlan selected={room} setRoom={setRoom} />
            </div>
            <div className="col-span-3 md:col-span-2 pl-4">
              {Rooms.map((key): ReactElement => {
                const value = Upto[key]
                const availResult = isAvailable(Available[key], lang)
                const comment =
                  typeof availResult === 'string' ||
                  typeof availResult === 'boolean'
                    ? availResult
                    : null
                return (
                  <div
                    key={key}
                    className={`${key === room ? '' : 'hidden'} ${
                      comment ? '' : 'text-gray-400'
                    }`}
                  >
                    <h2 className="text-lg pb-4">
                      {roomNames[key]}
                      {!comment && (
                        <span className="text-red-500">({t.full})</span>
                      )}
                      {typeof comment === 'string' && comment}
                    </h2>
                    <div className="m-2 mt-0 rounded-xs border border-gray-400 p-2 text-sm">
                      {detailTexts[key]}
                    </div>
                    <div
                      className={
                        Rent[key] > 0
                          ? 'px-4 md:grid md:grid-cols-2 gap-y-2'
                          : 'hidden'
                      }
                    >
                      <h3 className="md:col-span-2 text-lg pb-1">
                        {t.initialCost}
                      </h3>
                      <div className="pl-2">{t.deposit}:</div>
                      <div className="text-right">
                        {currencyFormat(Deposit)} 円
                      </div>
                      <h3 className="md:col-span-2 text-lg pb-1">
                        {t.monthlyFee}
                      </h3>
                      <div className="pl-2">{t.rent}:</div>
                      <div className="text-right">
                        {currencyFormat(Rent[key])} 円
                      </div>
                      <div className="pl-2">{t.commonFee}:</div>
                      <div className="text-right">
                        {currencyFormat(CommonFee)} 円
                      </div>
                      {specialSales[key].length > 0 && (
                        <>
                          <div className="pl-2 md:col-span-2">
                            {t.campaign}:
                          </div>
                          <div className="text-right md:col-span-2">
                            {specialSales[key].map((c) => {
                              const key = Object.keys(c)[0]
                              return (
                                <div key={key}>
                                  {key}: -{currencyFormat(c[key])} 円
                                </div>
                              )
                            })}
                          </div>
                        </>
                      )}
                      {value > 1 && (
                        <>
                          <div className="pl-2">{t.occupants}:</div>
                          <div className="border-gray-400 text-right">
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
                            / {value} {t.people}
                          </div>
                        </>
                      )}
                      <div className="md:col-span-2 pt-2 border-t text-right text-lg">
                        <span className="inline-block pr-4">{t.total}</span>
                        {currencyFormat(
                          (rnum[key] - 1) * ShareRent +
                            Rent[key] +
                            CommonFee -
                            specialSales[key].reduce(
                              (i, c) => i + Object.values(c)[0],
                              0
                            )
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
        <div>
          <p className="text-sm mt-2">※1、※2）: {t.dormitoryNote}</p>
        </div>
      </div>
      <div className="px-2 mx-auto pt-4">
        <OptionList />
        <hr className="border-b md:mt-4 mb-1" />
        <div>{t.femaleDormitoryNote}</div>
      </div>
    </>
  )
}

function OptionList(): ReactElement {
  const { lang } = useLanguage()
  const facilities = texts[lang].facilities
  const facilityItems: FacilityTuple[] = [
    ['station', facilities.station],
    ['laundry', facilities.laundry],
    ['dryer', facilities.dryer],
    ['kitchen', facilities.kitchen],
    ['bicycle', facilities.bicycle],
    ['internet', facilities.internet],
    ['bathroom', facilities.bathroom],
    ['sink', facilities.sink],
    ['bath', facilities.bath],
    ['floor', facilities.floor],
    ['livingroom', facilities.livingroom],
    ['share', facilities.share],
    ['lock', facilities.lock],
    ['storage', facilities.storage],
  ]

  return (
    <div className="grid gap-2 grid-cols-3 md:grid-cols-5 px-1 pb-2">
      {facilityItems.map(([img, facility], key) => (
        <Option
          icon={
            <>
              <p className="mb-2">
                <img
                  src={`/img/${img}.svg`}
                  alt={facility.name}
                  className="h-8 md:h-20"
                />
              </p>
              <p>{facility.detail1}</p>
              <p>{facility.detail2}</p>
            </>
          }
          key={key}
        >
          <>
            <p>{facility.label}</p>
          </>
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
}): ReactElement {
  return (
    <div className="bg-brand-base text-xs md:text-sm lg:text-base text-white rounded-lg py-2 flex flex-col items-center">
      <div className="h-6 md:h-10 rounded-md flex flex-col justify-center">
        {children}
      </div>
      <div className="flex flex-col justify-center items-center">{icon}</div>
    </div>
  )
}
