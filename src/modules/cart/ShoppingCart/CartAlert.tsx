import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Alert, { AlertProps } from '@material-ui/lab/Alert'

export type CartAlertProps = AlertProps & {
  open?: boolean
}

const CartAlert = ({ onClose, ...other }: CartAlertProps) => {
  const handleAlertClose = (e?: any, reason?: string) => {
    if (reason === 'clickaway') return

    if (onClose) onClose(e)
  }

  return (
    <Snackbar autoHideDuration={6000} onClose={handleAlertClose} {...other}>
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleAlertClose}
        severity="success"
      >
        Order successfully placed
      </Alert>
    </Snackbar>
  )
}

export { CartAlert }
export default CartAlert
