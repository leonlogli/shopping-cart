import React from 'react'

import { mountWithTheme } from '../../../utils'

import RestaurantCard from './RestaurantCard'

describe('<RestaurantCard />', () => {
  const wrapper = mountWithTheme(
    <RestaurantCard
      title="Restaurant Principal"
      image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
      category="Repas variés"
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
