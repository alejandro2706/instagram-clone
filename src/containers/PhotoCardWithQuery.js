import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useQuery, gql } from '@apollo/client'
import { SkeletonLoader } from '../components/SkeletonLoader'

const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo (id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  // useQuery recibe la query, y un objeto con las variables que se necesitan
  // en este caso necesita el id que le pasamos en App.js que es el search de la url
  const { data, loading } = useQuery(GET_PHOTO, { variables: { id: id } })

  return (
    <>
      {
        loading
          ? <SkeletonLoader />
          : <PhotoCard id={id} {...data.photo} />
      }
    </>
  )
}
