import React from 'react'

import ToolBar from '.'

import { mountWithTheme } from '../../utils'

describe('<ToolBar />', () => {
  const wrapper = mountWithTheme(<ToolBar title="Recipoz" />)

  it('should render children', () => {
    expect(wrapper.find('h6').props().children).toBe('Recipoz')
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should set right content', () => {
    const toolbar = mountWithTheme(<ToolBar right={<span>right</span>} />)

    expect(toolbar.find('span').props().children).toBe('right')
  })

  it('should have left icon', () => {
    const toolbar = mountWithTheme(<ToolBar leftIcon="menu" />)

    expect(toolbar.find('svg')).toHaveLength(1)
  })
})
