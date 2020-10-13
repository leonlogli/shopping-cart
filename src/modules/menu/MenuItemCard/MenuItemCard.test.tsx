import React from 'react'

import { mountWithTheme } from '../../../utils'

import MenuItemCard from './MenuItemCard'

describe('<MenuItemCard />', () => {
  const wrapper = mountWithTheme(
    <MenuItemCard
      title="Tacos"
      image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
      price={27}
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
