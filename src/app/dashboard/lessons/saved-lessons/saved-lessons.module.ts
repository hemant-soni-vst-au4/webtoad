import {LessonsService} from './../../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SavedLessonsPage} from './saved-lessons.page'

const routes: Routes = [
  {
    path: '',
    component: SavedLessonsPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SavedLessonsPage],
  providers: [LessonsService],
})
export class SavedLessonsPageModule {}
