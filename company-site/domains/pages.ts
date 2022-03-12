export const PageNames = [
  'home',
  'space',
  'house',
  'company',
  'inquiry',
] as const
export type PageName = typeof PageNames[number]

export const titles: Record<PageName, string> = {
  home: 'AY HOUSE',
  space: 'AY HOUSE | レンタルスペース',
  house: 'AY HOUSE | シェアハウス',
  company: 'AY HOUSE | 会社概要',
  inquiry: 'AY HOUSE | お問合せ',
}
export function isPageName(id: string): id is PageName {
  return PageNames.indexOf(id as PageName) > -1
}
