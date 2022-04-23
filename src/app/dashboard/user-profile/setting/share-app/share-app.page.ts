import {GlobalService} from './../../../../global/global.service'
import {Router} from '@angular/router'
import {SharedService} from './../../../../services/shared.service'
import {NavController, Platform} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
import {SocialSharing} from '@ionic-native/social-sharing/ngx'
import {Clipboard} from '@ionic-native/clipboard/ngx'
import {Plugins} from '@capacitor/core'
const {Share, Device} = Plugins

@Component({
  selector: 'app-share-app',
  templateUrl: './share-app.page.html',
  styleUrls: ['./share-app.page.scss'],
})
export class ShareAppPage implements OnInit {
  appURL = 'https://speakypeaky.page.link/home'
  isMobile = false
  shareAvailable = true

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    public socialSharing: SocialSharing,
    private clipboard: Clipboard,
    public platform: Platform,
  ) {
    sharedService.getDeviceInfo().then((info) => {
      if (info.platform === 'web') {
        //@ts-ignore
        this.shareAvailable = !!window.navigator?.share
      }
      this.isMobile = info.isApp
    })
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  ngOnInit() {}

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/setting'])
  }

  async shareApp() {
    // this.socialSharing.share( '', '', '', this.appURL );
    let shareRet = await Share.share({
      title: 'Speaky Peaky',
      text: 'Speaky Peaky',
      url: this.appURL,
      dialogTitle: 'Share with buddies',
    })
  }

  onCopyAppLink(appURL) {
    if (this.isMobile) {
      this.clipboard.copy(appURL).then(() => {
        this.sharedService.presentToast('It’s copied!')
      })
    } else {
      navigator.clipboard.writeText(appURL).then(
        (res) => {
          this.sharedService.presentToast('It’s copied!')
          console.log('Async: Copying to clipboard was successful!')
        },
        (err) => {
          console.error('Async: Could not copy text: ', err)
        },
      )
    }
  }
}
