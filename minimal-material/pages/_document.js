/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Document, {
  Head, Html, Main, NextScript
} from 'next/document'

/* import styles in _app, not in doc https://github.com/zeit/next-plugins/issues/282#issuecomment-436661879 */

export default class extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  // eslint-disable-next-line class-methods-use-this
  render() {
    return <Html>
      <Head>
        <meta
          name="viewport"
          // eslint-disable-next-line max-len
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"
        />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet"/>
        <meta charSet="utf-8"/>
        {/*
          // https://github.com/zeit/next-plugins/issues/282#issuecomment-432498888
          process.env.NODE_ENV !== 'production'
          && <link rel="stylesheet" type="text/css" href={'/_next/styling/styles.chunk.css?v=' + Date.now()} />
        */}
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  }
}
