import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Routes, RouterModule} from '@angular/router'

import {IonicModule} from '@ionic/angular'

import {AppInfoPage} from './app-info.page'

const routes: Routes = [
  {
    path: '',
    component: AppInfoPage,
  },
]

@NgModule({
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [AppInfoPage],
  providers: [],
})
export class AppInfoPageModule {}
