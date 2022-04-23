import {Plugins, AppState} from '@capacitor/core'
import {environment} from './../../../../../../environments/environment'
import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {SharedService} from './../../../../../services/shared.service'
import {SubscriptionService} from './../../../../../services/subscription.service'
import {Router} from '@angular/router'
import {NavController, Platform, AlertController, LoadingController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'

const {App} = Plugins
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.page.html',
  styleUrls: ['./subscription.page.scss'],
})
export class SubscriptionPage implements OnInit {
  product: any
  monthly
  yearly
  sixMonths
  isProduct = false
  profile
  subscriptionDetails
  // isMobile = false
  products = [
    'com.startenglishnow.yearly',
    'com.startenglishnow.6months',
    'com.startenglishnow.monthly',
  ]
  productType
  validatorURL = environment.validatorURL
  isWeb = false

  constructor(
    private router: Router,
    public platform: Platform,
    private subscriptionService: SubscriptionService,
    public sharedService: SharedService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private onBoardingService: OnBoardingService,
    public navController: NavController,
  ) {
    // App.addListener('appStateChange', (state: AppState) => {
    //   // state.isActive contains the active state
    //   console.log('App state changed. Is active?', state.isActive)
    //   if (state.isActive) {
    //     this.getUserProfileAndSubscriptions(false)
    //   }
    // })
  }

  ngOnInit() {
    this.sharedService.getDeviceInfo().then((info) => {
      this.isWeb = !info.isApp
    })
  }

  ionViewWillEnter() {
    this.getUserProfileAndSubscriptions()
  }

  async getUserProfileAndSubscriptions() {
    try {
      // this.sharedService.presentLoader('Please wait...')

      const {data: profile} = await this.onBoardingService.getUserProfile().toPromise()
      console.log({profile})
      if (profile.currentPackage !== 'Subscription') {
        await this.sharedService.dismissLoader()
        this.router.navigate(['/subscriptionplans'])
        return
      }

      this.profile = profile

      await this.getSubscriptionDetails(this.profile.subscriptionType || 'Android')
    } catch (error) {
      console.log(error)
    } finally {
      // this.sharedService.dismissLoader()
      console.log('finally')
      this.isProduct = true
    }
    console.log('out of try')
  }

  async getSubscriptionDetails(subscriptionType) {
    try {
      const res = await this.subscriptionService
        .getUserSubscription({subscriptionType})
        .toPromise()

      if (res.message === 'Your subscription has been canceled.') {
        await this.sharedService.dismissLoader()
        this.router.navigate(['/subscriptionplans'])
      } else {
        this.subscriptionDetails = res.data
      }
    } catch (error) {
      console.log(error)
    }
  }
  async turnOffStripeAutoRenewal() {
    try {
      this.sharedService.presentLoader('Please wait...')

      const res = await this.subscriptionService
        .turnOffAutoRenewalForStripe(this.subscriptionDetails.subscriptionId)
        .toPromise()

      this.sharedService.presentToast('Successfully canceled.')
      await this.getSubscriptionDetails('Stripe')
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async turnOffAutoRenewal() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message: 'Are you sure you want to turn off auto-renewal?',
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
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay')

            if (this.profile.subscriptionType === 'Stripe') {
              this.turnOffStripeAutoRenewal()
            } else if (this.profile.subscriptionType === 'iOS') {
              window.open('itms-apps://apps.apple.com/account/subscriptions', '_blank')
              // this.store.manageSubscriptions()
            } else if (this.profile.subscriptionType === 'Android') {
              window.open(
                'https://play.google.com/store/account/subscriptions?sku=' +
                  this.subscriptionDetails.productId +
                  '&package=' +
                  'com.startenglishnow.speakypeaky',
              )
            }
          },
        },
      ],
    })

    await alert.present()
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/account'])
  }

  home() {
    this.navController.setDirection('root')
    this.router.navigate(['/dashboard/lessons'])
  }

  gotoStripeManage() {
    this.navController.setDirection('forward')
    this.router.navigate(['/payment/manage'])
  }
}
