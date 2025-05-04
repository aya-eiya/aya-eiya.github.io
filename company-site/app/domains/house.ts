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

export type RoomRecord<T> = {
  [K in Room]: T
}

export const Upto: RoomRecord<number> = {
  R_1fL: 3,
  R_1fC: 2,
  R_1fJ: 2,
  R_2fA: 2,
  R_2fB: 2,
  M_1fDomi: 1,
  F_2fDomi: 1,
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

export type YearMonth = {
  year: number
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export type AvailableState = true | false | YearMonth

export const Available: RoomRecord<AvailableState> = {
  R_1fL: { year: 2025, month: 6 },
  R_1fC: true,
  R_1fJ: false,
  R_2fA: true,
  R_2fB: { year: 2025, month: 6 },
  M_1fDomi: true,
  F_2fDomi: true,
  S_2fOfc: true,
  S_1fBath: true,
  S_1fDk: true,
  S_1fEnt: true,
  S_1fLiv: true,
  S_1fStr: true,
  S_1fToi: true,
  S_2fBath: true,
  S_2fCor: true,
  S_2fEvSp: true,
  S_2fStr: true,
  S_2fToi: true,
  S_2f1KStr: true,
}

export function isAvailable(
  state: AvailableState,
  lang: Lang,
  currentDate: Date = new Date()
): string | boolean {
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

export const ImagDir: RoomRecord<string> = {
  R_1fL: '/img/rooms/R_1fL/',
  R_1fC: '/img/rooms/R_1fC/',
  R_1fJ: '/img/rooms/R_1fJ/',
  R_2fA: '/img/rooms/R_2fA/',
  R_2fB: '/img/rooms/R_2fB/',
  M_1fDomi: '/img/rooms/M_1fDomi/',
  F_2fDomi: '/img/rooms/F_2fDomi/',
  S_2fOfc: '/img/rooms/S_2fOfc/',
  S_1fBath: '/img/rooms/S_1fBath/',
  S_1fDk: '/img/rooms/S_1fDk/',
  S_1fEnt: '/img/rooms/S_1fEnt/',
  S_1fLiv: '/img/rooms/S_1fLiv/',
  S_1fStr: '/img/rooms/S_1fStr/',
  S_1fToi: '/img/rooms/S_1fToi/',
  S_2fBath: '/img/rooms/S_2fBath/',
  S_2fCor: '/img/rooms/S_2fCor/',
  S_2fEvSp: '/img/rooms/S_2fEvSp/',
  S_2fStr: '/img/rooms/S_2fStr/',
  S_2fToi: '/img/rooms/S_2fToi/',
  S_2f1KStr: '/img/rooms/S_2f1KStr/',
} as const

export function getRoomImages(room: Room): string[] {
  const basePath = `img/rooms/${room}/`
  return staticFiles
    .filter((file) => file.startsWith(basePath))
    .map((file) => '/' + file)
    .sort((a, b) => a.localeCompare(b))
}
