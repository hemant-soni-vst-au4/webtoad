import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {SubscriptionService} from './../../../../../services/subscription.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SubscriptionPage} from './subscription.page'

const routes: Routes = [
  {
    path: '',
    component: SubscriptionPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SubscriptionPage],
  providers: [SubscriptionService, OnBoardingService],
})
export class SubscriptionPageModule {}
