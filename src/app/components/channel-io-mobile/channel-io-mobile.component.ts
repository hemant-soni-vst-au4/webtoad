import {Component} from '@angular/core'
import {NavigationEnd, Router} from '@angular/router'
import {Platform} from '@ionic/angular'

@Component({
  selector: 'app-channel-io-mobile',
  templateUrl: './channel-io-mobile.component.html',
  styleUrls: ['./channel-io-mobile.component.scss'],
})
export class ChannelIoMobileComponent {
  public showChat: boolean = false
  public hasTabbar: boolean = false
  private paths = [
    '/dashboard/profile',
    '/setting',
    '/account',
    '/edit-email',
    '/edit-name',
    '/edit-password',
    '/reminder',
    '/delete-account',
    '/support',
    '/language',
    '/share-app',
    '/app-info',
    '/subscription',
    '/subscriptionplans',
    '/faqs/',
    '/email-the-team',
  ]

  constructor(private platform: Platform, private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (
          this.platform.is('mobileweb') ||
          this.platform.is('ios') ||
          this.platform.is('android')
        ) {
          this.showChat = this.paths.some((path) => val.url.startsWith(path))
          this.hasTabbar = val.url.startsWith('/dashboard/profile')
        } else if (this.platform.is('desktop')) {
          this.showChat = false
        }
      }
    })
  }

  // triggers redirect to channel.io on mobile and tablet devices only
  async viewChat() {
    window.location.href = 'https://speakypeaky.channel.io/'
  }
}
