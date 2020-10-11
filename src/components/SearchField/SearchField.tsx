import React, { forwardRef, useRef } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { InputBaseProps } from '@material-ui/core/InputBase'

import IconButton from '@material-ui/core/IconButton'

import SearchFieldRoot, { ContentBox, Input } from './SearchField.style'

export type SearchFieldProps = InputBaseProps & {
  onSearchIconClick?: () => void
  open?: boolean
  naked?: boolean
}

/**
 * Main search field
 */
const SearchField = forwardRef<HTMLDivElement, SearchFieldProps>(
  (props, ref) => {
    const {
      className,
      id,
      onSearchIconClick,
      placeholder = 'Search…',
      inputProps,
      open,
      naked,
      ...other
    } = props

    const contentBoxRef = useRef<HTMLElement>()

    return (
      <SearchFieldRoot
        id={id}
        ref={ref}
        className={`${className || ''} SearchField ${open ? 'showed' : ''}`}
      >
        <ContentBox ref={contentBoxRef as any} {...{ naked }}>
          <IconButton
            disableRipple
            aria-label="search"
            onClick={onSearchIconClick}
          >
            <SearchIcon color="inherit" />
          </IconButton>
          <Input
            type="search"
            placeholder={placeholder}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            inputProps={{
              'aria-label': placeholder,
              'aria-autocomplete': 'list',
              'aria-haspopup': 'false',
              ...inputProps,
            }}
            {...other}
          />
        </ContentBox>
      </SearchFieldRoot>
    )
  }
)

export { SearchField }
export default SearchField
