import React from 'react'

import SearchField from './SearchField'
import { mountWithTheme } from '../../utils'

describe('<SearchField />', () => {
  const wrapper = mountWithTheme(<SearchField />)

  it('should render children', () => {
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
