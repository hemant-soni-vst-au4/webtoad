import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {OnBoardingReminderPage} from './on-boarding-reminder.page'
import {DatePicker} from '@ionic-native/date-picker/ngx'

const routes: Routes = [
  {
    path: '',
    component: OnBoardingReminderPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [OnBoardingReminderPage],
  providers: [DatePicker],
})
export class OnBoardingReminderPageModule {}
