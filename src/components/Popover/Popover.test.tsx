import React from 'react'
import { mount } from 'enzyme'

import Popover from '.'

describe('<Popover />', () => {
  const wrapper = mount(<Popover open>Child</Popover>)

  it('should render children', () => {
    expect(wrapper.text()).toEqual('Child')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
