'use client'

import { ReactElement } from 'react'

export default function HeadLine({
  id,
  children,
}: {
  id: string
  children: string | number
}): ReactElement {
  return (
    <>
      <hr id={id} className="block relative invisible" />
      <h1 className="mt-16 text-2xl px-2 inline-block">{children}</h1>
    </>
  )
}
