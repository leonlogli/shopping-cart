import React from 'react'

import { mountWithTheme } from '../../utils'
import ConfirmDialog from '.'

describe('<ConfirmDialog />', () => {
  const wrapper = mountWithTheme(
    <ConfirmDialog open title="Dialog title">
      Child
    </ConfirmDialog>
  )

  it('should render children', () => {
    expect(wrapper.find('h2').text()).toEqual('Dialog title')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
