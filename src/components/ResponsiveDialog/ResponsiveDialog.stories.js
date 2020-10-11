import React from 'react'

import ResponsiveDialog from '.'
import { SlideTransition, ZoomTransition } from './ResponsiveDialog.transitions'

export default {
  title: 'ResponsiveDialog',
}

export const Default = () => (
  <ResponsiveDialog open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
    ipsum id orci porta dapibus.
  </ResponsiveDialog>
)

export const withAction = () => (
  <ResponsiveDialog
    open
    okText="Save"
    cancelText="Cancel"
    title="Dialog Title"
    onOk={() => console.log('ok click')}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
    ipsum id orci porta dapibus.
  </ResponsiveDialog>
)

export const withTransition = () => (
  <ResponsiveDialog
    open
    title="Dialog Title"
    TransitionComponent={SlideTransition}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
    ipsum id orci porta dapibus.
  </ResponsiveDialog>
)

export const withDifferentTransitions = () => (
  <ResponsiveDialog
    open
    title="Dialog Title"
    fullscreenTransition={SlideTransition}
    windowedTransition={ZoomTransition}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
    ipsum id orci porta dapibus.
  </ResponsiveDialog>
)
