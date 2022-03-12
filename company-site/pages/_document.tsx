import Document, { Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <body>
          <Main />
          <NextScript />

          <div id="fb-root"></div>
          <div id="fb-customer-chat" className="fb-customerchat"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
