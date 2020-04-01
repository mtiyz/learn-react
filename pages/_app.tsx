import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../store'
import App, { AppProps } from 'next/app'

import '../styles/index.css'
// ストアを作成
const store = setupStore()

class MyApp extends App {
  render (): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
      // Provider で囲んで store を渡す
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
