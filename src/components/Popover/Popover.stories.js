import React from 'react'

import Popover from '.'

export default {
  title: 'Popover',
}

export const Default = () => (
  <Popover open>
    <div style={{ margin: 16 }}>Pane</div>
  </Popover>
)
