import { ReactElement } from 'react'
import HomePage from '.'
import { PageNames } from '../domains/pages'

export default function Page(): ReactElement {
  return HomePage()
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  return {
    paths: PageNames.map((page) => ({
      params: { page },
    })),
    fallback: true, // false or 'blocking'
  }
}
