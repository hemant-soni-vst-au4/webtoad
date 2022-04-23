import {FilterPaymentCardsByDatePipe} from './../../../../../../pipes/filter-payment-cards-by-date.pipe'
import {AddCardComponent} from './add-card/add-card.component'
import {SubscriptionService} from './../../../../../../services/subscription.service'
import {OnBoardingService} from './../../../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {StripePaymentPage} from './stripe-payment.page'

const routes: Routes = [
  {
    path: '',
    component: StripePaymentPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [StripePaymentPage, AddCardComponent, FilterPaymentCardsByDatePipe],
  entryComponents: [AddCardComponent],
  providers: [OnBoardingService, SubscriptionService],
})
export class StripePaymentPageModule {}
