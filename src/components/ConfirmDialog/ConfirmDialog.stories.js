import React from 'react'

import ConfirmDialog from '.'

export default {
  title: 'ConfirmDialog',
}

export const Default = () => (
  <ConfirmDialog open>Do you want to learn React ?</ConfirmDialog>
)

export const WithTitle = () => (
  <ConfirmDialog open title="Dialog title">
    Do you want to learn React ?
  </ConfirmDialog>
)

export const withCustomActionText = () => (
  <ConfirmDialog open okText="Yes" cancelText="No">
    Do you want to learn React
  </ConfirmDialog>
)

export const withMaxWidth = () => (
  <ConfirmDialog open maxWidth="xs">
    Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras
    ultricies ligula sed magna dictum porta.
  </ConfirmDialog>
)
