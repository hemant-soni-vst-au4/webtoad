import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
import {IonicModule} from '@ionic/angular'
import {Media} from '@ionic-native/media/ngx/'
import {File} from '@ionic-native/file/ngx/'
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx/'
import {Diagnostic} from '@ionic-native/diagnostic/ngx/'
import {IonicGestureConfig} from './../../../../_helpers/IonicGestureConfig'
import {LessonStepsPage} from './lesson-steps.page'

const routes: Routes = [
  {
    path: '**',
    component: LessonStepsPage,
  },
]

@NgModule({
  declarations: [LessonStepsPage],
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  providers: [
    Media,
    File,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: IonicGestureConfig,
    },
    AndroidPermissions,
    Diagnostic,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LessonStepsPageModule {}
