'use client'

import type { ReactElement } from 'react'

export function DormitorySlide(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/F_2fDomi/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">
            女性専用ドミトリー
          </h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・45,000円～</li>
            <li>・独立した玄関・水回り完備</li>
            <li>・収納付きベッドで快適空間</li>
            <li>・同施設内に別途玄関を用意</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/F_2fDomi/2.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/F_2fDomi/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function DormitorySlideEn(): ReactElement {
  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="relative h-2/3 overflow-hidden rounded-lg">
        <img
          src="/img/rooms/F_2fDomi/1.png"
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-black/60 pb-6 pt-12 px-6">
          <h3 className="text-3xl font-bold mb-4 text-shadow">
            Female Dormitory
          </h3>
          <ul className="text-xl space-y-2 text-shadow">
            <li>・from ¥45,000</li>
            <li>・Private entrance & facilities</li>
            <li>・Comfortable bed with storage</li>
            <li>・Separate entrance in the same building</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/F_2fDomi/2.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg">
          <img
            src="/img/rooms/F_2fDomi/3.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
