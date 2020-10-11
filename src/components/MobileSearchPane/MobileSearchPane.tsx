import React, { useState, forwardRef, useRef, useEffect } from 'react'
import MenuList from '@material-ui/core/MenuList'

import { MobileSearchField, MobileSearchFieldProps } from '../MobileSearchField'
import MenuItem from '../MenuItem'

import { MobileSearchPaneRoot } from './MobileSearchPane.style'

export type MobileSearchPaneProps = Omit<MobileSearchFieldProps, 'onSubmit'> & {
  suggestions?: string[]
  focus?: boolean
  onSearch?: (value?: string) => void
}

const MobileSearchPane = forwardRef<HTMLDivElement, MobileSearchPaneProps>(
  (props, ref) => {
    const {
      className,
      suggestions = [],
      id,
      defaultValue,
      onSearch,
      focus = true,
      ...other
    } = props

    const [value, setValue] = useState(defaultValue)
    const inputEl = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (focus && inputEl && inputEl.current) {
        inputEl.current.focus()
      }
    }, [focus])

    const handleEntryClick = (text: string) => () => {
      setValue(text)

      if (onSearch) {
        onSearch(text)
      }
    }

    return (
      <MobileSearchPaneRoot id={id} className={className} ref={ref}>
        <MobileSearchField
          {...(other as any)}
          value={value}
          onSubmit={onSearch}
          inputRef={inputEl}
        />
        {suggestions.length > 0 && (
          <MenuList>
            {suggestions.map((entry, i) => (
              <MenuItem
                key={i}
                text={entry}
                onClick={handleEntryClick(entry)}
              />
            ))}
          </MenuList>
        )}
      </MobileSearchPaneRoot>
    )
  }
)

export { MobileSearchPane }
export default MobileSearchPane
