import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {EmailTheTeamPage} from './email-the-team.page'

const routes: Routes = [
  {
    path: '',
    component: EmailTheTeamPage,
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
  declarations: [EmailTheTeamPage],
  providers: [OnBoardingService],
})
export class EmailTheTeamPageModule {}
