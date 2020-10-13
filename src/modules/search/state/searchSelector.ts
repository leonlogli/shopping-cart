import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../..'

const searchState = (state: RootState) => state.search

const searchStatusSelector = (state: RootState) => {
  const { loading, error } = state.search

  return { loading, error }
}

const searchResultSelector = createSelector(
  searchState,
  searchStatusSelector,
  (state, status) => {
    const { searchResult } = state

    return { searchResult, ...status }
  }
)

export { searchStatusSelector, searchResultSelector }
