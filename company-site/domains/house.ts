export const Rooms = ['a', 'b', 'c', 'd', 'e', 'f', 'domi'] as const

export type Room = typeof Rooms[number]

export const RoomNames: Record<Room, string> = {
  a: '洋室 離れ',
  b: '洋室 (C)',
  c: '書斎付き和室',
  d: '洋室 (A)',
  e: '洋室 (B)',
  f: '共用オフィススペース',
  domi: 'ドミトリー',
}
export const Upto: Record<Room, number> = {
  a: 3,
  b: 0,
  c: 2,
  d: 2,
  e: 2,
  f: 0,
  domi: 1,
}
export const Available: Record<Room, boolean> = {
  a: true,
  b: false,
  c: false,
  d: false,
  e: false,
  f: true,
  domi: true,
}
export const BaseRent = 40000
export const ManageFee = 5000
export const CommonFee = 10000
export const Base = BaseRent + ManageFee + CommonFee
export const Rent: Record<Room, number> = {
  a: 50000,
  b: 0,
  c: 50000,
  d: 35000,
  e: 35000,
  f: 0,
  domi: 15000,
}

export const DetailTexts: Record<Room, string> = {
  a: '庭に面した離れの一室に加え、収納が豊富なサービスルームがついたお部屋です。３名までルームシェアができます',
  b: '管理人室として利用しています',
  c: '唯一の和室です。作業に適した書斎がついているお部屋となります。３名までルームシェアができます',
  d: '2階の個室です。小学校のグラウンドを見下ろす大きなベランダがついています。２名までルームシェアができます',
  e: '2階の個室です。小学校のグラウンドを見下ろす大きなベランダがついています。２名までルームシェアができます',
  f: '共用のオフィススペースです。懸垂器などのトレーニング器具もあり、外部の方も月額契約で利用できます',
  domi: 'ドミトリー部屋でのご案内です。2段ベッドを一床と、収納タンスを使うことができます',
}
