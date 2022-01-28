import { ReactElement, ReactText, useEffect } from 'react'

export default function HeadLine({
  id,
  children,
}: {
  id: string
  children: ReactText
}): ReactElement {
  return (
    <>
      <a id={id} className="block relative" />
      <h1 className="mt-16 text-2xl px-2 inline-block bg-gray-50">
        {children}
      </h1>
    </>
  )
}
