import React from 'react'
import { GetFavorites } from '../containers/GetFavorites'
import { Layout } from '../components/layout'

const Favs = () => {
  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <GetFavorites />
    </Layout>
  )
}

export default Favs
