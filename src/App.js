import React, { Suspense, useContext } from 'react'
import { Router, Redirect } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Navbar } from './components/Navbar'
import { NotUser } from './pages/NotUser'
import { FooterNav } from './components/FooterNav'
import { UserContext } from './Context'
import { NotFound } from './pages/NotFound'

function App () {
  const { isAuth } = useContext(UserContext)
  const Home = React.lazy(() => import('./pages/Home'))
  const Detail = React.lazy(() => import('./pages/Detail'))
  const User = React.lazy(() => import('./pages/User'))
  const Favs = React.lazy(() => import('./pages/Favs'))

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<h1>Loading</h1>}>
        <Navbar />
        <Router>
          <NotFound default />
          <Home path='/' />
          <Home path='/pet/:id' />
          <Detail path='/detail/:detailId' />
          {!isAuth && <NotUser path='/login' />}
          {!isAuth && <Redirect from='/favs' noThrow to='/login' />}
          {!isAuth && <Redirect from='/user' noThrow to='/login' />}
          {isAuth && <Redirect from='/login' noThrow to='/' />}
          <User path='/user' />
          <Favs path='/favs' />
        </Router>
        <FooterNav />
      </Suspense>
    </>
  )
}

export default App
