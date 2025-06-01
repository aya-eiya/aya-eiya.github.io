import type { StaticFile } from '../../../domains/staticFiles'

export type SlideLayout = 'single' | 'dual' | 'triple' | 'quad' | 'image-text'

export type SlideItem = {
  type: 'image' | 'text'
  content: StaticFile
  title?: string
  description?: string[]
  className?: string
  overlay?: boolean
}

export type Slide = {
  key: string
  layout: SlideLayout
  items: SlideItem[]
}
