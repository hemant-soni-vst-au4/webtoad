import {AddCardComponent} from './add-card/add-card.component'
import {Router} from '@angular/router'
import {NavController, ModalController, LoadingController} from '@ionic/angular'
import {SubscriptionService} from './../../../../../../services/subscription.service'
import {OnBoardingService} from './../../../../../../services/on-boarding.service'
import {SharedService} from './../../../../../../services/shared.service'
import {Component, OnInit, isDevMode} from '@angular/core'
import {environment} from '../../../../../../../environments/environment'
declare var Stripe

@Component({
  selector: 'app-stripe-manage',
  templateUrl: './stripe-manage.page.html',
  styleUrls: ['./stripe-manage.page.scss'],
})
export class StripeManagePage implements OnInit {
  // Add Stripe Public Key
  stripe = Stripe(environment.stripePublicKey)
  card: any
  paymentCards = []
  customerDetails: any = undefined
  isDevelopmentMode = true
  stripeCustomerId: string

  constructor(
    public sharedService: SharedService,
    private onBoardingService: OnBoardingService,
    public navController: NavController,
    private router: Router,
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

    this.getCustomer()
  }

  async getCustomer() {
    try {
      this.sharedService.presentLoader('Please wait...')

      const profileRes = await this.onBoardingService.getUserProfile().toPromise()

      if (profileRes.data) {
        const profile = profileRes.data

        const stripeCustomerId = this.isDevelopmentMode
          ? profile.stripeSandBoxCustomerId
          : profile.stripeLiveCustomerId

        this.stripeCustomerId = stripeCustomerId

        this.getAllPaymentMethods()
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async getAllPaymentMethods() {
    try {
      const stripeCustomerId = this.stripeCustomerId

      const data = {
        type: 'card',
        customerId: stripeCustomerId,
      }

      const res = await this.subscriptionService
        .getCustomerAllPaymentMethods(data)
        .toPromise()

      if (res.data.data.length) {
        this.paymentCards = res.data.data

        const customerDetails = await this.subscriptionService
          .getCustomerDetails(stripeCustomerId)
          .toPromise()

        this.customerDetails = customerDetails.data

        this.paymentCards.map((card: any) => {
          card.default = card.id === this.customerDetails.default_source
        })
        console.log(this.paymentCards)
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.sharedService.dismissLoader()
    }
  }

  async onAddCard() {
    const modal = await this.modalController.create({
      component: AddCardComponent,
      componentProps: {stripeCustomerId: this.stripeCustomerId},
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

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/subscription'])
  }

  onSetDefaultCard(paymentCard) {
    this.customerDetails.default_source = paymentCard.id
    this.paymentCards.forEach((card) => {
      card.default = card.id === this.customerDetails.default_source
    })
  }
}
