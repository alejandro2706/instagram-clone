import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Category } from '../Category'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(10)
    setLoading(true)
    window.fetch('https://petgram-server-sable.vercel.app/categories')
      .then(res => {
        setProgress(50)
        return res.json()
      })
      .then(data => {
        setCategories(data)
        setLoading(false)
        setProgress(100)
      })
  }, [])
  return { categories, loading, progress }
}

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading, progress } = useCategoriesData()

  useEffect(() => {
    const onScroll = () => {
      const newShoFixed = window.scrollY > 200
      setShowFixed(newShoFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <LoadingBar progress={progress} />
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
