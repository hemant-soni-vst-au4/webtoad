import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {DraftLessonsPage} from './draft-lessons.page'

const routes: Routes = [
  {
    path: '',
    component: DraftLessonsPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraftLessonsPageRoutingModule {}
