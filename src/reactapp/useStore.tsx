import {ActivatedRoute} from '@angular/router'
import {NavController, Platform} from '@ionic/angular'
import React from 'react'
import {MyDeviceInfo, SharedService} from 'src/app/services/shared.service'
import useFetch, {CachePolicies} from 'use-http'
import create from 'zustand'
import {client} from './apollo-client'
import {ApolloClient, NormalizedCacheObject} from '@apollo/client'

type State = {
  client: ApolloClient<NormalizedCacheObject>
  deviceInfo: MyDeviceInfo | null
  navController: NavController | null
  route: ActivatedRoute | null
  platform: Platform | null
  sharedService: SharedService | null
  profile: any
  setProfile: (profile: any) => void
  // bears: number
  // increase: (by: number) => void
}

export const useStore = create<State>((set) => ({
  // bears: 0,
  deviceInfo: null,
  client: client,
  navController: null,
  platform: null,
  sharedService: null,
  route: null,
  profile: null,
  setProfile: (profile: any) => set({profile}),

  // increase: (by) => set((state) => ({bears: state.bears + by})),
}))

export function useProfile() {
  const profile = useStore((store) => store.profile)
  const setProfile = useStore((store) => store.setProfile)

  const {get, loading, error, cache} = useFetch(
    '/user/get-profile',
    {
      cachePolicy: CachePolicies.NO_CACHE,
      cacheLife: 1000,
      onNewData: (curData, newData) => {
        setProfile(newData?.data)
      },
    },
    [],
  )
  function refetch() {
    get()
  }
  // const profile = data?.data

  return {profile, loading, error, get, cache, refetch}
}
