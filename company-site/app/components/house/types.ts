import { Lang } from '../../domains/house'

export type FacilityInfo = {
  name: string
  detail1: string
  detail2: string
  label: string
}

export type Facilities = Record<string, FacilityInfo>

export type FAQ = {
  title: string
  items: Array<{
    q: string
    a: string
  }>
}

export type TextContent = {
  title: string
  livingSpace: string
  showPhotos: string
  sharedSpace: string
  houseName: string
  houseType: string
  description1: string
  description2: string
  description3: string
  description4: string
  eventLink: string
  description5: string
  selectRoom: string
  full: string
  initialCost: string
  deposit: string
  monthlyFee: string
  rent: string
  commonFee: string
  campaign: string
  occupants: string
  people: string
  total: string
  dormitoryNote: string
  femaleDormitoryNote: string
  faq: FAQ
  facilities: Facilities
}

export type Texts = Record<Lang, TextContent>
