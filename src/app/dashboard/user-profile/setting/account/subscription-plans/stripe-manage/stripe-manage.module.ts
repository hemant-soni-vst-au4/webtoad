// import {FilterPaymentCardsByDatePipe} from '../../../../../../pipes/filter-payment-cards-by-date.pipe'
import {AddCardComponent} from './add-card/add-card.component'
import {SubscriptionService} from '../../../../../../services/subscription.service'
import {OnBoardingService} from '../../../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {StripeManagePage} from './stripe-manage.page'

const routes: Routes = [
  {
    path: '',
    component: StripeManagePage,
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
  declarations: [
    StripeManagePage,
    AddCardComponent,
    // FilterPaymentCardsByDatePipe
  ],
  entryComponents: [AddCardComponent],
  providers: [OnBoardingService, SubscriptionService],
})
export class StripeManagePageModule {}
