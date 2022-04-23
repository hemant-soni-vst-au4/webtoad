import {OnBoardingService} from './../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {IonicModule} from '@ionic/angular'

import {DashboardPage} from './dashboard.page'
import {DashboardPageRoutingModule} from './dashboard-routing.module'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  declarations: [DashboardPage],
  providers: [OnBoardingService],
})
export class DashboardPageModule {}
