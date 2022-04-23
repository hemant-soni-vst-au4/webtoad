import {environment} from './../../../environments/environment'
import {ProfilePictureComponent} from './profile-picture/profile-picture.component'
import {LessonsService} from './../../services/lessons.service'
import {NgxY2PlayerModule} from 'ngx-y2-player'
import {OnBoardingService} from './../../services/on-boarding.service'
import {UserProgressPage} from './user-progress/user-progress.page'
import {UserLevelPage} from './user-level/user-level.page'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {IonicModule} from '@ionic/angular'
import {UserProfilePage} from './user-profile.page'
import {Routes, RouterModule} from '@angular/router'
import {MonthsPopoverComponent} from './user-progress/months-popover/months-popover.component'
import {ImageCropperModule} from 'ngx-image-cropper'

const routes: Routes = [
  {
    path: '',
    component: UserProfilePage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxY2PlayerModule,
    ImageCropperModule,
  ],
  declarations: [
    UserProfilePage,
    UserProgressPage,
    UserLevelPage,
    MonthsPopoverComponent,
    ProfilePictureComponent,
  ],
  entryComponents: [MonthsPopoverComponent, ProfilePictureComponent],
  providers: [OnBoardingService, LessonsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserProfilePageModule {}
