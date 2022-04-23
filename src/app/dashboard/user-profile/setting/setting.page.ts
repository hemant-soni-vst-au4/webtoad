import {AuthService} from './../../../services/auth.service'
import {SharedService} from './../../../services/shared.service'
import {Router} from '@angular/router'
import {NavController, Platform, AlertController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  settingPages = [
    {
      name: 'Account',
      url: '/account',
    },
    {
      name: 'Reminder',
      url: '/reminder',
    },
    {
      name: 'Language',
      url: '/language',
    },
    {
      name: 'Support',
      url: '/support',
    },
    {
      name: 'Share this app',
      url: '/share-app',
    },
    {
      name: 'App Information',
      url: '/app-info',
    },
  ]

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public authService: AuthService,
    public navController: NavController,
    private platform: Platform,
    public alertController: AlertController,
  ) {
    this.sharedService.gaTrackView('Settings Screen')
  }

  ngOnInit() {}

  async logout() {
    this.removeLeftOffData()
    this.sharedService.gaTrackEvent('Logout', 'Settings Screen')
    this.sharedService.setNativeStorage('isOnBoarding', true)
    this.sharedService.setNativeStorage('isAdmin', false)
    this.sharedService.removeNativeStorage('token')
    this.authService.authSubject.next(false)
    this.navController.setDirection('root')
    this.router.navigate(['/login'])
  }

  removeLeftOffData() {
    this.sharedService.removeNativeStorage('leftOfData')
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  rateApp() {
    this.sharedService.gaTrackEvent('Rate App', 'Settings Screen')
    if (this.platform.is('ios')) {
      this.presentAlert(
        'App Store',
        'https://apps.apple.com/in/app/speaky-peaky/id1486127431',
      )
    } else if (this.platform.is('android')) {
      this.presentAlert(
        'Play Store',
        'https://play.google.com/store/apps/details?id=com.summer.startenglishnow',
      )
    }
  }

  async presentAlert(store, storeUrl) {
    window.open(storeUrl, '_blank')
  }

  termsOfUse() {
    this.sharedService.gaTrackEvent('Terms', 'Settings Screen')
    window.open('https://www.newsite.speakypeaky.com/terms-and-conditions', '_blank')
  }

  privacyPolicy() {
    this.sharedService.gaTrackEvent('Privacy', 'Settings Screen')
    window.open('https://www.newsite.speakypeaky.com/privacypolicy', '_blank')
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/dashboard/profile'])
  }
}
