import React from 'react'

import ShoppingCartItem from '.'

export default {
  title: 'ShoppingCartItem',
}

export const Default = () => (
  <ShoppingCartItem
    title="Tacos cordon Bleu"
    price={27.0}
    quantity={1}
    resto="ArtChill"
  />
)

export const withOption = () => (
  <ShoppingCartItem
    title="Tacos cordon Bleu"
    price={27.0}
    quantity={1}
    resto="ArtChill"
    options={['Pepsi']}
  />
)

export const withOptions = () => (
  <ShoppingCartItem
    title="Tacos cordon Bleu"
    price={27.0}
    quantity={1}
    resto="ArtChill"
    options={['Pepsi', 'Coca Zero']}
  />
)
