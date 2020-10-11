import React from 'react'

import MobileSearchPane from './index'
import { mountWithTheme } from '../../utils'

describe('<MobileSearchPane />', () => {
  const wrapper = mountWithTheme(<MobileSearchPane />)

  it('should have the correct children', () => {
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('should call the mock function when submitted', () => {
    const onSearch = jest.fn()

    wrapper.setProps('onSearch' as any, onSearch)
    wrapper.simulate('submit')
    expect(onSearch).toHaveBeenCalled()
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
