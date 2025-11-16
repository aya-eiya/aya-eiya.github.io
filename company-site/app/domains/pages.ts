import * as jaPages from './ja/pages'
import * as enPages from './en/pages'
import type { titles as JaTitles } from './ja/pages'
import type { titles as EnTitles } from './en/pages'

export const PageNames = [
  'home',
  //  'house',
  'company',
  'engineering',
  //  'inquiry',
  //  'other',
  //  'community',
  //  'surroundings',
] as const

export type PageName = (typeof PageNames)[number]
export type Lang = 'ja' | 'en'

export function getTitles(lang: Lang): typeof JaTitles | typeof EnTitles {
  return lang === 'ja' ? jaPages.titles : enPages.titles
}

export function isPageName(id: string): id is PageName {
  return PageNames.indexOf(id as PageName) > -1
}
