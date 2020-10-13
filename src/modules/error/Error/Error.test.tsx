import React from 'react'
import Button from '@material-ui/core/Button'

import { mountWithTheme } from '../../../utils'

import Error from './Error'

describe('<Error />', () => {
  const wrapper = mountWithTheme(
    <Error
      actions={
        <Button variant="contained" color="primary">
          Back to home page
        </Button>
      }
    />
  )

  it('should render children', () => {
    expect(wrapper.find('h6').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(1)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set status', () => {
    wrapper.setProps({ status: '403' } as any)

    expect(wrapper.find('h6').text()).toEqual('403')
  })

  it('should set custom title', () => {
    const wrapper2 = mountWithTheme(<Error status="404" title="Forbidden" />)

    expect(wrapper2.find('h6').text()).toEqual('Forbidden')
  })
})
