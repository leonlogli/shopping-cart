import React from 'react'

import { mountWithTheme } from '../../utils'

import CountButton from './CountButton'

describe('<CountButton />', () => {
  const wrapper = mountWithTheme(
    <CountButton onIncrement={jest.fn()} onDecrement={jest.fn()}>
      2
    </CountButton>
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
