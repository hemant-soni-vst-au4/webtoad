import {SubscriptionService} from './../../../services/subscription.service'
import {OnBoardingService} from './../../../services/on-boarding.service'
import {CommentsService} from './../../../services/comments.service'
// import {IntroductionComponent} from './introduction/introduction.component'
import {LessonsService} from './../../../services/lessons.service'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {LessonDetailsPage} from './lesson-details.page'
import {NgxY2PlayerModule} from 'ngx-y2-player'

const routes: Routes = [
  {
    path: '',
    component: LessonDetailsPage,
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
  declarations: [LessonDetailsPage],
  // entryComponents: [],
  providers: [LessonsService, CommentsService, OnBoardingService, SubscriptionService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LessonDetailsPageModule {}
