import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'

// el id viene desde App.js con el path, reach router lo inyecta automáticamente
// el path es /per/:id si cambio id por otro nombre, tengo que cambiar la prop que recibe este componente a ese mismo nombre para que funcione

const HomePage = ({ id }) => {
  return (
    <Layout title='Inicio' subtitle='Con instagram puedes encontrar fotos de todo tipo'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

const Home = React.memo(HomePage, (prevProps, props) => {
  // le decimos que no lo vuelva a renderizar si las props son las mismas
  // props.id es porque tiene una prop llamada id
  return prevProps.id === props.id
})

export default Home
