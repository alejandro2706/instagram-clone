import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery, gql } from '@apollo/client'
import { SkeletonLoader } from '../SkeletonLoader'

// $categoryId sirve para filtrar las fotos por id
//  photos(categoryId: $categoryId) es para recuperar el valor de categoryId
const getPhotos = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(getPhotos, {
    variables: { categoryId: categoryId }
  })

  if (loading) return <SkeletonLoader />
  if (error) return <h1>error</h1>

  return (
    <ul>
      {data.photos.map(photo => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>
  )
}
