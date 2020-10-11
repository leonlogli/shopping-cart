import React from 'react'
import { mount } from 'enzyme'

import Link from './Link'

describe('<Link />', () => {
  const wrapper = mount(<Link href="/about">Link</Link>)

  it('should render children', () => {
    expect(wrapper.find('a').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should behave like non rounting', () => {
    const wrapper2 = mount(<Link to="http//test.com">Link</Link>)

    expect(wrapper2.find('a').props().href).toBe('http//test.com')
  })

  it('should render button', () => {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    const wrapper2 = mount(<Link component="button">Link</Link>)

    expect(wrapper2.find('button').length).toBe(1)
  })
})
