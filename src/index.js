import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, from, HttpLink, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import App from './App'
import UserProvider from './providers/UserProvider'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
  return forward(operation)
})

const errorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid token') {
      window.sessionStorage.removeItem('token')
      window.location = '/user'
    }
  }
)

const client = new ApolloClient({
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-sable.vercel.app/graphql'
    })
  ]),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <UserProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserProvider>
  , document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
