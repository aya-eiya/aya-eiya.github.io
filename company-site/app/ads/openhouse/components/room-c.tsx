'use client'

import type { ReactElement } from 'react'

export function RoomCSlide(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fC/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">洋室 (C)</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・1Fの広めの個室</li>
            <li>・シングル＋αサイズのベッド付き</li>
            <li>・2名までルームシェア可能</li>
            <li>・90,000円～/月</li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fC/2.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export function RoomCSlideEn(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fC/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">
            Western Room (C)
          </h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・Spacious room on 1st floor</li>
            <li>・Includes larger-than-single bed</li>
            <li>・Up to 2 person sharing</li>
            <li>・from ¥90,000/month</li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fC/2.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
