export const Rooms = ['a', 'b', 'c', 'd', 'e', 'domi'] as const

export type Room = typeof Rooms[number]

export const RoomNames: Record<Room, string> = {
  a: '洋室 離れ',
  b: '洋室 (C)',
  c: '書斎付き和室',
  d: '洋室 (A)',
  e: '洋室 (B)',
  domi: 'ドミトリー',
}
export const Upto: Record<Room, number> = {
  a: 3,
  b: 0,
  c: 2,
  d: 2,
  e: 2,
  domi: 1,
}
export const Base = 55000
export const Rent: Record<Room, number> = {
  a: 50000,
  b: 0,
  c: 50000,
  d: 35000,
  e: 35000,
  domi: 15000,
}

export const DetailTexts: Record<Room, string> = {
  a: '庭に面した離れの一室に加え、収納が豊富なサービスルームがついたお部屋です。３名までルームシェアができます。',
  b: '管理人室として利用しています。',
  c: '唯一の和室です。作業に適した書斎がついているお部屋となります。３名までルームシェアができます。',
  d: '2階の個室です。小学校のグラウンドを見下ろす大きなベランダがついています。２名までルームシェアができます。',
  e: '2階の個室です。小学校のグラウンドを見下ろす大きなベランダがついています。２名までルームシェアができます。',
  domi: 'ドミトリー部屋でのご案内です。2段ベッドを一床と、収納タンスを使うことができます。',
}