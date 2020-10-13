import React from 'react'

import MenuItemDialog from '.'

export default {
  title: 'MenuItemDialog',
}

const item = {
  id: 'restaurant-principal-t1',
  name: 'Tacos Viande Hachée',
  image: '/menus/Tacos-Viande-Hachée.png',
  price: 30,
  options: [
    {
      id: 1,
      name: 'Choisissez votre Boisson',
      min: 1,
      max: 1,
      items: [
        { id: 1, name: 'Pepsi' },
        { id: 2, name: '7 up' },
        { id: 3, name: 'Mirinda Citron' },
        { id: 4, name: "Bouteille d'eau" },
        { id: 5, name: 'Orangina' },
        { id: 6, name: 'Lipton' },
      ],
    },
    {
      id: 2,
      name: 'Choisissez la sauce',
      min: 1,
      max: 2,
      items: [
        { id: 8, name: 'Algérienne' },
        { id: 9, name: 'Biggy' },
        { id: 10, name: 'Barbecue' },
        { id: 11, name: 'Blanche' },
        { id: 12, name: 'Fromagère' },
        { id: 13, name: 'Samouraï' },
        { id: 14, name: 'Andalouse' },
      ],
    },
    {
      id: 3,
      name: 'Souhaitez vous un supplément ?',
      max: 3,
      items: [
        { id: 15, name: 'Charcuterie ', price: 5 },
        { id: 16, name: 'Supplément sauce', price: 1 },
        { id: 17, name: 'Frites', price: 1 },
        { id: 18, name: 'Supplément Fromage', price: 3 },
      ],
    },
  ],
}

export const Default = () => <MenuItemDialog open item={item} />

export const WithoutOptions = () => (
  <MenuItemDialog open item={{ ...item, options: undefined }} />
)

export const WithoutImg = () => (
  <MenuItemDialog open item={{ ...item, options: undefined, image: null }} />
)

export const WithOptsAndWithoutImg = () => (
  <MenuItemDialog open item={{ ...item, image: null }} />
)
