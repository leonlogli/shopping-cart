import React from 'react'
import Mail from '@material-ui/icons/Mail'
import { mount } from 'enzyme'

import MenuItem from '.'

describe('<MenuItem />', () => {
  const wrapper = mount(<MenuItem text="text" />)

  it('should render children', () => {
    expect(wrapper.text()).toEqual('text')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have icon', () => {
    wrapper.setProps({ icon: <Mail /> } as any)

    expect(wrapper.find('svg').length).toEqual(1)
  })

  it('should be a link', () => {
    wrapper.setProps({ href: '/' } as any)

    expect(wrapper.find('a').length).toEqual(1)
  })
})
