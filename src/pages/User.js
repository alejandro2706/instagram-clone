import React, { useContext } from 'react'
import { UserContext } from '../Context'
import { SubmitButton as Button } from '../components/SubmitButton'

const User = () => {
  const { removeAuth } = useContext(UserContext)
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  )
}

export default User
