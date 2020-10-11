import React from 'react'
import { mount } from 'enzyme'

import NavBarBrand from '.'

describe('<NavBarBrand />', () => {
  const wrapper = mount(<NavBarBrand />)

  it('should render children', () => {
    expect(wrapper.find('a').length).toEqual(2)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
