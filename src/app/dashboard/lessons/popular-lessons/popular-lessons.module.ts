import {LessonsService} from './../../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {PopularLessonsPage} from './popular-lessons.page'

const routes: Routes = [
  {
    path: '',
    component: PopularLessonsPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [PopularLessonsPage],
  providers: [LessonsService],
})
export class PopularLessonsPageModule {}
