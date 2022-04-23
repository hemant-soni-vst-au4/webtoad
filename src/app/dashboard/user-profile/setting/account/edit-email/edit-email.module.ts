import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {EditEmailPage} from './edit-email.page'

const routes: Routes = [
  {
    path: '',
    component: EditEmailPage,
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
  declarations: [EditEmailPage],
  providers: [OnBoardingService],
})
export class EditEmailPageModule {}
