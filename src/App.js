import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

function App () {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  )
}

export default App
