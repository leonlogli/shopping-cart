import React from 'react'
import { action } from '@storybook/addon-actions'

import MobileSearchPane from '.'

export default {
  title: 'MobileSearchPane',
  parameters: { options: { selectedPanel: 'storybook/actions/panel' } },
}

export const Default = () => <MobileSearchPane onSearch={action('submit')} />

export const withAutocompleteEntries = () => (
  <MobileSearchPane
    suggestions={[
      'Tacos',
      'Plats',
      'Burgers',
      'Sandwich',
      'Panini',
      'Pizza',
      'Salades',
    ]}
    onSearch={action('submit')}
    onChange={action('change')}
  />
)
