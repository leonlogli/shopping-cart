import React, { useState } from 'react'
import { PaperProps } from '@material-ui/core/Paper'

import AutocompleteSearchForm, {
  AutocompleteSearchFormProps,
} from '../AutocompleteSearchForm'

import { SuggestionsBox, SearchBoxRoot, RoundButton } from './SearchBox.style'

export type SearchBoxProps = PaperProps &
  Omit<AutocompleteSearchFormProps, 'data'> & {
    suggestions?: string[]
    onSuggestionClick?: (value: string) => void
  }

const SearchBox = (props: SearchBoxProps) => {
  const {
    className,
    onSearch,
    suggestions = [],
    onSuggestionClick,
    elevation = 0,
    ...other
  } = props

  const [showSearchField, setShowSearchField] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const classNameProp =
    (className || '') + (showSearchField ? ' SearchField-showed' : '')

  const suggestedItems = suggestions.slice(0, 5)

  const handleSearchIconClick = () => {
    setShowSearchField(true)
    setShowSuggestions(false)
  }

  const handleClickAway = () => {
    setShowSearchField(false)
    setTimeout(() => setShowSuggestions(true), 300)
  }

  const handleSuggestionClick = (val: string) => () => {
    if (!onSuggestionClick) onSearch(val)
    if (onSuggestionClick) onSuggestionClick(val)
  }

  return (
    <SearchBoxRoot className={classNameProp} elevation={elevation}>
      <SuggestionsBox {...{ showSuggestions }}>
        {suggestedItems.map((val) => (
          <RoundButton key={val} onClick={handleSuggestionClick(val)}>
            {val}
          </RoundButton>
        ))}
      </SuggestionsBox>
      <AutocompleteSearchForm
        onSearchIconClick={handleSearchIconClick}
        data={suggestions}
        open={showSearchField}
        onSearch={onSearch}
        {...other}
        onClickAway={handleClickAway}
      />
    </SearchBoxRoot>
  )
}

export { SearchBox }
export default SearchBox
