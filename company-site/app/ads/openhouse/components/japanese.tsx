'use client'

import type { ReactElement } from 'react'

export function JapaneseRoomSlide(): ReactElement {
  return (
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fJ/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">書斎付き和室</h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・書斎スペース付きの和室</li>
            <li>・作業に適した環境</li>
            <li>・3名までルームシェア可能</li>
            <li>・105,000円～/月</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function JapaneseRoomSlideEn(): ReactElement {
  return (
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden rounded-lg">
        <img
          src="/img/rooms/R_1fJ/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">
            Japanese Room with Study
          </h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・Japanese-style room</li>
            <li>・Dedicated study space</li>
            <li>・Up to 3 person sharing</li>
            <li>・from ¥105,000/month</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
