'use client'

import { ReactElement } from 'react'
import {
  Room,
  LivingSpaces,
  getRoomNames,
  Rent,
  Available,
  isAvailable,
  getRoomType,
  RoomType,
} from '../../domains/house'
import { useLanguage } from '../../contexts/LanguageContext'

type RoomInfo = {
  name: string
  rent: number
  available: string | boolean | number
  type: RoomType
}

export function FloorTable({
  selected,
  setRoom,
}: {
  selected: Room
  setRoom: (room: Room) => void
}): ReactElement {
  const { lang } = useLanguage()
  const roomNames = getRoomNames(lang)

  const roomList: RoomInfo[] = LivingSpaces.map((room) => ({
    name: roomNames[room],
    rent: Rent[room],
    available: isAvailable(Available[room], lang),
    type: getRoomType(room),
  }))

  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mb-8 w-full">
        {roomList.map((room, index) => (
          <div
            key={index}
            className={`border border-black cursor-pointer ${
              LivingSpaces[index] === selected
                ? 'font-bold bg-gray-100 text-black'
                : 'text-gray-600'
            } hover:bg-gray-100`}
            onClick={() => setRoom(LivingSpaces[index])}
          >
            <div className="p-2 border-b border-black">
              <span
                className={`text-base ${LivingSpaces[index] === selected ? 'text-black' : 'text-gray-600'}`}
              >
                {room.name}
              </span>
            </div>
            <div className="p-2 flex justify-between items-center">
              <div>
                {room.rent > 0 ? (
                  <span className="text-base text-gray-600">
                    ¥{room.rent.toLocaleString()}
                  </span>
                ) : (
                  <span className="text-base text-gray-600">-</span>
                )}
              </div>
              <div>
                {room.rent === 0 ? (
                  <></>
                ) : room.type === 'dormitory' &&
                  typeof room.available === 'number' ? (
                  <span className="text-gray-600">
                    {room.available > 0
                      ? lang === 'ja'
                        ? `${room.available}床空き`
                        : `${room.available} beds`
                      : lang === 'ja'
                        ? '満室'
                        : 'Full'}
                  </span>
                ) : typeof room.available === 'string' ? (
                  <span className="text-gray-600">{room.available}</span>
                ) : room.available ? (
                  <span className="text-gray-600">
                    {lang === 'ja' ? '空室' : 'Available'}
                  </span>
                ) : (
                  <span className="text-red-600">
                    {lang === 'ja' ? '満室' : 'Occupied'}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
