'use client'

import type { ReactElement } from 'react'

export function FacilitiesSlide(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/S_1fDk/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">共用スペース</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・キッチン＆ダイニング</li>
            <li>・リビング＆コワーキング</li>
            <li>・マルチパーパススペース</li>
            <li>・設備充実の快適空間</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/S_1fDk/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/S_1fDk/4.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function FacilitiesSlideEn(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/S_1fDk/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">Common Spaces</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・Kitchen & Dining</li>
            <li>・Living & Co-working</li>
            <li>・Multi-purpose Space</li>
            <li>・Well-equipped comfortable space</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/S_1fDk/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/S_1fDk/4.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
