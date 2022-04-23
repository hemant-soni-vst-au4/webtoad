import {PipesModule} from './../../../../pipes/pipes.module'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {SupportPage} from './support.page'
const routes: Routes = [
  {
    path: '',
    component: SupportPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SupportPage],
  providers: [],
})
export class SupportPageModule {}
