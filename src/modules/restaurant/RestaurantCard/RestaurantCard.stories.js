import React from 'react'

import RestaurantCard from '.'

export default {
  title: 'RestaurantCard',
}

export const Default = () => (
  <RestaurantCard
    title="Restaurant Principal"
    image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
    category="Repas variés"
  />
)

export const closed = () => (
  <RestaurantCard
    title="Restaurant Principal"
    image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
    category="Repas variés"
    open={false}
  />
)
