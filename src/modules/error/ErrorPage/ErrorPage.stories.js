import React from 'react'

import Error from '.'

export default {
  title: 'ErrorPage',
}

export const error = () => <Error />

export const error404 = () => <Error status="404" />

export const error403 = () => <Error status="403" />
