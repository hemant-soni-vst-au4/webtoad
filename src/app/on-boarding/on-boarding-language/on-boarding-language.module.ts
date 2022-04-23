import {OnBoardingService} from './../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {OnBoardingLanguagePage} from './on-boarding-language.page'

const routes: Routes = [
  {
    path: '',
    component: OnBoardingLanguagePage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [OnBoardingLanguagePage],
  providers: [OnBoardingService],
})
export class OnBoardingLanguagePageModule {}
