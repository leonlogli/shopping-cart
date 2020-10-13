import React from 'react'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

import { useRouter } from 'next/router'
import Error, { ErrorProps } from '../Error'

export type ErrorPageProps = Pick<ErrorProps, 'status'> & {
  error?: any
  embedded?: boolean
}

const ErrorPage = ({ status = '404', error, embedded }: ErrorPageProps) => {
  const errorCode = error?.code || status
  const router = useRouter()
  const link = '/'

  const actionText = embedded ? 'Refresh' : 'Back Home'

  const handleClick = () => {
    if (embedded) {
      router.reload()
    }
  }

  return (
    <Error
      status={errorCode}
      actions={
        <Link href={embedded ? router.pathname : link}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            {actionText}
          </Button>
        </Link>
      }
    />
  )
}

export { ErrorPage }
export default ErrorPage
