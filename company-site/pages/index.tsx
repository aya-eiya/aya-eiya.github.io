import { ReactElement } from 'react'
import Company from '../components/contents/company'
import Home from '../components/contents/home'
import House from '../components/contents/house'
import Inquiry from '../components/contents/inquiry'
import Office from '../components/contents/office'
import Space from '../components/contents/space'
import Meta from '../components/functions/meta'
import Ogp from '../components/functions/ogp'
import Layout from '../components/Layout'
import Surroundings from '../components/contents/surroundings'

export default function HomePage(): ReactElement {
  return (
    <>
      <Ogp />
      <Meta />
      <Layout>
        <Home />
        <hr className="h-44 border-0" />
        <House />
        <hr className="h-44 border-0" />
        <Space />
        <hr className="h-44 border-0" />
        <Office />
        <hr className="h-44 border-0" />
        <Surroundings />
        <hr className="h-44 border-0" />
        <Company />
        <hr className="h-44 border-0" />
        <Inquiry />
      </Layout>
    </>
  )
}
