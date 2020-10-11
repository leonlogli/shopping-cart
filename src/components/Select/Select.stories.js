import React from 'react'

import Select from '.'

export default {
  title: 'Select',
}

export const Default = () => (
  <Select
    label="Choose"
    style={{ width: 200 }}
    options={['Option 1', 'Option 2']}
  />
)
