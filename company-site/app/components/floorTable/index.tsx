'use client'

import { ReactElement } from 'react'
import {
  Room,
  Rooms,
  getRoomNames,
  Rent,
  Available,
  isAvailable,
} from '../../domains/house'
import { useLanguage } from '../../contexts/LanguageContext'

type RoomInfo = {
  name: string
  rent: number
  available: string | boolean
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

  const roomList: RoomInfo[] = Rooms.map((room) => ({
    name: roomNames[room],
    rent: Rent[room],
    available: isAvailable(Available[room], lang),
  }))

  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mb-8 w-full">
        {roomList.map((room, index) => (
          <div
            key={index}
            className={`border border-black cursor-pointer ${
              Rooms[index] === selected
                ? 'font-bold bg-gray-100 text-black'
                : 'text-gray-600'
            } hover:bg-gray-100`}
            onClick={() => setRoom(Rooms[index])}
          >
            <div className="p-2 border-b border-black">
              <span
                className={`text-base ${Rooms[index] === selected ? 'text-black' : 'text-gray-600'}`}
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
                {typeof room.available === 'string' ? (
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
