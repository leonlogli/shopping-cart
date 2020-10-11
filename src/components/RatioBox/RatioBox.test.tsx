import React from 'react'

import { mountWithTheme } from '../../utils'

import RatioBox from './RatioBox'

describe('<RatioBox />', () => {
  const wrapper = mountWithTheme(<RatioBox ratio={75}>Test</RatioBox>)

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
