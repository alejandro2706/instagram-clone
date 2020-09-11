import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Navbar } from './components/Navbar'

function App () {
  // URLSearchParams recibe la query string de la barra de direcciones
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {
        detailId
          ? <h1>Detail id</h1>
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>
          )
      }
    </>
  )
}

export default App
