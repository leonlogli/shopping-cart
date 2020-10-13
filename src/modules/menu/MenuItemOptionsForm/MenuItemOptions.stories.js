import React from 'react'
import { action } from '@storybook/addon-actions'

import MenuItemOptionsForm from '.'
import { SubmitButton } from './MenuItemOptionsForm.style'

export default {
  title: 'MenuItemOptionsForm',
  parameters: { options: { selectedPanel: 'storybook/actions/panel' } },
}

const options = [
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
]

export const Default = () => (
  <div>
    <MenuItemOptionsForm
      options={options}
      onSubmit={action('submit')}
      onChange={action('change')}
      id="item-form"
    />
    <SubmitButton
      form="item-form"
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      size="large"
    >
      Ajouter au panier
    </SubmitButton>
  </div>
)
