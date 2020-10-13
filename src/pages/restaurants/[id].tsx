import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux'
import { RestaurantPage } from '../../modules/restaurant'
import { PageLayout } from '../../layouts'
import { restaurantEntriesSelector } from '../../modules/restaurant/state'
import { ErrorPage } from '../../modules/error'

export default function Resto() {
  const router = useRouter()
  const restaurantId = router.query.id
  const { restaurants, error } = useSelector(restaurantEntriesSelector)

  const restaurant = restaurants[restaurantId as any]
  const restoName = restaurant?.name

  if (error) return <ErrorPage error={error} />

  return (
    <PageLayout>
      <Head>
        {restoName && <title>{`${restoName} - Shopping Cart`}</title>}
      </Head>
      <RestaurantPage restaurantId={router.query.id as any} />
    </PageLayout>
  )
}
