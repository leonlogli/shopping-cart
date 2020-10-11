import React from 'react'
import { mount } from 'enzyme'
import Col from './index'

describe('<Col />', () => {
  const wrapper = mount(
    <Col>
      <span>test</span>
    </Col>
  )

  it('should have the correct children', () => {
    expect(wrapper.find('span').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
