import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P626NSEPMZ"
          ></script>
          <script type="text/javascript" src="/script/analytics.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <script type="text/javascript" src="/script/chat.js"></script>
          <script type="text/javascript" src="/script/replacer.404.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
