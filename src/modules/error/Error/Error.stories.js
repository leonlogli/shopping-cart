import React from 'react'
import Button from '@material-ui/core/Button'

import Error from './Error'

export default {
  title: 'Error',
}

export const Default = () => <Error />

export const withActions = () => (
  <Error
    actions={
      <Button variant="contained" color="primary">
        Back to home page
      </Button>
    }
  />
)

export const withStatus = () => (
  <Error
    status="403"
    actions={
      <Button variant="contained" color="primary">
        Back to home page
      </Button>
    }
  />
)

export const withTitleAndSubTitle = () => (
  <Error
    title="Error"
    subTitle="Oups!!! 500 Internal Server Error"
    actions={
      <Button variant="contained" color="primary">
        Back to home page
      </Button>
    }
  />
)
