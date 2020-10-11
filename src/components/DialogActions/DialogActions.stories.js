import React from 'react'

import DialogActions from '.'

export default {
  title: 'DialogActions',
}

export const withButtonText = () => (
  <DialogActions open okText="Save" cancelText="Abort" />
)

export const withChildren = () => <DialogActions>custom actions</DialogActions>
