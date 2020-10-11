import React from 'react'
import NavItem from '.'

export default {
  title: 'NavItem',
}

export const Default = () => <NavItem href="/">Home</NavItem>

export const active = () => (
  <ul>
    <NavItem href="/contact" active>
      Contact
    </NavItem>
  </ul>
)
