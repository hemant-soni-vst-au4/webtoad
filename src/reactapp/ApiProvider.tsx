import * as React from 'react'
import {CachePolicies, Provider} from 'use-http'
import {environment} from 'src/environments/environment'
import {Plugins} from '@capacitor/core'
const {Storage} = Plugins

async function getNativeStorage(key) {
  const ret = await Storage.get({key})
  let value = JSON.parse(ret.value)
  if (!value) {
    value = {data: null}
  }
  return value
}

const ApiProvider: React.FC = ({children}) => {
  const options = {
    cachePolicy: CachePolicies.NO_CACHE,
    interceptors: {
      request: async ({options, url, path, route}) => {
        // console.log({url, path, options})
        const token = await getNativeStorage('token')
        if (token?.data) {
          options.headers.accesstoken = token.data
        }
        // console.log({token1})
        // const token = JSON.parse(localStorage.getItem('_cap_token')).data

        return options
      },

      // every time we make an http request, before getting the response back, this will run
      // response: async ({ response }) => {
      //   // unfortunately, because this is a JS Response object, we have to modify it directly.
      //   // It shouldn't have any negative affect since this is getting reset on each request.
      //   const res = response
      //   if (res.data) res.data = toCamel(res.data)
      //   return res
      // }
    },
  }
  return (
    <Provider url={environment.API_URL} options={options}>
      {children}
    </Provider>
  )
}
export default ApiProvider
