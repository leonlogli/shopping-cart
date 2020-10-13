import React from 'react'
import { text } from '@storybook/addon-knobs'

import MenuItemCard from '.'

export default {
  title: 'MenuItemCard',
}

export const Default = () => (
  <MenuItemCard
    title="Tacos Viande hachée"
    image="https://www.clipartmax.com/png/middle/29-295276_clipart-of-restaurant-breakfast-and-foods-transparent-hamburger-and-fries-png.png"
    price={27}
    onClick={() => console.log('clicked')}
    onAdd={() => console.log('add')}
  />
)

export const withDescription = () => (
  <MenuItemCard
    title="Tacos Viande hachée"
    description="Frites + Poissons"
    image="https://www.clipartmax.com/png/middle/29-295276_clipart-of-restaurant-breakfast-and-foods-transparent-hamburger-and-fries-png.png"
    price={27}
  />
)

export const withKnobs = () => (
  <MenuItemCard
    title="Tacos Viande hachée"
    restaurant={text('Restaurant', 'Galicia')}
    description={text('description')}
    image={text('image')}
    price={27}
  />
)
