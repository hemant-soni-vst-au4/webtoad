import {LessonsService} from './../../../../services/lessons.service'
import {OnBoardingService} from './../../../../services/on-boarding.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'
import {LessonCompletePage} from './lesson-complete.page'
import {Media} from '@ionic-native/media/ngx/'
import {NativeAudio} from '@ionic-native/native-audio/ngx'

const routes: Routes = [
  {
    path: '',
    component: LessonCompletePage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [LessonCompletePage],
  providers: [OnBoardingService, LessonsService, Media, NativeAudio],
})
export class LessonCompletePageModule {}
