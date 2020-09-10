import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      function onObserve (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      }
      const observer = new window.IntersectionObserver(onObserve)
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
