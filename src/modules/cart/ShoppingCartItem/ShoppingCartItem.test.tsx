import React from 'react'

import { mountWithTheme } from '../../../utils'

import ShoppingCartItem from './ShoppingCartItem'

describe('<ShoppingCartItem />', () => {
  const wrapper = mountWithTheme(
    <ShoppingCartItem
      title="Tacos cordon Bleu"
      price={27.0}
      quantity={1}
      resto="ArtChill"
      onIncrement={jest.fn()}
      onDecrement={jest.fn()}
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
