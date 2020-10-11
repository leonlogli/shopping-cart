import React from 'react'
import { mount } from 'enzyme'
import Container from './index'

describe('<Container />', () => {
  const wrapper = mount(
    <Container>
      <span>test</span>
    </Container>
  )

  it('should have the correct children', () => {
    expect(wrapper.find('span').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
