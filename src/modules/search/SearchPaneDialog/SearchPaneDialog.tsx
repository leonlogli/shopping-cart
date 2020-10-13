import React, { ChangeEvent, useState, useEffect } from 'react'
import { DialogProps } from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'

import { MobileSearchPane } from '../../../components'

import { FullScreenDialogRoot } from './SearchPaneDialog.style'

import { commonSuggestions, textSearch } from '../state'

export type SearchPaneDialogProps = Pick<
  DialogProps,
  'id' | 'className' | 'open'
> & {
  onClose: () => void
}

const SearchPaneDialog = (props: SearchPaneDialogProps) => {
  const { onClose = () => null, open, ...other } = props
  const router = useRouter()

  const options = Array.from(new Set([...commonSuggestions]))

  const [suggestions, setSuggestions] = useState(options)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value

    setSuggestions(keyword ? textSearch(commonSuggestions, keyword) : options)
  }

  const handleSearch = (text?: string) => {
    if (text) {
      router.push({ pathname: '/results', query: { search_query: text } })
      onClose()
    }
  }

  useEffect(() => {
    router.prefetch('/results')
  }, [])

  const handleBackClick = () => {
    onClose()
  }

  return (
    <FullScreenDialogRoot open={open} {...other} keepMounted>
      <MobileSearchPane
        placeholder="Rechercher"
        onSearch={handleSearch}
        onChange={handleChange}
        onBack={handleBackClick}
        suggestions={suggestions}
        focus={open}
      />
    </FullScreenDialogRoot>
  )
}

export { SearchPaneDialog }
export default SearchPaneDialog
