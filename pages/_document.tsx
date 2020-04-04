import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const globalStyle = `
`

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />

          <link rel='stylesheet' href='https://unpkg.com/ress/dist/ress.min.css' />
          <style>{globalStyle}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
