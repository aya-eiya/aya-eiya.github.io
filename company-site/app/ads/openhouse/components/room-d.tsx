'use client'

import type { ReactElement } from 'react'

export function AnnexSlide(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fL/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">洋室 離れ</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・庭に面した離れの一室</li>
            <li>・収納が豊富なサービスルーム付き</li>
            <li>・3名までルームシェア可能</li>
            <li>・105,000円～/月</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/R_1fL/2.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/R_1fL/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function AnnexSlideEn(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fL/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">Annex Room</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・Room in separate annex building</li>
            <li>・Additional service room with storage</li>
            <li>・Up to 3 person sharing available</li>
            <li>・from ¥105,000/month</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/R_1fL/2.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/R_1fL/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
