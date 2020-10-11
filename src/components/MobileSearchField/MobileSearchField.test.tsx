import React from 'react'

import MobileSearchField from './index'
import { mountWithTheme } from '../../utils'

describe('<MobileSearchField />', () => {
  const wrapper = mountWithTheme(<MobileSearchField />)

  it('should have the correct children', () => {
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('should call the mock function when submitted', () => {
    const onSubmit = jest.fn()

    wrapper.setProps('onSubmit' as any, onSubmit)
    wrapper.simulate('submit')
    expect(onSubmit).toHaveBeenCalled()
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
