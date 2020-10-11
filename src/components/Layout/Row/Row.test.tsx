import React from 'react'
import { mount } from 'enzyme'
import Row from './index'

describe('<Row />', () => {
  const wrapper = mount(
    <Row>
      <span>test</span>
    </Row>
  )

  it('should have the correct children', () => {
    expect(wrapper.find('span').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
