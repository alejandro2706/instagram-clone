import React from 'react'
import { Img, Grid, Link } from './styles'

export const ListOfFavs = ({ data }) => {
  return (
    <Grid>
      {
        data
          ? data.favs.map(fav => (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Img src={fav.src} />
            </Link>
          ))
          : <h1>No hay favoritos</h1>
      }
    </Grid>
  )
}
