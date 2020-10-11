import Head from 'next/head'
import React from 'react'

import { Box } from '../components'

import { PageLayout } from '../layouts'

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>UiResto</title>
      </Head>
      <Box>Home page</Box>
    </PageLayout>
  )
}
