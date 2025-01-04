import { ReactElement } from 'react'
import Company from './components/contents/company'
import Home from './components/contents/home'
import House from './components/contents/house'
import Inquiry from './components/contents/inquiry'
import Surroundings from './components/contents/surroundings'
import Engineering from './components/contents/engineering'
import Other from './components/contents/other'

export default function HomePage(): ReactElement {
  return (
    <>
      <Home />
      <hr className="h-44 border-0" />
      <House />
      <hr className="h-44 border-0" />
      <Surroundings />
      <hr className="h-44 border-0" />
      <Company />
      <hr className="h-44 border-0" />
      <Engineering />
      <hr className="h-44 border-0" />
      <Inquiry />
      <hr className="h-44 border-0" />
      <Other />
    </>
  )
}
