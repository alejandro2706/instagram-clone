import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Instagram</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <div>
        {children}
      </div>
    </>
  )
}
