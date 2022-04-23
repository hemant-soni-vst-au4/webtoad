import {useStore} from 'src/reactapp/useStore'

export function useHelpGuide(storageKey, steps) {
  const sharedService = useStore((state) => state.sharedService)

  async function showHelpGuide() {
    const data = await sharedService.getNativeStorage(storageKey)
    if (data?.data !== true) {
      return new Promise((resolve, reject) => {
        sharedService.showHelpGuide({
          steps,
          onClose: () => {
            sharedService.setNativeStorage(storageKey, true).then(() => {
              const el = document.getElementById('ion-content')
              //@ts-ignore
              el.scrollToTop()
              resolve(true)
            })
          },
          delay: 200,
        })
      })
    }
    return null
  }

  return {showHelpGuide}
}
