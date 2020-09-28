import React from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMutation, gql } from '@apollo/client'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const TOGGLE_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`

export const PhotoCard = ({ liked, id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  // recibe la query, y las variables que necesitemos de esa query, devuelve una función
  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { input: { id } }
  })

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id }
      }
    })
    // se pueden pasar las variables tanto aquí como en useMutation
  }

  return (
    <Article ref={element}>
      {
        show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </>
        )
      }
    </Article>
  )
}
