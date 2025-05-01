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

export const Rooms = [
  'R_1fL',
  'R_1fC',
  'R_1fJ',
  'R_2fA',
  'R_2fB',
  'M_2fDomi',
  'M_1fDomi',
  'F_2fDomi',
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

export const Upto: Record<Room, number> = {
  R_1fL: 3,
  R_1fC: 2,
  R_1fJ: 2,
  R_2fA: 2,
  R_2fB: 2,
  M_2fDomi: 0,
  M_1fDomi: 1,
  F_2fDomi: 1,
}

export type YearMonth = {
  year: number
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export type AvailableState = true | false | YearMonth

export const Available: Record<Room, AvailableState> = {
  R_1fL: true,
  R_1fC: true,
  R_1fJ: false,
  R_2fA: true,
  R_2fB: { year: 2025, month: 6 },
  M_2fDomi: true,
  M_1fDomi: true,
  F_2fDomi: true,
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

export const Rent: Record<Room, number> = {
  R_1fL: 105000,
  R_1fC: 90000,
  R_1fJ: 105000,
  R_2fA: 85000,
  R_2fB: 85000,
  M_2fDomi: 0,
  M_1fDomi: 65000,
  F_2fDomi: 45000,
}

export function getSpecialSales(
  lang: Lang
): Record<Room, { [key: string]: number }[]> {
  const SpecialSalesName =
    lang === 'ja' ? jaHouse.SpecialSalesName : enHouse.SpecialSalesName
  return {
    R_1fL: [{ [SpecialSalesName]: 5000 }],
    R_1fC: [{ [SpecialSalesName]: 5000 }],
    R_1fJ: [{ [SpecialSalesName]: 5000 }],
    R_2fA: [{ [SpecialSalesName]: 5000 }],
    R_2fB: [{ [SpecialSalesName]: 5000 }],
    M_2fDomi: [],
    M_1fDomi: [],
    F_2fDomi: [],
  }
}

export const Images = {
  R_1fL: '/images/rooms/R_1fL.jpg',
  R_1fC: '/images/rooms/R_1fC.jpg',
  R_1fJ: '/images/rooms/R_1fJ.jpg',
  R_2fA: '/images/rooms/R_2fA.jpg',
  R_2fB: '/images/rooms/R_2fB.jpg',
  M_2fDomi: '/images/rooms/M_2fDomi.jpg',
  M_1fDomi: '/images/rooms/M_1fDomi.jpg',
  F_2fDomi: '/images/rooms/F_2fDomi.jpg',
}
