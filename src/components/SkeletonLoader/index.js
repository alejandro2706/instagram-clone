import React from 'react'
import ContentLoader from 'react-content-loader'

export const SkeletonLoader = props => (
  <ContentLoader
    speed={2}
    width={500}
    height={460}
    viewBox='0 0 500 460'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='30' cy='270' r='21' />
    <rect x='59' y='250' rx='2' ry='2' width='140' height='20' />
    <rect x='0' y='34' rx='2' ry='2' width='500' height='210' />
  </ContentLoader>
)

SkeletonLoader.metadata = {
  name: 'RoyalBhati',
  github: 'royalbhati',
  description: 'Dev.to card',
  filename: 'DevToCard'
}
