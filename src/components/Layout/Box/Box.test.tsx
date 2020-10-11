import React from 'react'
import { mount } from 'enzyme'
import Box from './index'

describe('<Box />', () => {
  const wrapper = mount(<Box>text</Box>)

  it('should have the correct children', () => {
    expect(wrapper.props().children).toBe('text')
  })

  it('should have the default component', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
