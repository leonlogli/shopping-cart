import React from 'react'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'

import { mountWithTheme } from '../../utils'

import BottomNavigation from './BottomNavigation'

describe('<BottomNavigation />', () => {
  const wrapper = mountWithTheme(
    <BottomNavigation
      links={[
        { label: 'Restaurants', value: '/restaurants', icon: <RestoreIcon /> },
        { label: 'Menu', value: '/menu', icon: <FavoriteIcon /> },
      ]}
    />
  )

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
