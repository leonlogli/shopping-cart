import React, { ChangeEvent, useState, useEffect } from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import { BottomNavigationProps as BaseProps } from '@material-ui/core/BottomNavigation'

import { BottomNavigationRoot } from './BottomNavigation.style'

type NavLink = {
  label: string
  value: string
  icon: React.ReactNode
}

export type BottomNavigationProps = Omit<BaseProps, 'onChange'> & {
  links: NavLink[]
  whiteListValues?: string[]
  onChange?: (value: string) => void
}

/**
 * Bottom navigation component. Each nav link is automatically focus if pressed.
 * To disable focus for some nav links, just prepend `#` to their value (Ex: '#search')
 */
const BottomNavigation = (props: BottomNavigationProps) => {
  const { links, value: valueProp, onChange, ...other } = props

  const initialLink =
    links.find((link) => link.value === valueProp) ||
    links[Number(valueProp)] ||
    links[0]

  const [value, setValue] = useState(initialLink.value)

  useEffect(() => {
    setValue(valueProp)
  }, [valueProp])

  const handleChange = (_e: ChangeEvent<any>, newValue: string) => {
    if (!newValue.startsWith('#')) {
      setValue(newValue)
    }

    if (onChange) onChange(newValue)
  }

  return (
    <BottomNavigationRoot {...other} value={value} onChange={handleChange}>
      {links.map((link) => (
        <BottomNavigationAction key={link.value || link.label} {...link} />
      ))}
    </BottomNavigationRoot>
  )
}

export { BottomNavigation }
export default BottomNavigation
