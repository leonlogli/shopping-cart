import styled, { css } from 'styled-components'
import { NavItemProps } from './NavItem'

const NavItemRoot = styled.li<NavItemProps>`
  list-style-type: none;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 0 auto;
  color: inherit;

  a {
    color: inherit;
    padding: 0 2px;
  }

  ${({ active }) =>
    active &&
    css`
      a {
        border-bottom: 1px solid;
      }
    `}
`

export { NavItemRoot }
export default NavItemRoot
