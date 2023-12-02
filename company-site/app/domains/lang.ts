export const AppLang = ['ja', 'en'] as const
export type AppLang = (typeof AppLang)[number]
export const AppLangDefault = 'ja'
