import { Lang } from '../../domains/house'
import { Facilities } from './types'

type FacilitiesContent = Record<Lang, Facilities>

export const facilitiesContent: FacilitiesContent = {
  ja: {
    station: {
      name: '最寄り駅',
      detail1: '徒歩',
      detail2: '3分',
      label: '旗の台駅',
    },
    laundry: {
      name: '洗濯機',
      detail1: '縦型',
      detail2: '2台',
      label: '洗濯機',
    },
    dryer: {
      name: '衣類乾燥機',
      detail1: 'ガス',
      detail2: '1台',
      label: '衣類乾燥機',
    },
    kitchen: {
      name: 'キッチン',
      detail1: 'ガス',
      detail2: '3口',
      label: 'キッチン',
    },
    bicycle: {
      name: '駐輪スペース',
      detail1: '一人',
      detail2: '1台',
      label: '駐輪スペース',
    },
    internet: {
      name: 'ネット環境',
      detail1: '光回線',
      detail2: 'Wifi',
      label: 'ネット環境',
    },
    bathroom: {
      name: 'トイレ',
      detail1: '3ヶ所',
      detail2: '(シャワートイレ)',
      label: 'トイレ',
    },
    sink: {
      name: '洗面所',
      detail1: '2ヶ所',
      detail2: '兼脱衣所',
      label: '洗面所',
    },
    bath: {
      name: '浴室',
      detail1: '2ヶ所',
      detail2: '',
      label: '風呂・シャワー',
    },
    floor: {
      name: '階数',
      detail1: '2階',
      detail2: ' ',
      label: '階数',
    },
    livingroom: {
      name: '共用リビング',
      detail1: '共用',
      detail2: '1階',
      label: 'リビング',
    },
    share: {
      name: '個室シェア',
      detail1: '最大',
      detail2: '3名',
      label: 'ルームシェア対応',
    },
    lock: {
      name: '玄関',
      detail1: '玄関',
      detail2: '個室',
      label: 'オートロック対応',
    },
    storage: {
      name: 'トランクルーム',
      detail1: 'あり',
      detail2: '(有料)',
      label: 'トランクルーム',
    },
  },
  en: {
    station: {
      name: 'Nearest Station',
      detail1: 'Walk',
      detail2: '3min',
      label: 'Hatanodai Station',
    },
    laundry: {
      name: 'Washing Machine',
      detail1: 'Vertical',
      detail2: '2 units',
      label: 'Washing Machine',
    },
    dryer: {
      name: 'Clothes Dryer',
      detail1: 'Gas',
      detail2: '1 unit',
      label: 'Clothes Dryer',
    },
    kitchen: {
      name: 'Kitchen',
      detail1: 'Gas',
      detail2: '3 burners',
      label: 'Kitchen',
    },
    bicycle: {
      name: 'Bicycle Parking',
      detail1: 'Per person',
      detail2: '1 space',
      label: 'Bicycle Parking',
    },
    internet: {
      name: 'Internet',
      detail1: 'Fiber',
      detail2: 'Wifi',
      label: 'Internet',
    },
    bathroom: {
      name: 'Bathroom',
      detail1: '3 rooms',
      detail2: '(Toilet)',
      label: 'Bathroom',
    },
    sink: {
      name: 'Bathroom',
      detail1: '2 rooms',
      detail2: '(Change Area)',
      label: 'Bathroom',
    },
    bath: {
      name: 'Bathroom',
      detail1: '2 rooms',
      detail2: '(Shower Room)',
      label: 'Bathroom',
    },
    floor: {
      name: 'Floors',
      detail1: '2F',
      detail2: ' ',
      label: 'Floors',
    },
    livingroom: {
      name: 'Shared Living',
      detail1: 'Shared',
      detail2: '1F',
      label: 'Living Room',
    },
    share: {
      name: 'Room Share',
      detail1: 'Up to',
      detail2: '3 people',
      label: 'Room Share',
    },
    lock: {
      name: 'Entrance',
      detail1: 'Main',
      detail2: 'Private',
      label: 'Auto Lock',
    },
    storage: {
      name: 'Storage',
      detail1: 'Available',
      detail2: '(Paid)',
      label: 'Storage Room',
    },
  },
}
