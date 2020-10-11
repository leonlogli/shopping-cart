import React from 'react'

import SearchField from './SearchField'

export default {
  title: 'SearchField',
}

export const searchField = () => <SearchField />

export const open = () => <SearchField open />

export const naked = () => <SearchField open naked />
