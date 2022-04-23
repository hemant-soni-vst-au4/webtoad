import {Injectable} from '@angular/core'
import {ApiService} from './api.service'

@Injectable()
export class SubscriptionService {
  constructor(public apiService: ApiService) {}

  getAllStripePlans() {
    return this.apiService.get('/payments/get_all_plans')
  }

  getCustomerDetails(customerId) {
    return this.apiService.get('/payments/get_user/' + customerId)
  }

  createStripeCustomer(data) {
    return this.apiService.post('/payments/create_user', data)
  }

  attachSourceToCustomer(data) {
    return this.apiService.post('/payments/create_card_method', data)
  }

  getCustomerAllPaymentMethods(data) {
    return this.apiService.post('/payments/get_payment_methods', data)
  }

  processedToPayUsingStripe(data) {
    return this.apiService.post('/payments/create_subscription', data)
  }

  turnOffAutoRenewalForStripe(subscriptionId) {
    return this.apiService.get('/payments/updateSubscription/' + subscriptionId)
  }

  getStripeSubscriptionDetails(subscriptionId) {
    return this.apiService.get('/payments/subscription-details/' + subscriptionId)
  }

  setUserSubscription(data) {
    return this.apiService.post('/userSubscription/setUserSubscription', data)
  }

  getUserSubscription(data) {
    return this.apiService.post('/userSubscription/getUserSubscription', data)
  }

  verifySubscription(data) {
    return this.apiService.post('/userSubscription/userV2', data)
  }

  setStripeCustomerId(data) {
    return this.apiService.post('/user/setStripeCustomerId', data)
  }
}
