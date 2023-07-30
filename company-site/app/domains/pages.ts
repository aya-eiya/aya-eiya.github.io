export const PageNames = [
  'home',
  'space',
  'house',
  'company',
  'inquiry',
  'office',
] as const
export type PageName = (typeof PageNames)[number]

export const titles: Record<PageName, string> = {
  home: 'AY HOUSE',
  company: 'AY HOUSE | 会社概要',
  house: 'AY HOUSE | シェアハウス',
  inquiry: 'AY HOUSE | お問合せ',
  space: 'AY HOUSE | レンタルスペース',
  office: 'AY HOUSE | コワーキングスペース',
}
export function isPageName(id: string): id is PageName {
  return PageNames.indexOf(id as PageName) > -1
}
