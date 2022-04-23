import {OnBoardingService} from './../../../services/on-boarding.service'
import {LessonsService} from './../../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {NewUploadsPage} from './new-uploads.page'

const routes: Routes = [
  {
    path: '',
    component: NewUploadsPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [NewUploadsPage],
  providers: [LessonsService, OnBoardingService],
})
export class NewUploadsPageModule {}
