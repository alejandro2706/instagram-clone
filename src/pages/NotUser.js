import React, { useContext } from 'react'
import { UserContext } from '../Context'
import { UserForm } from '../components/UserForm'

export const NotUser = () => {
  const { activateAuth } = useContext(UserContext)
  return (
    <UserForm onSubmit={activateAuth} />
  )
}
