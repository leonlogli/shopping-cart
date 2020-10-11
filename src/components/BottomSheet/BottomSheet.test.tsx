import React from 'react'
import { mount } from 'enzyme'

import BottomSheet from '.'

describe('<BottomSheet />', () => {
  const wrapper = mount(<BottomSheet open>Child</BottomSheet>)

  it('should render children', () => {
    expect(wrapper.text()).toEqual('Child')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
