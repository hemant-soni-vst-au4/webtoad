import {PipesModule} from './../../../../../pipes/pipes.module'
import {FilterFaqsPipe} from './../../../../../pipes/filter-faqs.pipe'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {FaqsPage} from './faqs.page'

const routes: Routes = [
  {
    path: '',
    component: FaqsPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [FaqsPage],
  providers: [],
})
export class FaqsPageModule {}
