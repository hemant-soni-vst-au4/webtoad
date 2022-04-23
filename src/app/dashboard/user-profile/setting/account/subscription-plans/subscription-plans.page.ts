import {Plugins, AppState} from '@capacitor/core'
import {environment} from '../../../../../../environments/environment'
import {OnBoardingService} from '../../../../../services/on-boarding.service'
import {SharedService} from '../../../../../services/shared.service'
import {SubscriptionService} from '../../../../../services/subscription.service'
import {Router} from '@angular/router'
import {NavController, Platform, AlertController, LoadingController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
import {InAppPurchase2, IAPProduct} from '@ionic-native/in-app-purchase-2/ngx'
import {client} from 'src/reactapp/apollo-client'
import {GetProfileDocument} from 'src/reactapp/types-and-hooks'
const {App} = Plugins

interface androidTransaction {
  id: string
  purchaseState: number
  purchaseToken: string
  receipt: string
  signature: string
  type: string
}

interface androidReceipt {
  orderId: string
  packageName: string
  productId: string
  purchaseTime: number
  purchaseState: number
  purchaseToken: string
  obfuscatedAccountId: string
  autoRenewing: boolean
  acknowledged: boolean
}

const productTypes = {
  'com.startenglishnow.yearly': 'yearly',
  'com.startenglishnow.6months': '6_months',
  'com.startenglishnow.monthly': 'monthly',
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription-plans.page.html',
  styleUrls: ['./subscription-plans.page.scss'],
})
export class SubscriptionPlansPage {
  monthly
  yearly
  sixMonths
  isProductLoaded = false
  productIds = [
    'com.startenglishnow.yearly',
    'com.startenglishnow.6months',
    'com.startenglishnow.monthly',
  ]
  products
  orderProduct

  productType
  validatorURL = environment.validatorURL
  profile

  handlers = []

  constructor(
    private router: Router,
    public platform: Platform,
    private subscriptionService: SubscriptionService,
    private store: InAppPurchase2,
    public sharedService: SharedService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private onBoardingService: OnBoardingService,
    public navController: NavController,
  ) {
    const productIds = this.productIds
    // store.verbosity = store.DEBUG
    // store.verbosity = store.INFO

    // const list = productIds.filter((p) => !store.products.byId[p])
    // if (list.length === 0) {
    //   this.products = store.products
    //   this.isProductLoaded = true
    // } else {
    //   store.register(
    //     list.map((p) => ({
    //       id: p,
    //       alias: p,
    //       type: store.PAID_SUBSCRIPTION,
    //     })),
    //   )
    // }

    // store.error(this.errorCb.bind(this))
  }

  ionViewWillEnter() {
    console.log('enter')
    this.orderProduct = null
    this.isProductLoaded = false
    setTimeout(() => {
      this.initIapStore()
    }, 100)
    // this.setupIAP()
  }

  async initIapStore() {
    const {data: profile} = await this.onBoardingService.getUserProfile().toPromise()

    if (profile) {
      if (profile.currentPackage === 'Subscription') {
        // return this.navController.navigateRoot('/subscription')
      }
      this.profile = profile
      const store = this.store

      store.applicationUsername = this.profile._id

      store.validator = this.validatorURL
      //@ts-ignore

      const list = this.productIds.filter((p) => !store.get(p))
      console.log({list})
      if (list.length === 0) {
        this.products = store.products
        this.isProductLoaded = true
      } else {
        store.register(
          list.map((p) => ({
            id: p,
            alias: p,
            type: store.PAID_SUBSCRIPTION,
          })),
        )
      }
      const onReady = (p) => this.onReady.bind(this)()
      const errorCb = (p) => this.errorCb.bind(this)(p)
      const registeredCb = (p) => this.registeredCb.bind(this)(p)
      const updatedCb = (p) => this.updatedCb.bind(this)(p)
      const expiredCb = (p) => this.expiredCb.bind(this)(p)
      const approvedCb = (p) => this.approvedCb.bind(this)(p)
      const verifiedCb = (p) => this.verifiedCb.bind(this)(p)
      const finishedCb = (p) => this.finishedCb.bind(this)(p)
      const ownedCb = (p) => this.ownedCb.bind(this)(p)

      this.handlers.push(
        onReady,
        errorCb,
        registeredCb,
        updatedCb,
        expiredCb,
        approvedCb,
        verifiedCb,
        finishedCb,
        ownedCb,
      )

      store.ready(onReady)
      store.error(errorCb)
      store.when('subscription').registered(registeredCb)
      store.when('subscription').updated(updatedCb)
      store.when('subscription').expired(expiredCb)
      store.when('subscription').approved(approvedCb)
      store.when('subscription').verified(verifiedCb)
      store.when('subscription').finished(finishedCb)
      store.when('subscription').owned(ownedCb)
      // store.when('subscription').registered((...args) => console.log('registered'))
      // store.when('subscription').updated((...args) => console.log('updated'))
      // store.when('subscription').expired((...args) => console.log('expired'))
      // store.when('subscription').approved((product) => {
      //   console.log('approved', product.id)

      //   return product.finish()
      // })
      // store.when('subscription').verified((...args) => console.log('verified'))
      // store
      //   .when('subscription')
      //   .finished((product: IAPProduct) => console.log('finished', product.id))
      // store.when('subscription').owned((product: IAPProduct) => {
      //   console.log('owned', product.id, product.owned)
      // })
      // store.error((...args) => console.log('error', args))

      store.refresh()

      if (!this.isProductLoaded) {
      }
    }
  }
  onReady() {
    console.log('ready', this.store, this)

    this.isProductLoaded = true
  }

  ionViewWillLeave() {
    this.orderProduct = null
    const store = this.store
    console.log('leave')
    this.handlers.forEach((h) => store.off(h))
    this.handlers = []
    // store.off(this.onReady)
    // store.off(this.errorCb)
    // store.off(this.registeredCb)
    // store.off(this.updatedCb)
    // store.off(this.expiredCb)
    // store.off(this.approvedCb)
    // store.off(this.verifiedCb)
    // store.off(this.finishedCb)
    // store.off(this.ownedCb)
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/account'])
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  async alertNotVerified(profile) {
    const alert = await this.alertController.create({
      header: 'Speaky Peaky',
      message:
        "It seems like you haven't verified your account. <br> Please check your email for verification.",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah')
          },
        },
        {
          text: 'Resend',
          handler: () => {
            console.log('Confirm Okay')
            this.verifyEmail(profile)
          },
        },
      ],
    })
    await alert.present()
  }

  async checkoutIAP(productId) {
    try {
      console.log('checkoutIAP', productId)
      const {data: profile} = await this.onBoardingService.getUserProfile().toPromise()

      if (profile.status === 'NotVerified') {
        await this.alertNotVerified(profile)
        return
      }

      const store = this.store
      this.orderProduct = store.get(productId)
      store
        .order(productId, {
          applicationUsername: profile._id,
        })
        .error((err) => {
          console.log({err})
          this.orderProduct = null
        })
        .then((product: IAPProduct) => {
          this.orderProduct = product
          console.log('then', product.id)
        })
      this.sharedService.presentLoader('Please wait...')
      console.log('ordered')
    } catch (err) {
      console.log('Error Ordering ' + err)
      this.sharedService.presentToast(err)
    }
  }

  setupIAP() {
    const store = this.store

    store.when('subscription').registered(this.registeredCb.bind(this))
    store.when('subscription').updated(this.updatedCb.bind(this))
    store.when('subscription').expired(this.expiredCb.bind(this))
    store.when('subscription').approved(this.approvedCb.bind(this))
    store.when('subscription').verified(this.verifiedCb.bind(this))
    store.when('subscription').finished(this.finishedCb.bind(this))
    store.when('subscription').owned(this.ownedCb.bind(this))

    if (!this.isProductLoaded) {
      store.refresh()
    }
  }

  registeredCb(product: IAPProduct) {
    console.log('registered' + product.alias)
  }

  errorCb(error) {
    console.log({error})
    this.sharedService.dismissLoader()
  }

  updatedCb(product: IAPProduct) {
    const store = this.store
    // if (this.isProductLoaded) {
    //   store.off(this.updatedCb)
    //   return
    // }
    // console.log('updated', product.id, product.valid)
    const productIds = this.productIds

    // console.log('store.products', store.products)
    const products = productIds.map((p) => store.get(p))
    if (products.every((v) => v && v.valid)) {
      // console.log('update: registed all')
      if (this.products?.length >= 3) {
        products.forEach((p, i) => {
          this.products[i] = p
        })
      } else {
        this.products = products
      }
      //@ts-ignore
      if (store.ready()) {
        // console.log('ready')
        this.isProductLoaded = true
      }
    }
  }

  expiredCb(product: IAPProduct) {
    console.log('expired', product.id)
    product.finish()
  }

  approvedCb(product: IAPProduct) {
    console.log('approved', this.orderProduct?.id, product.id, product.owned)
    if (this.orderProduct?.id === product.id) {
      product.verify()
    } else {
      product.finish()
    }
    return
    // return product.finish()

    if (product.owned) {
      product.finish()
    } else {
      product.verify()
    }
  }

  verifiedCb(product: IAPProduct) {
    console.log('verified', product.id)

    this.setSubscription(product)
      .then((success) => {
        console.log({success})
        if (success) {
          product.finish()
        }
      })
      .catch((err) => {
        this.sharedService.dismissLoader()
        console.log({err})
      })
  }

  finishedCb(product: IAPProduct) {
    console.log('finished', product.id, product.owned)
  }

  ownedCb(product: IAPProduct) {
    console.log('owned', product.id, product.owned)
    if (this.orderProduct?.id === product.id && product.owned) {
      this.finishCheckout(product)
    } else {
      this.sharedService.dismissLoader()
    }
  }

  async finishCheckout(product: IAPProduct) {
    const {data: profile} = await this.onBoardingService.getUserProfile(true).toPromise()
    await client.query({query: GetProfileDocument, fetchPolicy: 'network-only'})
    await this.sharedService.dismissLoader()
    if (profile.currentPackage === 'Subscription') {
      console.log(profile.currentPackage)
      this.sharedService.presentToast('Subscribed successfully. Enjoy learning English!')

      this.navController.setDirection('root')
      this.router.navigate(['/subscription'])
    } else {
      this.sharedService.presentToast('Something went wrong')
    }
  }

  async setSubscription(product: IAPProduct) {
    if (this.platform.is('android')) {
      return this.setSubscriptionAndroid(product)
    } else if (this.platform.is('ios')) {
      return this.setSubscriptionIOS(product)
    }
  }

  async setSubscriptionAndroid(product: IAPProduct) {
    console.log(product)
    const transaction: androidTransaction = product.transaction
    // const response = JSON.stringify(product)
    // const parseResponse = JSON.parse(response)
    const receipt: androidReceipt = JSON.parse(transaction.receipt)

    if (!receipt.autoRenewing) {
      throw new Error('no autoRenewing')
    }

    const productType = productTypes[product.id]
    const data = {
      orderId: receipt.orderId,
      packageName: receipt.packageName,
      productId: receipt.productId,
      purchaseToken: receipt.purchaseToken,
      type: 'Android',
      productType: productType,
    }

    const res = await this.subscriptionService.setUserSubscription(data).toPromise()
    if (res.message.startsWith('Subscribed successfully.')) {
      return true
    } else {
      throw new Error('server error')
    }
  }

  async setSubscriptionIOS(product: IAPProduct) {
    if (!product.transaction.appStoreReceipt) {
      return
    }
    const receipt = product.transaction
    const productType = productTypes[product.id]
    const data = {
      orderId: receipt.transaction_id,
      packageName: 'com.summer.startenglishnow',
      productId: receipt.product_id,
      purchaseToken: receipt.appStoreReceipt,
      type: 'iOS',
      productType: productType,
    }
    const res = await this.subscriptionService.setUserSubscription(data).toPromise()
    if (res.message.startsWith('Subscribed successfully.')) {
      return true
    } else {
      throw new Error('server error')
    }
  }

  async verifyEmail(profile: any) {
    try {
      this.sharedService.presentLoader('Please wait...')

      const res = await this.onBoardingService.verifyEmail(profile.email).toPromise()
      this.sharedService.presentAlert(res.message)
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }
}
