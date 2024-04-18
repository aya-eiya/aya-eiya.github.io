import { ReactElement } from 'react'
import HomePage from '../HomePage'
import { PageNames, PageName } from '../domains/pages'

export default function Page(): ReactElement {
  return HomePage()
}

export async function generateStaticParams(): Promise<{ page: PageName }[]> {
  return PageNames.map((page) => ({ page }))
}
