import React from 'react'
import Mail from '@material-ui/icons/Mail'

import MenuItem from '.'

export default {
  title: 'MenuItem',
}

export const Default = () => <MenuItem text="Option 1" />

export const withIcon = () => <MenuItem text="Email" icon={<Mail />} />

export const asLink = () => <MenuItem href="/test" text="Inbox" />
