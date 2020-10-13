import React, { ChangeEvent, useState, FormEvent, useEffect } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { SearchField, SearchFieldProps } from '../../../components'

import AutocompleteSearchFormRoot, {
  MenuPane,
  EntryBox,
  MenuPopper,
  Entry,
} from './AutocompleteSearchForm.style'
import { textSearch } from '../state'

export type AutocompleteSearchFormProps = SearchFieldProps & {
  onSearch: (text: string) => void
  defaultValue?: string
  data: string[]
  onClickAway?: () => void
  disableAutocomplete?: boolean
}

/**
 * Navbar autocomplete search box
 */
const AutocompleteSearchForm = (props: AutocompleteSearchFormProps) => {
  const {
    id,
    className,
    defaultValue = '',
    data,
    onSearch,
    onChange,
    onClickAway,
    open,
    disableAutocomplete,
    ...other
  } = props

  const contentBoxRef = React.useRef<HTMLElement | null>(null)
  const [value, setValue] = useState(defaultValue)

  const [suggestions, setSuggestions] = useState(data)
  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (onChange) onChange(event)

    if (!disableAutocomplete) {
      setSuggestions(textSearch(data, event.target.value))
      if (event.target.value && data) {
        setAnchorEl(event.currentTarget)
      } else setAnchorEl(null)
    }
  }

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault()
    onSearch(value)
  }

  const handleSelect = (text: string) => () => {
    setAnchorEl(null)
    setValue(text)
    onSearch(text)
  }

  const handleClickAway = () => {
    setAnchorEl(null)
    if (onClickAway) onClickAway()
  }

  useEffect(() => {
    if (open && contentBoxRef && contentBoxRef.current) {
      contentBoxRef.current.querySelector('input')?.focus()
    }
  }, [open])

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AutocompleteSearchFormRoot
        id={id}
        className={className}
        onSubmit={handleSubmit}
        {...{ open }}
      >
        <SearchField
          value={value}
          onChange={handleChange}
          onSearchIconClick={handleSubmit}
          {...(other as any)}
          className="SearchField"
          open={open}
          ref={contentBoxRef}
        />
        <MenuPopper
          style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
          open={!disableAutocomplete && !!anchorEl && suggestions.length > 0}
          anchorEl={anchorEl}
          role="presentation"
        >
          <MenuPane square>
            <EntryBox role="listbox">
              {suggestions.map((entry, i) => (
                <Entry key={i} role="option" onClick={handleSelect(entry)}>
                  {entry}
                </Entry>
              ))}
            </EntryBox>
          </MenuPane>
        </MenuPopper>
      </AutocompleteSearchFormRoot>
    </ClickAwayListener>
  )
}

export { AutocompleteSearchForm }
export default AutocompleteSearchForm
