import {NgxY2PlayerModule} from 'ngx-y2-player'
import {OnBoardingService} from './../../services/on-boarding.service'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {OnBoardingLevelPage} from './on-boarding-level.page'

const routes: Routes = [
  {
    path: '',
    component: OnBoardingLevelPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxY2PlayerModule,
  ],
  declarations: [OnBoardingLevelPage],
  providers: [OnBoardingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnBoardingLevelPageModule {}
