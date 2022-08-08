import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <NextScript />

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
          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
