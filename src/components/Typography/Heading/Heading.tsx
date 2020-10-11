import React from 'react'
import { TypographyProps } from '@material-ui/core/Typography'

import Heading from './Heading.style'

export type HeadingsProps = Omit<TypographyProps, 'variant'> & {
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

const H1 = (props: HeadingsProps) => <Heading variant="h1" {...props} />

const H2 = (props: HeadingsProps) => <Heading variant="h2" {...props} />

const H3 = (props: HeadingsProps) => <Heading variant="h3" {...props} />

const H4 = (props: HeadingsProps) => <Heading variant="h4" {...props} />

const H5 = (props: HeadingsProps) => <Heading variant="h5" {...props} />

const H6 = (props: HeadingsProps) => <Heading variant="h6" {...props} />

export { H1, H2, H3, H4, H5, H6 }
