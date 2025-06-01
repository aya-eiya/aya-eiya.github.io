'use client'

import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import type { AppLang } from '../../domains/lang'

import { ConceptSlide, ConceptSlideEn } from './components/concept'
import { AnnexSlide, AnnexSlideEn } from './components/room-d'
import { JapaneseRoomSlide, JapaneseRoomSlideEn } from './components/japanese'
import { RoomCSlide, RoomCSlideEn } from './components/room-c'
import { RoomASlide, RoomASlideEn } from './components/room-a'
import { RoomBSlide, RoomBSlideEn } from './components/room-b'
import { DormitorySlide, DormitorySlideEn } from './components/dormitory'
import { FacilitiesSlide, FacilitiesSlideEn } from './components/facilities'

type SlideTransitionState = {
  current: number
  next: number
  isTransitioning: boolean
}

function useSlideTransition(
  length: number,
  interval: number
): SlideTransitionState {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % length)
        setIsTransitioning(false)
      }, 1000)
    }, interval)
    return () => clearInterval(timer)
  }, [length, interval])

  return {
    current: currentIndex,
    next: (currentIndex + 1) % length,
    isTransitioning,
  }
}

const slides: Record<AppLang, Array<() => ReactElement>> = {
  ja: [
    ConceptSlide,
    DormitorySlide,
    AnnexSlide,
    RoomCSlide,
    JapaneseRoomSlide,
    RoomASlide,
    RoomBSlide,
    FacilitiesSlide,
  ],
  en: [
    ConceptSlideEn,
    DormitorySlideEn,
    AnnexSlideEn,
    RoomCSlideEn,
    JapaneseRoomSlideEn,
    RoomASlideEn,
    RoomBSlideEn,
    FacilitiesSlideEn,
  ],
}

const qrCodes: Record<
  AppLang,
  Array<{
    src: string
    alt: string
    title: string
  }>
> = {
  ja: [
    {
      src: 'img/contacts/line_qr/m.png',
      alt: 'LINEで問い合わせ',
      title: 'LINE',
    },
    {
      src: 'img/contacts/instagram_qr/m.png',
      alt: 'Instagramで最新情報をチェック',
      title: 'Instagram',
    },
    {
      src: 'img/contacts/discord_qr/m.png',
      alt: 'Discordでコミュニティに参加',
      title: 'Discord',
    },
  ],
  en: [
    {
      src: 'img/contacts/line_qr/m.png',
      alt: 'Contact via LINE',
      title: 'LINE',
    },
    {
      src: 'img/contacts/instagram_qr/m.png',
      alt: 'Check latest updates on Instagram',
      title: 'Instagram',
    },
    {
      src: 'img/contacts/discord_qr/m.png',
      alt: 'Join our Discord community',
      title: 'Discord',
    },
  ],
} as const

function QRCodeOverlay(): ReactElement {
  const { lang } = useLanguage()
  const codes = qrCodes[lang as AppLang]

  return (
    <div className="absolute right-4 bottom-4 flex gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg z-50">
      {codes.map((qr, i) => (
        <div key={i} className="flex flex-col items-center">
          <img
            src={`/${qr.src}`}
            alt={qr.alt}
            className="w-[120px] h-[120px] bg-white p-2 rounded-lg"
          />
          <p className="mt-2 text-sm font-medium text-white text-shadow">
            {qr.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function OpenHouseSlideshow(): ReactElement {
  const { lang } = useLanguage()
  const currentSlides = slides[lang]
  const transition = useSlideTransition(currentSlides.length, 5000)

  return (
    <main className="h-screen bg-black text-white overflow-hidden p-4">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <div className="relative w-full h-full overflow-hidden">
            {[
              {
                Slide: currentSlides[transition.current],
                offset: transition.isTransitioning ? -100 : 0,
              },
              {
                Slide: currentSlides[transition.next],
                offset: transition.isTransitioning ? 0 : 100,
              },
            ].map(({ Slide, offset }) => (
              <div
                key={offset}
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(${offset}%)`,
                }}
              >
                <Slide />
              </div>
            ))}
          </div>
        </div>
        <QRCodeOverlay />
      </div>
    </main>
  )
}
