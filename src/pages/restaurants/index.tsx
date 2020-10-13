import Head from 'next/head'
import React from 'react'

import { PageLayout } from '../../layouts'
import { HomePage } from '../../modules/home'

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <HomePage />
    </PageLayout>
  )
}
