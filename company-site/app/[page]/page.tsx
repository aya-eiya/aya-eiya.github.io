import { ReactElement } from 'react'
import HomePage from '../HomePage'
import { PageNames } from '../domains/pages'

export default function Page(): ReactElement {
  return HomePage()
}

export async function generateStaticParams() {
  return PageNames.map((page) => ({ page }))
}
