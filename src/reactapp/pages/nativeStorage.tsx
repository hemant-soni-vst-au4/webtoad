import {Plugins} from '@capacitor/core'
const {Storage} = Plugins

export async function setNativeStorage(key: string, value: boolean) {
  // this.postMessage('setValue', {key, value})
  // this.storageCache[key] = {data: value}
  return await Storage.set({
    key,
    value: JSON.stringify({
      data: value,
    }),
  })
}

export async function getNativeStorage(key: string) {
  const ret = await Storage.get({key})
  let value = JSON.parse(ret.value)
  if (!value) {
    value = {data: null}
  }
  return value
}

export async function removeNativeStorage(key) {
  // this.postMessage('removeValue', {key})
  return await Storage.remove({key})
}
