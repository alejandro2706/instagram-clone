import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton as Button } from '../SubmitButton'
import { Spinner } from '../Spinner'

export const UserForm = ({ onSubmit, title, error, loading }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  const buttonContent = loading ? <Spinner /> : title
  // hacemos el rest operator porque las keys del objeto de useInputValue tienen el mismo nombre que reciben las props de los inputs, que son value y onChange; esto en vez de poner value={email.value} onChange={email.onChange}
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder='Email' {...email} />
        <Input placeholder='Password' type='password' {...password} />
        <Button disabled={loading || !email.value}>{buttonContent}</Button>
        {error && <Error>Usuario ya registrado</Error>}
      </Form>
    </>
  )
}
