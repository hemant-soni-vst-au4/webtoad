import {LessonsService} from './services/lessons.service'
import {SubscriptionService} from './services/subscription.service'
import {OnBoardingService} from './services/on-boarding.service'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouteReuseStrategy} from '@angular/router'

import {IonicModule, IonicRouteStrategy} from '@ionic/angular'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {HttpClientModule} from '@angular/common/http'

import {ServiceWorkerModule} from '@angular/service-worker'
import {environment} from '../environments/environment'
import {PushNotificationsModule} from 'ng-push'
import {GoogleAnalytics} from '@ionic-native/google-analytics/ngx'
import {ChannelIoMobileModule} from './components/channel-io-mobile/channel-io-mobile.module'
import {Base64} from '@ionic-native/base64/ngx'
@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    PushNotificationsModule,
    ChannelIoMobileModule,
  ],
  declarations: [AppComponent],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    OnBoardingService,
    SubscriptionService,
    LessonsService,
    GoogleAnalytics,
    Base64,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
