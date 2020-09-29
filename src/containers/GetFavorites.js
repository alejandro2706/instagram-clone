import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'
import React from 'react'
import { ListOfFavs } from '../components/ListoOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const GetFavorites = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })

  if (error) return <h1>Error en favs</h1>
  if (loading) return <h1>Cargando...</h1>

  return (
    <div>
      {
        data
          ? <ListOfFavs data={data} />
          : <h1>Cargando...</h1>
      }
    </div>

  )
}
