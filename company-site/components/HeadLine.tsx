import { ReactElement, ReactText } from 'react'

export default function HeadLine({
  children,
  background,
}: {
  children: ReactText
  background: string
}): ReactElement {
  return (
    <div
      className={
        'bg-cover bg-center h-28 flex items-center justify-center bg-gray-300 w-full'
      }
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-9/12">
        <h1 className="text-2xl p-3 inline-block bg-gray-50">{children}</h1>
      </div>
    </div>
  )
}
