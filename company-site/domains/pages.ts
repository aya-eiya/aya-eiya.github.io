export const titles = {
  home: 'AY HOUSE',
  space: 'AY HOUSE | レンタルスペース',
  house: 'AY HOUSE | シェアハウス',
  company: 'AY HOUSE | 会社概要',
  inquiry: 'AY HOUSE | お問合せ',
} as const
export type PageName = keyof typeof titles
export function isPageName(id: string): id is PageName {
  return Object.keys(titles).indexOf(id) > -1
}
