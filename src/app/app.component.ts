import {LessonsService} from './services/lessons.service'
import {SwUpdate} from '@angular/service-worker'
import {SubscriptionService} from './services/subscription.service'
import {OnBoardingService} from './services/on-boarding.service'
import {ActivatedRoute, Router} from '@angular/router'
import {AuthService} from './services/auth.service'
import {SharedService} from './services/shared.service'
import {Component, ViewChild} from '@angular/core'

import {
  Platform,
  NavController,
  ModalController,
  IonRouterOutlet,
  AlertController,
} from '@ionic/angular'
import {Plugins, StatusBarStyle, AppState, Capacitor} from '@capacitor/core'
const {SplashScreen, StatusBar, App, Device} = Plugins
import {SwPush} from '@angular/service-worker'
import Cookies from 'js-cookie'
import {useStore} from 'src/reactapp/useStore'
import {environment} from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  // isOnBoarding = false
  // set up hardware back button event.

  lastTimeBackPress = 0
  timePeriodToExit = 2000
  deferredPrompt
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet

  constructor(
    private platform: Platform,
    private sharedService: SharedService,
    private authService: AuthService,
    private navController: NavController,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    private onBoardingService: OnBoardingService,
    private router: Router,
    private route: ActivatedRoute,
    private swUpdate: SwUpdate,
    readonly swPush: SwPush,
  ) {
    SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
    })
    sharedService.getDeviceInfo().then((info) => {
      useStore.setState({navController, route, deviceInfo: info, platform, sharedService})
      if (info.platform === 'web') {
        if (
          document.location.hostname !== 'localhost' &&
          document.location.protocol === 'http:'
        ) {
          // document.location.href = document.location.href.replace('http:', 'https:')
        }
      }

      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt Event fired')
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e
        this.addToHome()
      })

      this.initializeApp()

      this.platform.backButton.subscribe(this.handleBackButton)
      SplashScreen.hide()
    })
  }

  async handleBackButton() {
    // close modal
    try {
      const element = await this.modalCtrl.getTop()
      if (element) {
        element.dismiss()
        return
      }
    } catch (error) {}
    if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.routerOutlet.pop()
    } else if (this.router.url === '/dashboard/lessons' || this.router.url === '/login') {
      if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
        // navigator.app.exitApp(); // work for ionic 4
      } else {
        this.lastTimeBackPress = new Date().getTime()
      }
    }
  }

  updateServiceWorker() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload()
        }
      })

      this.swPush.notificationClicks.subscribe(({action, notification}) => {
        console.log('====================================')
        console.log(action)
        console.log(notification)
        console.log('====================================')
        // TODO: Do something in response to notification click.
      })
    }
  }

  async suggestDownload() {
    const alert = await this.alertController.create({
      header: 'Hey there,',
      message: 'For better experience, would you like to download the Speaky Peaky app?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            Cookies.set('did-suggest-app', 'yes', {expires: 7})
          },
        },
        {
          text: 'Download',
          handler: () => {
            Cookies.set('did-suggest-app', 'yes', {expires: 7})
            window.open('https://speakypeaky.page.link/home')
          },
        },
      ],
    })

    await alert.present()
  }

  async initializeApp() {
    this.updateServiceWorker()

    const info = await this.sharedService.getDeviceInfo()
    if (info.isApp) {
      StatusBar.setStyle({
        style: StatusBarStyle.Dark,
      })
    }
    if (info.isMobileWeb && !Cookies.get('did-suggest-app')) {
      this.suggestDownload()
    }

    try {
      const token = await this.sharedService.getNativeStorage('token')

      if (token?.data) {
        try {
          const profile = await this.getUserProfile()
          console.log({profile})
          if (profile.data) {
            if (info.isApp) {
              // if(|| document.location.hostname !== 'localhost')
            }
            if (environment.production) {
              this.navController.navigateRoot('/dashboard')
            } else {
              // this.navController.navigateRoot('/dashboard')
            }
            return
          }
        } catch {}

        this.authService.authSubject.next(false)
        this.navController.navigateRoot('/login')
      } else {
        const isOnBoarding = await this.sharedService.getNativeStorage('isOnBoarding')
        if (isOnBoarding?.data === true) {
          this.authService.authSubject.next(false)
          this.navController.navigateRoot('/login')
          return
        }
      }
    } catch (error) {
      console.error(error)
    }
    this.authService.authSubject.next(false)
    this.navController.navigateRoot('/on-boarding')
  }

  ionViewWillEnter() {
    // button click event to show the promt

    window.addEventListener('appinstalled', (event) => {
      alert('installed')
    })

    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone')
    }
  }

  addToHome() {
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Show the prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
        } else {
          console.log('User dismissed the A2HS prompt')
        }
        // We no longer need the prompt.  Clear it up.
        this.deferredPrompt = null
      })
    }
  }

  getUserProfile() {
    return this.onBoardingService.getUserProfile().toPromise()
  }
}
