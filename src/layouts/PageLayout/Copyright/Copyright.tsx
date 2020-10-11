import React from 'react'

import { Text, TextProps } from '../../../components'

type CopyrightProps = TextProps

const Copyright = (props: CopyrightProps) => {
  const year = new Date().getFullYear()

  return (
    <Text {...props}>
      Copyright &copy;
      {` Léon Logli ${year}`}
    </Text>
  )
}

export default Copyright
export { Copyright }
