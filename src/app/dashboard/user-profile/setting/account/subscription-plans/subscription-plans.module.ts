import {OnBoardingService} from '../../../../../services/on-boarding.service'
import {SubscriptionService} from '../../../../../services/subscription.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SubscriptionPlansPage} from './subscription-plans.page'
import {InAppPurchase2} from '@ionic-native/in-app-purchase-2/ngx'

const routes: Routes = [
  {
    path: '',
    component: SubscriptionPlansPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SubscriptionPlansPage],
  providers: [InAppPurchase2, SubscriptionService, OnBoardingService],
})
export class SubscriptionPlansPageModule {}
