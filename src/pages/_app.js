import React, { useEffect } from 'react'
import nextCookie from 'next-cookies'
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

export default function ShoppingCartApp(props) {
  const { Component, pageProps, initialTheme } = props

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
      <App initialTheme={initialTheme}>
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

ShoppingCartApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {}
  const initialTheme = nextCookie(ctx).theme

  if (Component.getInitialProps) {
    Object.assign(pageProps, await Component.getInitialProps(ctx))
  }

  return { pageProps, initialTheme }
}
