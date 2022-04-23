import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {Routes, RouterModule} from '@angular/router'
import {SocialSharing} from '@ionic-native/social-sharing/ngx'

import {IonicModule} from '@ionic/angular'

import {ShareAppPage} from './share-app.page'
import {Clipboard} from '@ionic-native/clipboard/ngx'

const routes: Routes = [
  {
    path: '',
    component: ShareAppPage,
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [ShareAppPage],
  providers: [SocialSharing, Clipboard],
})
export class ShareAppPageModule {}
