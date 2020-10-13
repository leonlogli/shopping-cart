import React from 'react'

import { BoxProps, H6, Text } from '../../../components'

import ErrorRoot, { ActionBox, IconImage } from './Error.style'

import Icon403 from '../../../resources/svg/403.svg'
import Icon404 from '../../../resources/svg/404.svg'
import Icon500 from '../../../resources/svg/500.svg'

export type ErrorProps = BoxProps & {
  /**
   * Error status code
   * @default "500"
   */
  status?: '404' | '403' | '500'
  title?: string
  subTitle?: string
  /**
   * Operating area
   */
  actions?: React.ReactNode
}

/**
 * Used to feed back the results of a series of operational tasks that lead to an error.
 */
const Error = (props: ErrorProps) => {
  const { status = '500', title = status, subTitle, actions, ...other } = props

  const errorProps = {
    '500': {
      text: subTitle || 'Sorry, something went wrong.',
      icon: Icon500,
    },
    '403': {
      text: subTitle || 'Sorry, you are not authorized to access this page.',
      icon: Icon403,
    },
    '404': {
      text: subTitle || 'Sorry, the page you visited does not exist.',
      icon: Icon404,
    },
  }

  return (
    <ErrorRoot fullWidth {...other}>
      <IconImage src={errorProps[status].icon} alt={`Error ${status}`} />
      <H6>{title}</H6>
      <Text variant="body2" color="textSecondary">
        {errorProps[status].text}
      </Text>
      {actions && <ActionBox>{actions}</ActionBox>}
    </ErrorRoot>
  )
}

export { Error }
export default Error
