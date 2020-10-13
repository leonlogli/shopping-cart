import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Page } from '../../../api'
import { MenuItem } from '../../menu/state'
import { Restaurant } from '../../restaurant/state'
import searchService from './searchService'

export type SearchMenuItem = MenuItem & {
  restaurant: Pick<Restaurant, 'id' | 'name' | 'image'>
}

export interface SearchMenuPayload {
  searchText: string
  searchResult: Page<SearchMenuItem>
}

interface SearchState {
  searchResult: Page<SearchMenuItem>
  searchText?: string
  searchTerms: string[]
  error?: Error | null
  loading?: boolean
}

const initialState: SearchState = {
  searchResult: {
    data: [],
    page: { number: 0, totalElements: 0, size: 20, totalPages: 0 },
  },
  searchTerms: [],
}

function startLoading(state: SearchState) {
  state.loading = true
}

function loadingFailed(state: SearchState, action: any) {
  state.loading = false
  state.error = action.error
}

export const searchMenus = createAsyncThunk(
  'search/searchMenus',
  searchService.searchMenus
)

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    [searchMenus.pending.type]: startLoading,
    [searchMenus.rejected.type]: loadingFailed,

    [searchMenus.fulfilled.type]: (
      state,
      { payload }: PayloadAction<SearchMenuPayload>
    ) => {
      state.searchResult = payload.searchResult
      state.searchText = payload.searchText
      state.loading = false
      state.error = null

      if (!state.searchTerms.includes(payload.searchText)) {
        state.searchTerms.push(payload.searchText)
      }
    },
  },
})

export default search.reducer
