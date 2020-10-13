import React from 'react'

import SearchBox from '.'

export default {
  title: 'SearchBox',
}

export const Default = () => (
  <SearchBox
    title="Restaurant Principal"
    image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
    info="Repas variés"
  />
)

export const withSuggestions = () => (
  <SearchBox
    title="Restaurant Principal"
    image="https://www.uir.ac.ma/upload/cbuilder/3e5aa8eb56fb64e0d9340fa21687e7693c14fe56.png"
    info="Repas variés"
    suggestions={['Cafe au lait', 'Thé', 'Petit déjeuner']}
  />
)
