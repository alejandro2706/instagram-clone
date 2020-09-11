import React from 'react'
import ContentLoader from 'react-content-loader'

export const SkeletonLoader = props => (
  <ContentLoader
    speed={1}
    width={500}
    height={460}
    viewBox='0 0 400 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='18' cy='436' r='15' />
    <rect x='44' y='422' rx='2' ry='2' width='140' height='10' />
    <rect x='46' y='440' rx='2' ry='2' width='140' height='10' />
    <rect x='6' y='9' rx='2' ry='2' width='400' height='400' />
  </ContentLoader>
)

SkeletonLoader.metadata = {
  name: 'RoyalBhati',
  github: 'royalbhati',
  description: 'Dev.to card',
  filename: 'DevToCard'
}
