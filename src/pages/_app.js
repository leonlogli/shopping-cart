import React, { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '../store'
import { App } from '..'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function UiRestoApp(props) {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Provider store={store}>
      <noscript>You need to enable JavaScript to run this app</noscript>
      <App>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={persistor}
        >
          <Component {...pageProps} />
        </PersistGate>
      </App>
    </Provider>
  )
}
