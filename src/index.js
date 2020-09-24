import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'
import UserProvider from './providers/UserProvider'

const client = new ApolloClient({
  uri: 'https://petgram-server-sable.vercel.app/graphql',
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
