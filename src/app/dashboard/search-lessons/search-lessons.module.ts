import {OnBoardingService} from './../../services/on-boarding.service'
import {SearchService} from './../../services/search.service'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SearchLessonsPage} from './search-lessons.page'

const routes: Routes = [
  {
    path: '',
    component: SearchLessonsPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SearchLessonsPage],
  providers: [OnBoardingService, SearchService],
})
export class SearchLessonsPageModule {}
