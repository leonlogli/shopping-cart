import React from 'react'
import { action } from '@storybook/addon-actions'

import AutocompleteSearchForm from '.'

export default {
  title: 'AutocompleteSearchForm',
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
}

export const autocompleteSearchForm = () => (
  <AutocompleteSearchForm
    data={['Item 1', 'Item 2', 'Item 3']}
    onSearch={action('submit')}
    onChange={action('change')}
  />
)
