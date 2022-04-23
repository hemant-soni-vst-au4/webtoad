import {OnBoardingService} from './../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {AccountPage} from './account.page'

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AccountPage],
  providers: [OnBoardingService],
})
export class AccountPageModule {}
