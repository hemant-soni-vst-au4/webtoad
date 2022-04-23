import {ModalController, NavParams} from '@ionic/angular'
import {SubscriptionService} from './../../../../../../../services/subscription.service'
import {OnBoardingService} from './../../../../../../../services/on-boarding.service'
import {SharedService} from './../../../../../../../services/shared.service'
import {Component, OnInit, isDevMode} from '@angular/core'
import {environment} from '../../../../../../../../environments/environment'
declare var Stripe
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  stripe = Stripe(environment.stripePublicKey)
  card: any
  profile
  stripeCustomerId

  constructor(
    private sharedService: SharedService,
    private subscriptionService: SubscriptionService,
    public modalController: ModalController,
    private onBoardingService: OnBoardingService,
    private navParams: NavParams,
  ) {
    this.onBoardingService
      .getUserProfile()
      .toPromise()
      .then((res) => {
        const profile = res.data //this.navParams.get('profile')

        const stripeCustomerId = isDevMode()
          ? profile.stripeSandBoxCustomerId
          : profile.stripeLiveCustomerId

        if (stripeCustomerId === undefined) {
          this.dismiss()
        }
        this.stripeCustomerId = stripeCustomerId
      })
      .catch((err) => {
        this.dismiss()
      })
  }

  ngOnInit() {
    this.setupStripe()
  }

  setupStripe() {
    const elements = this.stripe.elements()
    const style = {
      base: {
        color: '#32325d',
        lineHeight: '24px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    }

    this.card = elements.create('card', {style, hidePostalCode: true})
    // console.log( this.card );
    this.card.mount('#card-element')

    this.card.addEventListener('change', (event) => {
      const displayError = document.getElementById('card-errors')
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ''
      }
    })

    const form = document.getElementById('payment-form')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      // console.log( event );
      this.sharedService.presentLoader('Please wait...')
      // console.log( this.card );
      this.stripe.createSource(this.card).then((result) => {
        if (result.error) {
          const errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
          this.sharedService.dismissLoader()
        } else {
          this.attachSourceToCustomer(result.source.id)
        }
      })
    })
  }

  async attachSourceToCustomer(sourceId) {
    try {
      const stripeCustomerId = this.stripeCustomerId
      if (stripeCustomerId === undefined) {
        return
      }

      const res = await this.subscriptionService
        .attachSourceToCustomer({customerId: stripeCustomerId, token: sourceId})
        .toPromise()
      this.sharedService.dismissLoader()
      this.dismiss()
    } catch (error) {
      console.log(error)
      this.sharedService.dismissLoader()
      this.sharedService.presentToast(error.err?.raw?.message)
    } finally {
    }
  }

  dismiss() {
    this.modalController.dismiss()
  }
}
