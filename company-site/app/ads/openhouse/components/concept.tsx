'use client'

import type { ReactElement } from 'react'

export function ConceptSlide(): ReactElement {
  return (
    <div className="flex h-full gap-2">
      <div className="w-1/3 bg-brand-dark p-6">
        <h3 className="text-3xl font-bold mb-6">IT×シェアハウス</h3>
        <div className="text-lg space-y-3">
          <p className="leading-relaxed">エンジニアフレンドリーな環境</p>
          <p className="leading-relaxed">学割・エンジニア割引あり</p>
          <p className="leading-relaxed">高速インターネット完備</p>
          <p className="leading-relaxed">共用オフィススペース利用可</p>
          <p className="leading-relaxed">駅から徒歩10分の好立地</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="relative flex-[2] overflow-hidden rounded-lg">
          <img
            src="/img/house01-01.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              src="/img/garden.png"
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              src="/img/surroundings/1.png"
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function ConceptSlideEn(): ReactElement {
  return (
    <div className="flex h-full gap-2">
      <div className="w-1/3 bg-gradient-to-br from-black to-black/90 p-6">
        <h3 className="text-3xl font-bold mb-6 text-shadow">
          IT × Share House
        </h3>
        <div className="text-lg space-y-3 text-shadow">
          <p className="leading-relaxed text-shadow">
            Engineer-friendly environment
          </p>
          <p className="leading-relaxed text-shadow">
            Student & engineer discounts
          </p>
          <p className="leading-relaxed text-shadow">High-speed internet</p>
          <p className="leading-relaxed text-shadow">
            Co-working space available
          </p>
          <p className="leading-relaxed text-shadow">
            10 min walk from station
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="relative flex-[2] overflow-hidden rounded-lg">
          <img
            src="/img/house01-01.png"
            alt=""
            className="absolute w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              src="/img/garden.png"
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="relative flex-1 overflow-hidden rounded-lg">
            <img
              src="/img/surroundings/1.png"
              alt=""
              className="absolute w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
