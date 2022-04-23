import {Router} from '@angular/router'
import {SharedService} from '../../../../services/shared.service'
import {NavController, Platform} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
import {Plugins} from '@capacitor/core'
const {Device} = Plugins

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.page.html',
  styleUrls: ['./app-info.page.scss'],
})
export class AppInfoPage implements OnInit {
  isMobile = false
  appName = ''
  packageName = ''
  versionCode = '1.4.6'
  versionNumber = '118'

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    public platform: Platform,
  ) {
    sharedService.getDeviceInfo().then((info) => {
      console.log({info})
      if (info.isApp) {
        this.versionCode = info.appVersion
        this.versionNumber = info.appBuild
      } else {
        this.versionCode = 'HSEN.231'
        this.versionNumber = ''
      }
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
}
