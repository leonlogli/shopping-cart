import React from 'react'
import { color, number } from '@storybook/addon-knobs'

import Logo from '.'

export default {
  title: 'Logo',
}

export const logo = () => (
  <Logo fill={color('Fill', '#1c95a8')} size={number('Size')} />
)
