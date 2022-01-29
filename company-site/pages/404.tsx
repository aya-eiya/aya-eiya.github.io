import { ReactElement, useEffect, useState } from 'react'
import Error from 'next/error'
import { useRouter } from 'next/router'
import { isPageName } from '../domains/pages'

export default function _404(): ReactElement {
  const { asPath, replace } = useRouter()
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
