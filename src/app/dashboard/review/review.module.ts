import {UserNoteComponent} from './user-note/user-note.component'
import {LessonsService} from './../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx/'

import {IonicModule} from '@ionic/angular'

import {ReviewPage} from './review.page'

const routes: Routes = [
  {
    path: '',
    component: ReviewPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [ReviewPage, UserNoteComponent],
  entryComponents: [UserNoteComponent],
  providers: [LessonsService, TextToSpeech],
})
export class ReviewPageModule {}
