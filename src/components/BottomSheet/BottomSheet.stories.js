import React from 'react'

import BottomSheet from '.'

export default {
  title: 'BottomSheet',
}

export const Default = () => (
  <BottomSheet open>
    <div style={{ margin: 16 }}>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
    </div>
  </BottomSheet>
)

export const withoutBorder = () => (
  <BottomSheet open border="0">
    <div style={{ margin: 16 }}>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
    </div>
  </BottomSheet>
)
