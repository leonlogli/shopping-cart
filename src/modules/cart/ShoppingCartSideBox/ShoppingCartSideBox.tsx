import React, { useEffect, useRef } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSelector } from 'react-redux'

import { BoxProps } from '../../../components'
import ShoppingCart from '../ShoppingCart'

import { ShoppingCartSideBoxRoot } from './ShoppingCartSideBox.style'

import { getCartItems } from '../state'

export type ShoppingCartSideBoxProps = BoxProps

const ShoppingCartSideBox = (props: ShoppingCartSideBoxProps) => {
  const scrollbarRef = useRef<PerfectScrollbar | null>()
  const cartItems = useSelector(getCartItems)

  useEffect(() => {
    if (scrollbarRef && scrollbarRef.current) {
      scrollbarRef.current.updateScroll()
    }
  }, [cartItems.length])

  return (
    <ShoppingCartSideBoxRoot {...props}>
      <PerfectScrollbar ref={(el) => (scrollbarRef.current = el)}>
        <ShoppingCart elevation={0} />
      </PerfectScrollbar>
    </ShoppingCartSideBoxRoot>
  )
}

export { ShoppingCartSideBox }
export default ShoppingCartSideBox
