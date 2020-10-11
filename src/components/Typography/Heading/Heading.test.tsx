import React from 'react'
import { mount } from 'enzyme'
import { H1 } from './index'

describe('<Heading />', () => {
  describe('<H1 />', () => {
    const wrapper = mount(<H1>h1. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h1. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<H2 />', () => {
    const wrapper = mount(<H1>h2. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h2. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<H3 />', () => {
    const wrapper = mount(<H1>h3. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h3. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<H4 />', () => {
    const wrapper = mount(<H1>h4. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h4. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<H5 />', () => {
    const wrapper = mount(<H1>h5. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h5. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('<H6 />', () => {
    const wrapper = mount(<H1>h6. Heading</H1>)

    it('should have the correct children', () => {
      expect(wrapper.props().children).toBe('h6. Heading')
    })

    it('should match a snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
