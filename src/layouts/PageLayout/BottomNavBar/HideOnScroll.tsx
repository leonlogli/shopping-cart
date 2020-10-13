import React, { ReactElement } from 'react'
import { useRouter } from 'next/router'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

const HideOnScroll = ({ children }: { children: ReactElement }) => {
  const trigger = useScrollTrigger()
  const router = useRouter()

  if (router.pathname === '/') return children

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  )
}

export { HideOnScroll }
export default HideOnScroll
