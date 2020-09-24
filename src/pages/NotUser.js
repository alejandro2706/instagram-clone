import { useMutation } from '@apollo/client'
import { gql } from 'apollo-boost'
import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { UserContext } from '../Context'

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const NotUser = () => {
  const [register, { dataRegister, loadingRegister, errorRegister }] = useMutation(REGISTER)
  const [login, { dataLogin, loadingLogin, errorLogin }] = useMutation(LOGIN)
  const { activateAuth } = useContext(UserContext)

  const onSubmitRegister = ({ email, password }) => {
    //  input porque es el nombre del Obj que recibe la mutación
    const input = { email, password }
    register({ variables: { input } })
      .then(activateAuth)
  }
  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    login({ variables: { input } })
  }

  return (
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        title='Registrarse'
        error={errorRegister}
        loading={loadingRegister}
      />
      <UserForm
        onSubmit={onSubmitLogin}
        title='Iniciar Sesión'
        error={errorLogin}
        loading={loadingLogin}
      />
    </>
  )
}
