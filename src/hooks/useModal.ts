import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

const useModal = (modalId = 'm') => {
  const router = useRouter()
  const { pathname, asPath } = router

  const [open, setOpen] = useState(false)
  const timerRef = useRef<number | null>(null)

  const isDynamycPath = pathname.includes('/[') && pathname !== asPath
  const routerPathname = pathname.endsWith('/') ? pathname : `${pathname}/`

  const handleOpen = () => {
    setOpen(true)

    timerRef.current = setTimeout(() => {
      if (asPath.includes(`${modalId}=o`)) {
        router.replace(
          `${routerPathname}?${modalId}=o`,
          isDynamycPath ? `${router.asPath}` : undefined,
          { shallow: true }
        )
      } else {
        router.push(
          `${routerPathname}?${modalId}=o`,
          isDynamycPath ? `${router.asPath}/?${modalId}=o` : undefined,
          { shallow: true }
        )
      }
    }, 400)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!router.query[modalId]) {
      setOpen(false)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [router.query[modalId]])

  return { handleOpen, handleClose, open }
}

export { useModal }
