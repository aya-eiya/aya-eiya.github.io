import type {
  RoomNames as JaRoomNames,
  DetailTexts as JaDetailTexts,
} from './ja/house'
import type {
  RoomNames as EnRoomNames,
  DetailTexts as EnDetailTexts,
} from './en/house'
import * as jaHouse from './ja/house'
import * as enHouse from './en/house'
import { staticFiles } from './staticFiles'

export const Rooms = [
  'R_1fL',
  'R_1fC',
  'R_1fJ',
  'R_2fA',
  'R_2fB',
  'M_1fDomi',
  'F_2fDomi',
  'S_2fOfc',
  'S_1fBath',
  'S_1fDk',
  'S_1fEnt',
  'S_1fLiv',
  'S_1fStr',
  'S_1fToi',
  'S_2fBath',
  'S_2fCor',
  'S_2fEvSp',
  'S_2fStr',
  'S_2fToi',
  'S_2f1KStr',
] as const

export type Room = (typeof Rooms)[number]
export type Lang = 'ja' | 'en'

export const isSharedSpace = (room: Room): boolean => room.startsWith('S_')
export const isLivingSpace = (room: Room): boolean => !isSharedSpace(room)

export const SharedSpaces = Rooms.filter(isSharedSpace)
export const LivingSpaces = Rooms.filter(isLivingSpace)

export function getRoomNames(
  lang: Lang
): typeof JaRoomNames | typeof EnRoomNames {
  return lang === 'ja' ? jaHouse.RoomNames : enHouse.RoomNames
}

export function getDetailTexts(
  lang: Lang
): typeof JaDetailTexts | typeof EnDetailTexts {
  return lang === 'ja' ? jaHouse.DetailTexts : enHouse.DetailTexts
}

export type RoomType = 'private' | 'dormitory' | 'shared'

export const getRoomType = (room: Room): RoomType => {
  if (room.startsWith('S_')) return 'shared'
  if (room === 'M_1fDomi' || room === 'F_2fDomi') return 'dormitory'
  return 'private'
}

export type RoomRecord<T> = {
  [K in Room]: T
}

export type RoomCapacity = {
  beds: number // ドミトリー: ベッド数, 個室: 1
  maxResidents: number // ドミトリー: beds と同じ, 個室: ルームシェア可能人数
}

export const Capacity: RoomRecord<RoomCapacity> = {
  R_1fL: { beds: 1, maxResidents: 3 },
  R_1fC: { beds: 1, maxResidents: 2 },
  R_1fJ: { beds: 1, maxResidents: 2 },
  R_2fA: { beds: 1, maxResidents: 2 },
  R_2fB: { beds: 1, maxResidents: 2 },
  M_1fDomi: { beds: 6, maxResidents: 6 },
  F_2fDomi: { beds: 4, maxResidents: 4 },
  S_2fOfc: { beds: 0, maxResidents: 0 },
  S_1fBath: { beds: 0, maxResidents: 0 },
  S_1fDk: { beds: 0, maxResidents: 0 },
  S_1fEnt: { beds: 0, maxResidents: 0 },
  S_1fLiv: { beds: 0, maxResidents: 0 },
  S_1fStr: { beds: 0, maxResidents: 0 },
  S_1fToi: { beds: 0, maxResidents: 0 },
  S_2fBath: { beds: 0, maxResidents: 0 },
  S_2fCor: { beds: 0, maxResidents: 0 },
  S_2fEvSp: { beds: 0, maxResidents: 0 },
  S_2fStr: { beds: 0, maxResidents: 0 },
  S_2fToi: { beds: 0, maxResidents: 0 },
  S_2f1KStr: { beds: 0, maxResidents: 0 },
}

export type YearMonth = {
  year: number
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export type RoomAvailability =
  | { type: 'private'; state: true | false | YearMonth }
  | { type: 'dormitory'; residents: number }
  | { type: 'shared'; state: true }

export const Available: RoomRecord<RoomAvailability> = {
  R_1fL: { type: 'private', state: false },
  R_1fC: { type: 'private', state: { year: 2025, month: 10 } },
  R_1fJ: { type: 'private', state: false },
  R_2fA: { type: 'private', state: false },
  R_2fB: { type: 'private', state: { year: 2025, month: 10 } },
  M_1fDomi: { type: 'dormitory', residents: 0 },
  F_2fDomi: { type: 'dormitory', residents: 1 },
  S_2fOfc: { type: 'shared', state: true },
  S_1fBath: { type: 'shared', state: true },
  S_1fDk: { type: 'shared', state: true },
  S_1fEnt: { type: 'shared', state: true },
  S_1fLiv: { type: 'shared', state: true },
  S_1fStr: { type: 'shared', state: true },
  S_1fToi: { type: 'shared', state: true },
  S_2fBath: { type: 'shared', state: true },
  S_2fCor: { type: 'shared', state: true },
  S_2fEvSp: { type: 'shared', state: true },
  S_2fStr: { type: 'shared', state: true },
  S_2fToi: { type: 'shared', state: true },
  S_2f1KStr: { type: 'shared', state: true },
}

export function isAvailable(
  availability: RoomAvailability,
  lang: Lang,
  currentDate: Date = new Date()
): string | boolean | number {
  if (availability.type === 'dormitory') {
    // For dormitory rooms, return available beds (total beds - current residents)
    for (const [room, avail] of Object.entries(Available)) {
      if (avail === availability) {
        return Capacity[room as Room].beds - availability.residents
      }
    }
    return 0
  }
  if (availability.type === 'shared') {
    return true
  }
  const state = availability.state
  if (state === false || state === true) {
    return state
  }
  const check =
    currentDate.getFullYear() * 100 + currentDate.getMonth() >
    state.year * 100 + state.month
  if (check) {
    return true
  }
  const AvailableSoonText =
    lang === 'ja' ? jaHouse.AvailableSoonText : enHouse.AvailableSoonText
  return AvailableSoonText(state.year, state.month)
}

export const CommonFee = 5000
export const Deposit = 30000
export const ShareRent = 15000

export const Rent: RoomRecord<number> = {
  R_1fL: 105000,
  R_1fC: 90000,
  R_1fJ: 105000,
  R_2fA: 85000,
  R_2fB: 85000,
  M_1fDomi: 65000,
  F_2fDomi: 45000,
  S_2fOfc: 0,
  S_1fBath: 0,
  S_1fDk: 0,
  S_1fEnt: 0,
  S_1fLiv: 0,
  S_1fStr: 0,
  S_1fToi: 0,
  S_2fBath: 0,
  S_2fCor: 0,
  S_2fEvSp: 0,
  S_2fStr: 0,
  S_2fToi: 0,
  S_2f1KStr: 0,
}

export function getSpecialSales(
  lang: Lang
): RoomRecord<{ [key: string]: number }[]> {
  const SpecialSalesName =
    lang === 'ja' ? jaHouse.SpecialSalesName : enHouse.SpecialSalesName
  return {
    R_1fL: [{ [SpecialSalesName]: 5000 }],
    R_1fC: [{ [SpecialSalesName]: 5000 }],
    R_1fJ: [{ [SpecialSalesName]: 5000 }],
    R_2fA: [{ [SpecialSalesName]: 5000 }],
    R_2fB: [{ [SpecialSalesName]: 5000 }],
    M_1fDomi: [],
    F_2fDomi: [],
    S_2fOfc: [],
    S_1fBath: [],
    S_1fDk: [],
    S_1fEnt: [],
    S_1fLiv: [],
    S_1fStr: [],
    S_1fToi: [],
    S_2fBath: [],
    S_2fCor: [],
    S_2fEvSp: [],
    S_2fStr: [],
    S_2fToi: [],
    S_2f1KStr: [],
  }
}

export function getRoomImages(room: Room): string[] {
  const basePath = `img/rooms/${room}/`
  return staticFiles
    .filter((file) => file.startsWith(basePath))
    .map((file) => '/' + file)
    .sort((a, b) => a.localeCompare(b))
}
