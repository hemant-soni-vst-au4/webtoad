import {LessonsService} from './../../../services/lessons.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {IonicModule} from '@ionic/angular'

import {DraftLessonsPageRoutingModule} from './draft-lessons-routing.module'

import {DraftLessonsPage} from './draft-lessons.page'

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DraftLessonsPageRoutingModule],
  declarations: [DraftLessonsPage],
  providers: [LessonsService],
})
export class DraftLessonsPageModule {}
