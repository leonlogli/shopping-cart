import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { action } from '@storybook/addon-actions'
import { useState } from 'react'
import Router from 'next/router'

const Wrapper = ({
  children,
  color,
  vCenter = true,
  hCenter = true,
  ...otherStyles
}) => {
  const styles = {
    display: vCenter === false && hCenter === false ? 'block' : 'flex',
    alignItems: vCenter === true ? 'center' : 'start',
    justifyContent: hCenter === true ? 'center' : 'start',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    overflow: vCenter === false ? 'overlay' : 'hidden',
    ...(Boolean(color) && { backgroundColor: color }),
    ...otherStyles,
  }

  return <div style={styles}>{children}</div>
}

const customViewports = {
  deskTop: {
    name: 'DeskTop',
    styles: {
      width: '600px',
      height: '1000px',
    },
  },
}

function RouterMock({ children }) {
  const [pathname, setPathname] = useState('/')

  const mockRouter = {
    pathname,
    route: '/',
    query: {},
    asPath: '/',
    replace: () => {},
    prefetch: () => new Promise((resolve, reject) => {}),
    push: async (newPathname) => {
      action('Clicked link')(newPathname)
      setPathname(newPathname)
    },
  }

  Router.router = mockRouter

  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  )
}

export { Wrapper, customViewports, RouterMock }
