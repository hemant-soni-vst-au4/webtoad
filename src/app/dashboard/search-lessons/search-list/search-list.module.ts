import {CourseComponent} from './course/course.component'
import {LessonsService} from './../../../services/lessons.service'
import {SearchService} from './../../../services/search.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SearchListPage} from './search-list.page'

const routes: Routes = [
  {
    path: '',
    component: SearchListPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SearchListPage, CourseComponent],
  entryComponents: [CourseComponent],
  providers: [SearchService, LessonsService],
})
export class SearchListPageModule {}
