'use client'

import { ReactElement, useState, useRef, useCallback } from 'react'
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
  getRoomImages,
  SharedSpaces,
  LivingSpaces,
} from '../../domains/house'
import { FloorPlan } from '../floorPlan'
import { FloorTable } from '../floorTable'
import { currencyFormat } from '../../domains/number'
import Link from 'next/link'
import { useLanguage } from '../../contexts/LanguageContext'
import { ImageModal } from '../imageModal'
import { FAQ } from '../faq'
import { OptionList } from '../optionsList'
import { texts } from '../house/texts'

const defaultRNum = Rooms.reduce(
  (i, r) => ({ ...i, [r]: 1 }),
  {} as typeof Upto
)

export default function House(): ReactElement {
  const { lang } = useLanguage()
  const [room, setRoom] = useState('a' as Room)
  const [rnum, setRNum] = useState(defaultRNum)
  const [isScrolling, setIsScrolling] = useState(false)
  const [modalImages, setModalImages] = useState<string[]>([])
  const [modalAlt, setModalAlt] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const roomDetailsRef = useRef<HTMLDivElement>(null)

  const openModal = useCallback((images: string[], alt: string) => {
    setModalImages(images)
    setModalAlt(alt)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalImages([])
    setModalAlt('')
  }, [])
  const t = texts[lang]

  const handleRoomChange = (newRoom: Room): void => {
    setRoom(newRoom)
    setIsScrolling(true)
    if (roomDetailsRef.current) {
      const element = roomDetailsRef.current
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setTimeout(() => setIsScrolling(false), 1000)
  }

  const roomNames = getRoomNames(lang)
  const detailTexts = getDetailTexts(lang)
  const specialSales = getSpecialSales(lang)

  return (
    <>
      <HeadLine id="house">{t.title}</HeadLine>
      <div className="mt-10 mx-auto">
        <h2 className="px-2 md:px-0 text-xl my-4">{t.houseName}</h2>
        <div className="md:hidden">
          <img
            src="/img/house01-01.png"
            alt="House Image"
            className="w-full h-auto mb-4"
          />
        </div>
        <div className="md:bg-right md:bg-no-repeat md:bg-[url(/img/house01-01.png)] mb-4">
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
                      className="inline-block align-sub bg-[url(/img/icons/link.svg)] bg-no-repeat w-4 h-4 ml-1"
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
          <div>
            <FloorTable selected={room} setRoom={handleRoomChange} />
            <h4 className="text-lg mt-2 mb-4">{t.livingSpace}</h4>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
              {LivingSpaces.map((roomKey) => {
                const images = getRoomImages(roomKey)
                if (images.length === 0) return null

                return (
                  <div
                    key={roomKey}
                    className="aspect-video relative group cursor-pointer"
                    onClick={() => {
                      handleRoomChange(roomKey)
                      openModal(images, roomNames[roomKey])
                    }}
                  >
                    <img
                      src={images[0]}
                      alt={`Room ${roomNames[roomKey]}`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {roomNames[roomKey]}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <p className="px-2 pb-4 text-sm">{t.selectRoom}</p>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5">
              <div className="floor-map">
                <FloorPlan selected={room} setRoom={handleRoomChange} />
              </div>
            </div>
            {isScrolling && (
              <div className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
            <div ref={roomDetailsRef} className="room-details md:w-2/5">
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
                    <h3 className="text-lg pb-4">
                      {roomNames[key]}
                      {!comment && (
                        <>
                          {' '}
                          <span className="text-red-500">({t.full})</span>
                        </>
                      )}
                      {typeof comment === 'string' && <> {comment}</>}
                    </h3>
                    <div className="m-2 mt-0 rounded-xs border border-gray-400 p-2 text-sm flex justify-between items-start">
                      <div>{detailTexts[key]}</div>
                      <button
                        className="ml-4 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm flex items-center whitespace-nowrap"
                        onClick={() => {
                          const images = getRoomImages(key)
                          if (images.length > 0) {
                            openModal(images, roomNames[key])
                          }
                        }}
                      >
                        {t.showPhotos}
                      </button>
                    </div>
                    <div
                      className={
                        Rent[key] > 0
                          ? 'px-4 md:grid md:grid-cols-2 gap-y-2'
                          : 'hidden'
                      }
                    >
                      <h5 className="md:col-span-2 text-lg pb-1">
                        {t.initialCost}
                      </h5>
                      <div className="pl-2">{t.deposit}:</div>
                      <div className="text-right">
                        {currencyFormat(Deposit)} {lang === 'ja' ? '円' : 'JPY'}
                      </div>
                      <h5 className="md:col-span-2 text-lg pb-1">
                        {t.monthlyFee}
                      </h5>
                      <div className="pl-2">{t.rent}:</div>
                      <div className="text-right">
                        {currencyFormat(Rent[key])}{' '}
                        {lang === 'ja' ? '円' : 'JPY'}
                      </div>
                      <div className="pl-2">{t.commonFee}:</div>
                      <div className="text-right">
                        {currencyFormat(CommonFee)}{' '}
                        {lang === 'ja' ? '円' : 'JPY'}
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
                                  {key}: -{currencyFormat(c[key])}{' '}
                                  {lang === 'ja' ? '円' : 'JPY'}
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
        <h4 className="text-lg mt-8 mb-4">{t.sharedSpace}</h4>
        <div className="mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
          {SharedSpaces.map((roomKey) => {
            const images = getRoomImages(roomKey)
            if (images.length === 0) return null

            return (
              <div
                key={roomKey}
                className="aspect-video relative group cursor-pointer"
                onClick={() => {
                  handleRoomChange(roomKey)
                  openModal(images, roomNames[roomKey])
                }}
              >
                <img
                  src={images[0]}
                  alt={`Room ${roomNames[roomKey]}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  {roomNames[roomKey]}
                </div>
              </div>
            )
          })}
        </div>
        <hr className="border-b md:mt-4 mb-1" />
        <div>{t.femaleDormitoryNote}</div>
      </div>
      <div className="px-2 mx-auto pt-4">
        <FAQ />
      </div>
      <ImageModal
        images={modalImages}
        alt={modalAlt}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}
