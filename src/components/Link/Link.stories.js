import React from 'react'
import Link from './Link'

export default {
  title: 'Link',
}

export const RoutingLink = () => <Link href="/home">Routing Link</Link>

export const NonRoutingLink = () => (
  <Link to="http//test.com">Non Routing Link</Link>
)
