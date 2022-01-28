import { ReactElement, useEffect, useState } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { isPageName } from '../domains/pages'

export default function _404(): ReactElement {
  const { pathname, query, replace } = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!isLoading) {
      return
    }
    const id = query.page ? String(query.page) : pathname.replace(/^\//, '')
    console.log({ isLoading, id })
    if (isPageName(id)) {
      replace(`/?from=${id}`)
    }
    setIsLoading(false)
  }, [isLoading, pathname, query, replace])
  if (isLoading) return <></>
  return <Error statusCode={404} />
}
