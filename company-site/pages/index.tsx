import Head from 'next/head'
import { ReactElement, useState } from 'react'
import Company from '../components/contents/company'
import Home from '../components/contents/home'
import House from '../components/contents/house'
import Inquiry from '../components/contents/inquiry'
import Space from '../components/contents/space'
import Layout from '../components/Layout'

export default function HomePage(): ReactElement {
  return (
    <>
      <Layout>
        <Home />
        <hr className="h-44 border-0" />
        <House />
        <hr className="h-44 border-0" />
        <Space />
        <hr className="h-44 border-0" />
        <Company />
        <hr className="h-44 border-0" />
        <Inquiry />
      </Layout>
    </>
  )
}
