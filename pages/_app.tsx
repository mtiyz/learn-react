import React from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '../stores/root'
import App, { AppProps } from 'next/app'

import '../styles/index.css'

const store = setupStore()

class MyApp extends App {
  render (): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
