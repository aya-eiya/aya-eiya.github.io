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

export const RoomNames: Record<Room, string> = {
  R_1fL: '洋室 離れ',
  R_1fC: '洋室 (C)',
  R_1fJ: '書斎付き和室',
  R_2fA: '洋室 (A)',
  R_2fB: '洋室 (B)',
  M_2fDomi: '共用オフィス',
  M_1fDomi: '男子ドミトリー',
  F_2fDomi: '女子ドミトリー',
}
export const Upto: Record<Room, number> = {
  R_1fL: 3,
  R_1fC: 0,
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
  R_1fC: false,
  R_1fJ: false,
  R_2fA: { year: 2023, month: 9 },
  R_2fB: { year: 2023, month: 9 },
  M_2fDomi: true,
  M_1fDomi: true,
  F_2fDomi: { year: 2023, month: 9 },
}
export function isAvailable(
  state: AvailableState,
  currentDate: Date = new Date()
): boolean | string {
  if (state === false || state === true) {
    return state
  }
  const check =
    currentDate.getFullYear() * 100 + currentDate.getMonth() >
    state.year * 100 + state.month
  if (check) {
    return true
  }
  return `${state.year}年${state.month}月 空予定`
}
export const CommonFee = 5000
export const Deposit = 30000
export const ShareRent = 15000
export const Rent: Record<Room, number> = {
  R_1fL: 105000,
  R_1fC: 0,
  R_1fJ: 105000,
  R_2fA: 85000,
  R_2fB: 85000,
  M_2fDomi: 0,
  M_1fDomi: 65000,
  F_2fDomi: 45000,
}
export const SpecialSales: Record<Room, { [key in string]: number }[]> = {
  R_1fL: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 5000,
    },
  ],
  R_1fC: [],
  R_1fJ: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 5000,
    },
  ],
  R_2fA: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 5000,
    },
  ],
  R_2fB: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 5000,
    },
  ],
  M_2fDomi: [],
  M_1fDomi: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 3000,
    },
  ],
  F_2fDomi: [
    {
      レンタルスペース協力費: 5000,
    },
    {
      '学割 or エンジニア割': 5000,
    },
  ],
}

export const DetailTexts: Record<Room, string> = {
  R_1fL:
    '庭に面した離れの一室に加え、収納が豊富なサービスルームがついたお部屋です。3名までルームシェアができます',
  R_1fC: '管理人室として利用しています',
  R_1fJ:
    '唯一の和室です。作業に適した書斎がついているお部屋となります。3名までルームシェアができます',
  R_2fA:
    '2階の個室(≒6.7畳/10.4平米)です。小学校のグラウンドを見下ろす大きなベランダがついています。2名までルームシェアができます',
  R_2fB:
    '2階の個室(≒6.7畳/10.4平米)です。小学校のグラウンドを見下ろす大きなベランダがついています。2名までルームシェアができます',
  M_2fDomi:
    '共用のオフィススペースです。懸垂器などのトレーニング器具もあり、外部の方もコワーキングスペースとして月額契約で利用できます',
  M_1fDomi:
    '男性用のドミトリーです。2段ベッドを一床と収納タンスが占有です。一室を最大6名で共有します。※1) ドミトリールームを一人での利用の場合は、賃料に月額3万円が加算されます',
  F_2fDomi:
    '女性用のドミトリーです。同施設内に別途玄関を備えた一室を最大4名で共有します。女性ドミトリー入居者専用の洗濯機、浴室、トイレ、ベランダ、キッチンルームの備えがあります。他の部屋との共用の設備もお使いいただけます。 ※2) ドミトリールームを一人での利用の場合は、賃料に月額2万円が加算されます',
}
