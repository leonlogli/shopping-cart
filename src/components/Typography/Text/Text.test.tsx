import React from 'react'
import { mount } from 'enzyme'
import Text from './index'

describe('<Text />', () => {
  const wrapper = mount(<Text>text</Text>)

  it('should have the correct children', () => {
    expect(wrapper.props().children).toBe('text')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
