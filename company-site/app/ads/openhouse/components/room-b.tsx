'use client'

import type { ReactElement } from 'react'

export function RoomBSlide(): ReactElement {
  return (
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_2fB/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">洋室 (B)</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・2階の個室（約6.7畳）</li>
            <li>・グラウンドを見下ろすベランダ付き</li>
            <li>・2名までルームシェア可能</li>
            <li>・85,000円～/月</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function RoomBSlideEn(): ReactElement {
  return (
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_2fB/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">
            Western Room (B)
          </h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・2nd floor room (6.7 tatami mats)</li>
            <li>・Balcony with playground view</li>
            <li>・Up to 2 person sharing</li>
            <li>・from ¥85,000/month</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
