import React from 'react'
import NavBarLeft from '.'

export default {
  title: 'NavBarLeft',
}

export const Default = () => (
  <NavBarLeft
    restaurants={[
      { id: 1, name: 'Mc Donald' },
      { id: 2, name: 'Eatery Hub' },
    ]}
  />
)
