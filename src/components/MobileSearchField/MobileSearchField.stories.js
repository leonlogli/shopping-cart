import React from 'react'
import { action } from '@storybook/addon-actions'

import MobileSearchField from '.'

export default {
  title: 'MobileSearchField',
  parameters: { options: { selectedPanel: 'storybook/actions/panel' } },
}

export const mobileSearchField = () => (
  <MobileSearchField onSubmit={action('submit')} />
)
