import {LessonsService} from './../../../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'
import {NgxY2PlayerModule} from 'ngx-y2-player'
import {CourseDetailsPage} from './course-details.page'

const routes: Routes = [
  {
    path: '',
    component: CourseDetailsPage,
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
  declarations: [CourseDetailsPage],
  providers: [LessonsService],
})
export class CourseDetailsPageModule {}
