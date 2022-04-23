import {AddCardComponent} from './add-card/add-card.component'
import {Router, ActivatedRoute} from '@angular/router'
import {NavController, ModalController, LoadingController} from '@ionic/angular'
import {SubscriptionService} from './../../../../../../services/subscription.service'
import {OnBoardingService} from './../../../../../../services/on-boarding.service'
import {SharedService} from './../../../../../../services/shared.service'
import {Component, OnInit, isDevMode} from '@angular/core'
import {environment} from '../../../../../../../environments/environment'
declare var Stripe

@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.page.html',
  styleUrls: ['./stripe-payment.page.scss'],
})
export class StripePaymentPage implements OnInit {
  // Add Stripe Public Key
  stripe = Stripe(environment.stripePublicKey)
  card: any
  paymentCards = []
  customerDetails: any = undefined
  profile: any
  isDevelopmentMode = false
  isProcessing = false
  productId: any

  constructor(
    public sharedService: SharedService,
    private onBoardingService: OnBoardingService,
    public navController: NavController,
    private router: Router,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private subscriptionService: SubscriptionService,
  ) {}

  ngOnInit() {
    if (isDevMode()) {
      this.isDevelopmentMode = true
    } else {
      this.isDevelopmentMode = false
    }
    console.log('this.isDevelopmentMode', this.isDevelopmentMode)

    this.route.params.subscribe(
      (params) => {
        if (params.productId) {
          this.productId = params.productId
        }
      },
      (error) => {
        console.log(error)
      },
    )
    this.getCustomer()
  }
  async getProfile() {
    try {
      const res = await this.onBoardingService.getUserProfile(true).toPromise()
      return res.data
    } catch {}
  }

  async getCustomer() {
    try {
      this.sharedService.presentLoader('Please wait...')

      const profile = await this.getProfile()

      if (profile) {
        this.profile = profile
        const stripeCustomerId = this.isDevelopmentMode
          ? profile.stripeSandBoxCustomerId
          : profile.stripeLiveCustomerId

        if (!stripeCustomerId) {
          await this.createCustomer(profile.email)
        } else {
          await this.getCustomerDetails(stripeCustomerId)
        }
      }
    } catch (error) {
      this.sharedService.dismissLoader()
      console.log(error)
    }
  }

  async createCustomer(email) {
    console.log('createCustomer', email)

    try {
      const res = await this.subscriptionService.createStripeCustomer({email}).toPromise()

      this.setStripeCustomerId(res.data.id)
    } catch (error) {
      console.log(error)
      this.sharedService.presentToast(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async setStripeCustomerId(stripeCustomerId) {
    try {
      const data = {
        customerId: stripeCustomerId,
        type: this.isDevelopmentMode ? 'sandbox' : 'production',
      }

      await this.subscriptionService.setStripeCustomerId(data).toPromise()
      const profile = await this.getProfile()
      this.profile = profile
    } catch (error) {
      console.log(error)
      this.sharedService.presentToast(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async getAllPaymentMethods() {
    try {
      const profile = await this.getProfile()
      const stripeCustomerId = this.isDevelopmentMode
        ? profile.stripeSandBoxCustomerId
        : profile.stripeLiveCustomerId

      const data = {
        type: 'card',
        customerId: stripeCustomerId,
      }

      const res = await this.subscriptionService
        .getCustomerAllPaymentMethods(data)
        .toPromise()

      console.log('getAllPaymentMethods', res)
      if (res.data.data.length) {
        this.paymentCards = res.data.data

        console.log('getCustomerDetails')
        const customerDetails = await this.subscriptionService
          .getCustomerDetails(stripeCustomerId)
          .toPromise()
        console.log({customerDetails})
        this.customerDetails = customerDetails.data

        this.paymentCards.map((card: any) => {
          if (card.id === this.customerDetails.default_source) {
            card.default = true
          } else {
            card.default = false
          }
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async getCustomerDetails(customerId) {
    try {
      const res = await this.subscriptionService
        .getCustomerDetails(customerId)
        .toPromise()

      this.customerDetails = res.data
      this.getAllPaymentMethods()
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async onAddCard() {
    const modal = await this.modalController.create({
      component: AddCardComponent,
      componentProps: {profile: this.profile},
      mode: 'md',
    })
    await modal.present()
    await modal
      .onDidDismiss()
      .then(() => {
        this.getAllPaymentMethods()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async onProcessedToPayUsingStripe() {
    if (this.customerDetails.default_source === null || this.productId === undefined) {
      this.sharedService.presentToast('Please enter card details')
      return
    }

    try {
      const data = {
        planId: this.productId,
        default_source: this.customerDetails.default_source,
        customerId: this.customerDetails.id,
        noCoupon: true,
      }
      this.isProcessing = true
      this.sharedService.presentLoader('Please wait...')

      this.subscriptionService.processedToPayUsingStripe(data).subscribe(
        (res) => {
          this.setUserSubscription(res.data)
        },
        (error) => {
          console.log(error)
          this.sharedService.dismissLoader()
          this.isProcessing = true
          this.sharedService.presentToast(error.err.rawType)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/subscriptionplans'])
  }

  setUserSubscription(data) {
    const userSubscription = {
      type: 'Stripe',
      orderId: data.id,
      packageName: 'com.summer.startenglishnow',
      userSubscriptionStartDate: data.current_period_start * 1000,
      userSubscriptionEndDate: data.current_period_end * 1000,
      productId: data.plan.id,
      productType: this.productId,
    }

    try {
      this.subscriptionService.setUserSubscription(userSubscription).subscribe(
        (res) => {
          this.sharedService.presentToast(res.message)
          this.sharedService.dismissLoader()
          this.navController.setDirection('root')
          this.getProfile().then(() => {
            this.router.navigate(['/dashboard/lessons'])
          })
        },
        (error) => {
          console.log(error)
          this.sharedService.dismissLoader()
        },
      )
    } catch (error) {
      this.sharedService.dismissLoader()
      console.log(error)
    }
  }

  onSetDefaultCard(paymentCard) {
    this.customerDetails.default_source = paymentCard.id
    this.paymentCards.forEach((card) => {
      card.default = card.id === this.customerDetails.default_source
    })
  }
}
