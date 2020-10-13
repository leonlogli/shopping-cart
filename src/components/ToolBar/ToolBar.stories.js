import React from 'react'
import { action } from '@storybook/addon-actions'

import ToolBar from '.'

export default {
  title: 'ToolBar',
  parameters: { options: { selectedPanel: 'storybook/actions/panel' } },
}

export const Default = () => <ToolBar title="Shopping Cart" />

export const withLeftIconAction = () => (
  <ToolBar onLeftIconClick={action('click')} title="Shopping Cart" />
)

export const withChildAndRight = () => (
  <ToolBar right={<span>Right</span>}>
    <span>Child</span>
  </ToolBar>
)

export const withLeftIcon = () => (
  <ToolBar leftIcon="back" title="Shopping Cart" />
)
