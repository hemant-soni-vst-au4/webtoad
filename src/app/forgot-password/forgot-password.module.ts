import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {ForgotPasswordPage} from './forgot-password.page'

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage,
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
  declarations: [ForgotPasswordPage],
  providers: [],
})
export class ForgotPasswordPageModule {}
