'use client'

import { ReactElement, useEffect, useState } from 'react'
import Error from 'next/error'
import { useRouter, useParams, usePathname } from 'next/navigation'
import { isPageName } from './domains/pages'

export default function _404(): ReactElement {
  const { replace } = useRouter()
  const pathName = usePathname()
  const params = useParams()
  const asPath =
    pathName + '?' + Object.keys(params).map((key) => `${key}=${params[key]}`)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!isLoading) {
      return
    }
    const id = asPath.replace(/^\/(\w+)/, '$1')
    console.log(id)
    if (isPageName(id)) {
      replace(`/${id}`)
      return
    }
    setIsLoading(false)
  }, [isLoading, asPath, replace])
  if (isLoading) return <></>
  return <Error statusCode={404} />
}
