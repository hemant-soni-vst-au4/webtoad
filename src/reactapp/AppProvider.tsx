import * as React from 'react'
import ApiProvider from './ApiProvider'
import {ApolloProvider} from '@apollo/client'
import {client} from './apollo-client'
import {useGetProfileQuery} from './types-and-hooks'

const WithProfile: React.FC = ({children}) => {
  const {loading, data} = useGetProfileQuery()
  if (loading || !data?.profile) {
    return null
  }
  return <>{children}</>
}

const AppProvider: React.FC = ({children}) => {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <WithProfile>
          <ApiProvider>{children}</ApiProvider>
        </WithProfile>
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default AppProvider
