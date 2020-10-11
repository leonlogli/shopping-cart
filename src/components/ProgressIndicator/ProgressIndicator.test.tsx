import React from 'react'
import 'jest-styled-components'

import { mountWithTheme } from '../../utils'

import ProgressIndicator from './ProgressIndicator'

describe('<ProgressIndicator />', () => {
  const wrapper = mountWithTheme(<ProgressIndicator />)

  it('should render children', () => {
    expect(wrapper.find('.MuiLinearProgress-root').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set be circular', () => {
    wrapper.setProps({ circular: true } as any)

    expect(wrapper.find('.MuiCircularProgress-root').length).toEqual(1)
  })

  it('should be positioned at the top', () => {
    wrapper.setProps({ position: 'top' } as any)

    expect(wrapper).toHaveStyleRule('top', '0')
  })

  it('should be centered', () => {
    wrapper.setProps({ position: 'center' } as any)

    expect(wrapper).toHaveStyleRule('top', '50vh')
    expect(wrapper).toHaveStyleRule('left', '50vw')
  })
})
