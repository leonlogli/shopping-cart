import React from 'react'
import { mount } from 'enzyme'

import Select from '.'

describe('<Select />', () => {
  const wrapper = mount(
    <Select name="name" options={['Option 1', 'Option 2']} />
  )

  it('should render children', () => {
    expect(wrapper.find('option').length).toEqual(0)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
