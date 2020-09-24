import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotUser } from './pages/NotUser'
import { FooterNav } from './components/FooterNav'
import { UserContext } from './Context'

function App () {
  // URLSearchParams recibe la query string de la barra de direcciones
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
      </Router>
      <UserContext.Consumer>
        {
          ({ isAuth }) => (
            isAuth
              ? (
                <Router>
                  <User path='/user' />
                  <Favs path='/favs' />
                </Router>
              )
              : (
                <Router>
                  <NotUser path='/favs' />
                  <NotUser path='/user' />
                </Router>
              )
          )
        }
      </UserContext.Consumer>
      <FooterNav />
    </>
  )
}

export default App
