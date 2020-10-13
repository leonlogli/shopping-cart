import React from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'
import { SearchResult } from '../modules/search'
import { PageLayout } from '../layouts'

export default function SearchResultPage() {
  const router = useRouter()
  const searchQuery = router.query.search_query

  return (
    <PageLayout>
      <Head>
        <title>Resultat de recherche - Shopping Cart</title>
      </Head>
      <SearchResult searchQuery={searchQuery as string} />
    </PageLayout>
  )
}
