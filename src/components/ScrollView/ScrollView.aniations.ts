/* eslint-disable no-param-reassign */

const scrollRight = (scrollingBox: HTMLDivElement, scrollByValue: number) => {
  const margin = parseInt(scrollingBox.style.marginLeft, 10) || 0

  if (margin + scrollByValue > 0) {
    scrollingBox.style.marginLeft = '0px'
  } else scrollingBox.style.marginLeft = `${margin + scrollByValue}px`
}

const scrollLeft = (scrollingBox: HTMLDivElement, scrollByValue: number) => {
  const margin = parseInt(scrollingBox.style.marginLeft, 10) || 0
  const remainingMargin = scrollingBox.scrollWidth - scrollingBox.offsetWidth

  if (remainingMargin < scrollByValue) {
    scrollingBox.style.marginLeft = `${margin - remainingMargin}px`
  } else scrollingBox.style.marginLeft = `${margin - scrollByValue}px`
}

export { scrollRight, scrollLeft }
