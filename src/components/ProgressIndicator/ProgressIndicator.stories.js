import React from 'react'

import ProgressIndicator from './ProgressIndicator'

export default {
  title: 'ProgressIndicator',
}

export const Default = () => <ProgressIndicator />

export const circular = () => <ProgressIndicator circular />

export const centered = () => <ProgressIndicator position="center" />
