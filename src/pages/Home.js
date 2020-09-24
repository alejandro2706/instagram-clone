import React from 'react'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

// el id viene desde App.js con el path, reach router lo inyecta automáticamente
// el path es /per/:id si cambio id por otro nombre, tengo que cambiar la prop que recibe este componente a ese mismo nombre para que funcione

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
