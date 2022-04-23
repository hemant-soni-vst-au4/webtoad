import {DatePicker} from '@ionic-native/date-picker/ngx'
import {NgModule} from '@angular/core'
import {CommonModule, DatePipe} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {ReminderPage} from './reminder.page'

const routes: Routes = [
  {
    path: '',
    component: ReminderPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [ReminderPage],
  providers: [DatePicker, DatePipe],
})
export class ReminderPageModule {}
