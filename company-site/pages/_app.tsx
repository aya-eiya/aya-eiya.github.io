import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P626NSEPMZ"
        strategy="beforeInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/script/analytics.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/script/chat.js"
        strategy="lazyOnload"
      ></Script>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
