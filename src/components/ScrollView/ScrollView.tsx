import React, { useState, useEffect } from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import ScrollViewRoot, {
  LeftIcon,
  RightIcon,
  ScrollBox,
  InnerBox,
} from './ScrollView.style'

import { useResizeObserver } from '../../hooks'
import { BoxProps } from '../Layout'
import { scrollRight, scrollLeft } from './ScrollView.aniations'

export type ScrollViewProps = Omit<BoxProps, 'children'> & {
  children: React.ReactNode
  /**
   * Margin between each child
   * @default 16px
   */
  spacing?: number | string
  /**
   * Scroll transition duration in ms
   * @default 600
   */
  scrollDuration?: number
}

/**
 * Provides a horizontal scrolling view to a finite or infinite set of collections
 */
const ScrollView = (props: ScrollViewProps) => {
  const { children, spacing = 16, scrollDuration = 600, ...other } = props
  const scrollBoxProps = {
    spacing: `${String(spacing).replace('px', '')}px`,
    scrollDuration,
    className: 'ScrollBox',
  }

  const scrollBoxRef = React.useRef<HTMLDivElement>(null)
  const [scrolling, setScrolling] = useState(false)
  const [showRightIcon, setShowRightIcon] = useState(false)
  const [showLeftIcon, setShowLeftIcon] = useState(false)
  const { width = 1 } = useResizeObserver({ ref: scrollBoxRef })

  const onDesktop = width > 576
  const [scrollByValue, setScrollByValue] = useState(onDesktop ? 330 : 275)

  useEffect(() => {
    if (scrollBoxRef.current) {
      setScrollByValue(Math.round(scrollBoxRef.current.offsetWidth / 1.8))
    }
  }, [onDesktop])

  useEffect(() => {
    const scrollBox = scrollBoxRef.current

    if (scrollBox) {
      const margin = parseInt(scrollBox.style.marginLeft, 10) || 0
      const remainingMargin = scrollBox.scrollWidth - scrollBox.offsetWidth

      setShowRightIcon(remainingMargin !== 0)
      setShowLeftIcon(margin !== 0)
    }
  }, [scrolling, width])

  const onLeftClick = () => {
    if (scrolling === false) {
      setScrolling(true)
      const scrollBox = scrollBoxRef.current

      if (scrollBox) {
        scrollRight(scrollBox, scrollByValue)
        setTimeout(() => setScrolling(false), scrollDuration)
      }
    }
  }

  const onRightClick = () => {
    if (scrolling === false) {
      setScrolling(true)
      const scrollBox = scrollBoxRef.current

      if (scrollBox) {
        scrollLeft(scrollBox, scrollByValue)
        setTimeout(() => setScrolling(false), scrollDuration)
      }
    }
  }

  return (
    <ScrollViewRoot fullWidth {...other}>
      <InnerBox>
        <LeftIcon
          disabled={scrolling}
          onClick={onLeftClick}
          className="ActionIcon"
          {...{ show: showLeftIcon }}
        >
          <ChevronLeftIcon />
        </LeftIcon>
        <RightIcon
          disabled={scrolling}
          className="ActionIcon"
          onClick={onRightClick}
          {...{ show: showRightIcon }}
        >
          <ChevronRightIcon />
        </RightIcon>
        <ScrollBox {...scrollBoxProps} ref={scrollBoxRef}>
          {children}
        </ScrollBox>
      </InnerBox>
    </ScrollViewRoot>
  )
}

export { ScrollView }
export default ScrollView
