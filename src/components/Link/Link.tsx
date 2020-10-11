import React, { forwardRef } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { LinkProps as MuiLinkProps } from '@material-ui/core/Link'

import LinkBase from './Link.style'

export type LinkProps = Omit<MuiLinkProps, 'href'> &
  Pick<NextLinkProps, 'as'> & {
    href?: NextLinkProps['href']
    /**
     * Href for non routing link. Do not use it with href
     */
    to?: string
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  }

/**
 * Link is a component which handle routing and non-routing href
 */
const Link = forwardRef<HTMLLinkElement, LinkProps>((props, ref) => {
  const { as, href, to, ...other } = props

  if (!href) {
    return <LinkBase ref={ref} href={to} {...other} />
  }

  return (
    <NextLink href={href as any} as={as} passHref>
      <LinkBase ref={ref} {...other} />
    </NextLink>
  )
})

export { Link }
export default Link
