import React from 'react'
import { mount } from 'enzyme'

import Logo from '.'

describe('<Logo />', () => {
  const wrapper = mount(<Logo />)

  it('should render children', () => {
    expect(wrapper.find('svg').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
