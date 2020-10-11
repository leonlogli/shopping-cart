import React from 'react'

import { mountWithTheme } from '../../utils'
import DialogActions from '.'

describe('<DialogActions />', () => {
  const wrapper = mountWithTheme(
    <DialogActions okText="Save" cancelText="Cancel" />
  )

  it('should render children', () => {
    expect(wrapper.find('button').length).toEqual(2)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set button text', () => {
    wrapper.setProps({ okText: 'Ok' } as any)

    expect(wrapper.find('button').last().text()).toBe('Ok')
  })
})
