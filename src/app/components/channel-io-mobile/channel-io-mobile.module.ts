import {ChannelIoMobileComponent} from './channel-io-mobile.component'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {CommonModule} from '@angular/common'
import {IonicModule} from '@ionic/angular'

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ChannelIoMobileComponent],
  exports: [ChannelIoMobileComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChannelIoMobileModule {}
