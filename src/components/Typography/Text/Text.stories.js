import React from 'react'

import Text from './index'

export default {
  title: 'Text',
}

export const text = () => (
  <div style={{ padding: '20px 100px' }}>
    <Text variant="subtitle1" gutterBottom>
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Text>
    <Text variant="subtitle2" gutterBottom>
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </Text>
    <Text variant="body1" gutterBottom>
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Text>
    <Text variant="body2" gutterBottom>
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
      neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
      Eum quasi quidem quibusdam.
    </Text>
    <Text variant="button" display="block" gutterBottom>
      button text
    </Text>
    <Text variant="caption" display="block" gutterBottom>
      caption text
    </Text>
    <Text variant="overline" display="block" gutterBottom>
      overline text
    </Text>
  </div>
)
