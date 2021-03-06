import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {EditPasswordPage} from './edit-password.page'

const routes: Routes = [
  {
    path: '',
    component: EditPasswordPage,
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
  declarations: [EditPasswordPage],
  providers: [OnBoardingService],
})
export class EditPasswordPageModule {}
