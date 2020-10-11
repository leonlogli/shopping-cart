import React from 'react'
import Head from 'next/head'

import { ROOT_PATH } from '../../config'

const Meta = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="application-name" content="UiResto" />
    <meta name="apple-mobile-web-app-title" content="UiResto" />
    <title>Online Food Ordering cart application</title>
    <meta
      name="description"
      content="Commander vos plats dans les restaurants de l'UIR en un clic"
    />

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ff5722" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#ff5722" />

    {/* Copyright */}
    <meta name="copyright" content="uiresto.com" />
    <meta name="author" content="SuperT" />
    <meta name="web_author" content="SuperT" />

    {/* Open Graph */}
    <meta property="og:url" content={ROOT_PATH} key="url" />
    <meta
      property="og:title"
      content="Commander vos plats dans les restaurants de l'UIR en un clic"
      key="title"
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="UiResto" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image" content="/screenshots/homepage.png" key="image" />
    <meta
      property="og:description"
      content="Rechercher les menus, passer vos commander et suivez leurs status depuis un seul endroit"
      key="description"
    />

    {/* CLOUDINARY */}
    <script
      src="https://widget.cloudinary.com/v2.0/global/all.js"
      type="text/javascript"
    />
  </Head>
)

export default Meta
export { Meta }
