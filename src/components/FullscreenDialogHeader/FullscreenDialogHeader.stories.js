import React from 'react'
import Button from '@material-ui/core/Button'

import FullscreenDialogHeader from '.'

export default {
  title: 'FullscreenDialogHeader',
}

export const Default = () => <FullscreenDialogHeader title="Title" />

export const withPrimaryAction = () => (
  <FullscreenDialogHeader
    title="Title"
    okText="Save"
    onOk={() => console.log('ok')}
  />
)

export const withCustomAction = () => (
  <FullscreenDialogHeader
    title="Title"
    actions={<Button color="inherit">Ok</Button>}
  />
)
