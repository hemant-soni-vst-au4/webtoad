import {environment} from './../../environments/environment'
import {Injectable} from '@angular/core'
import {
  ActionSheetController,
  LoadingController,
  NavController,
  Platform,
} from '@ionic/angular'
import {ToastController} from '@ionic/angular'
import {AlertController} from '@ionic/angular'
import {DeviceInfo, Plugins} from '@capacitor/core'
const {Storage, Toast, Device} = Plugins
import {Router} from '@angular/router'
import {BehaviorSubject} from 'rxjs'
import {chunk, fromPairs} from 'lodash'
import * as S3 from 'aws-sdk/clients/s3'
import {GoogleAnalytics} from '@ionic-native/google-analytics/ngx'
import * as Driver from 'driver.js'

const ERR_TOKEN_EXP = 'Your session has expired, please login again'

interface ReactNativeWebView {
  postMessage: (data: string) => {}
}

export interface MyDeviceInfo extends DeviceInfo {
  isApp: boolean
  isMobileWeb: boolean
  isDesktop: boolean
}

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  loadingPromise: Promise<HTMLIonLoadingElement>
  loading: HTMLIonLoadingElement
  alertShow: boolean
  video = new BehaviorSubject<any>({})
  storageCache = {}
  deviceInfo
  rnWebview: ReactNativeWebView

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    public router: Router,
    public platform: Platform,
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public navController: NavController,
    private ga: GoogleAnalytics,
  ) {
    this.alertShow = false
    this.getDeviceInfo().then((info) => console.log({info}))
    this.rnWebview = window['ReactNativeWebView']
  }

  async getDeviceInfo(): Promise<MyDeviceInfo> {
    if (!this.deviceInfo) {
      const info = await Device.getInfo()

      const isApp = ['ios', 'android'].includes(info.platform)
      const isMobileWeb =
        info.platform === 'web' && ['ios', 'android'].includes(info.operatingSystem)
      const isDesktop = info.platform === 'web' && !isMobileWeb

      this.deviceInfo = {...info, isApp, isMobileWeb, isDesktop}
    }
    return this.deviceInfo
  }

  gaTrackView(title) {
    this.getDeviceInfo().then((info) => {
      if (info.isApp) {
        this.ga
          .startTrackerWithId('UA-118705303-1')
          .then(() => {
            console.log('Google analytics is ready now')
            this.ga.trackView(title)
          })
          .catch((e) => console.log('Error starting GoogleAnalytics', e))
      }
    })
  }
  gaTrackEvent(category, action) {
    this.getDeviceInfo().then((info) => {
      if (info.isApp) {
        this.ga.trackEvent(category, action)
      }
    })
  }

  async presentLoader(message) {
    if (!this.loading) {
      this.loadingPromise = this.loadingController.create({message})
      this.loading = await this.loadingPromise
      this.loadingPromise = null
      await this.loading.present()
    }
  }

  dismissLoader() {
    if (this.loading) {
      return this.loading.dismiss().then(() => {
        this.loading = null
      })
    }
    if (!this.loading && this.loadingPromise) {
      return this.loadingPromise.then((loading) => {
        loading.dismiss().then(() => {
          this.loading = null
        })
      })
    }
  }

  async presentToast(text) {
    if (this.platform.is('capacitor')) {
      await Toast.show({
        text,
        duration: 'long',
      })
    } else {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000,
      })
      toast.present()
    }
  }

  async setNativeStorage(key, value) {
    this.rnWebview?.postMessage(JSON.stringify({method: 'set', key, value}))
    this.storageCache[key] = {data: value}
    return await Storage.set({
      key,
      value: JSON.stringify({
        data: value,
      }),
    })
  }

  async getNativeStorage(key) {
    if (this.storageCache[key]) {
      return this.storageCache[key]
    }
    const ret = await Storage.get({key})
    let value = JSON.parse(ret.value)
    if (!value) {
      value = {data: null}
    }
    this.storageCache[key] = value
    return value
  }

  async removeNativeStorage(key) {
    this.rnWebview?.postMessage(JSON.stringify({method: 'remove', key}))
    delete this.storageCache[key]
    return await Storage.remove({key})
  }

  async presentAlert(header, subHeader?, message?) {
    const self = this

    console.log({message})
    if (!self.alertShow) {
      self.alertShow = true
      const alert = await this.alertController.create({
        header,
        subHeader,
        message,
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              self.alertShow = false
              if (message === ERR_TOKEN_EXP) {
                this.removeNativeStorage('token')
                this.router.navigate(['/login'])
              }
            },
          },
        ],
      })

      await alert.present()
    }
  }

  removeDuplicatesByProperty(myArr, prop) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos
    })
  }

  getS3Bucket(): any {
    const bucket = new S3({
      accessKeyId: environment.accessKeyId,
      secretAccessKey: environment.secretAccessKey,
      region: environment.region,
      // apiVersion: '2010-12-01'
      // ,
      // signatureVersion: 'v2',
      // endpoint: 's3-us-east-1.amazonaws.com/'
    })

    return bucket
  }

  acronymsWordParser(subTitle) {
    const meaning = subTitle
    let [_, ...rs] = meaning.split(/\((?<key>[A-Z][a-z]{2})\)/).map((s) => s.trim())
    let obj = fromPairs(chunk(rs, 2))
    return obj
  }

  compareAndHighlight(newElem, oldElem) {
    const old = oldElem.text().trim().split(' ')
    let text = ''
    newElem
      .text()
      .trim()
      .split(' ')
      .forEach((word, i) => {
        const oldText = old[i].toLowerCase().replace(/[^a-zA-Z ]/g, '')
        const newText = word.toLowerCase().replace(/[^a-zA-Z ]/g, '')

        if (newText !== oldText) {
          text += " <span class='highlight-difference'>" + word + '</span>'
        } else {
          text += ' ' + word
        }
      })
    newElem.html(text)
  }

  showHelpGuide({steps, onClose, delay = 1000}) {
    setTimeout(() => {
      const driver = new Driver({
        // animate: false, // Whether to animate or not
        // opacity: 0,
        allowClose: false, // Whether the click on overlay should close or not
        overlayClickNext: true, // Whether the click on overlay should move next
        doneBtnText: 'Done', // Text on the final button
        closeBtnText: 'Skip', // Text on the close button for this step
        // stageBackground: '#ffffff', // Background color for the staged behind highlighted element
        nextBtnText: 'Next', // Next button text for this step
        prevBtnText: 'Previous', // Previous button text for this step
        keyboardControl: false, // Allow controlling through keyboard (escape to close, arrow keys to move)
        // onNext: (Element) => {},
        onHighlightStarted: (Element) => {
          const node = Element.getNode() as HTMLElement
          node.scrollIntoView(false)
        },
        onDeselected: (Element) => {
          console.log('onDeselected')
          if (!driver.isActivated) {
            onClose()
          }
        },
      })

      driver.defineSteps(steps)

      driver.start()
    }, delay)
  }
}
