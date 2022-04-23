import {Router} from '@angular/router'

import {LessonsService} from './../services/lessons.service'
import {OnBoardingService} from './../services/on-boarding.service'
import {SharedService} from './../services/shared.service'
import {Component, OnInit, ViewChild} from '@angular/core'
import {
  IonTabs,
  Platform,
  ToastController,
  ActionSheetController,
  NavController,
  LoadingController,
} from '@ionic/angular'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  profile
  isDesktop = false
  @ViewChild('tab', {static: false}) tabRef: IonTabs
  selected = 'lessons'

  constructor(
    private sharedService: SharedService,
    public platform: Platform,
    private lessonsService: LessonsService,
    public router: Router,
    public navController: NavController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    private onBoardingService: OnBoardingService,
  ) {
    sharedService.getDeviceInfo().then((info) => {
      this.isDesktop = info.isDesktop
      this.getUserProfile()

      this.sharedService.gaTrackView('Dashboard Screen')
    })
  }

  ngOnInit() {
    this.sharedService
      .getNativeStorage('leftOfData')
      .then((leftOfData) => {
        if (leftOfData?.data) {
          this.showQuickActions(leftOfData.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })

    // loads channel.io script when device is desktop
    if (this.platform.is('desktop')) {
      this.loadScripts()
    }
  }

  async showQuickActions(details) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Resume where I left off',
          handler: () => {
            this.navController.setDirection('forward')
            this.router.navigate(['/lesson-steps', details.lessonID, false, 'resume'])
          },
        },
        {
          text: "Begin today's recommended lesson",
          handler: () => {
            this.gotoTodaysLesson()
          },
        },
        {
          text: 'Explore other lessons',
          handler: () => {
            this.router.navigate(['/dashboard/search-lessons'])
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    })
    await actionSheet.present()
  }

  async gotoTodaysLesson() {
    const loading = await this.loadingController.create({message: 'Please wait...'})
    try {
      await loading.present()
      const res = await this.lessonsService.getTodaysLesson().toPromise()
      loading.dismiss()
      this.navController.setDirection('forward')
      this.router.navigate(['/lesson-details', res.data.subLessonId, false, false])
    } catch (error) {
      console.log(error)
    } finally {
      loading.dismiss()
    }
  }

  tabChanged(event) {
    this.sharedService.gaTrackEvent('TabChangedDashBoard', event)

    if (event.tab !== 'profile') {
      if (this.sharedService.video.value.target) {
        this.sharedService.video.value.target.stopVideo()
      }
    }
    this.getUserProfile()
    this.selected = this.tabRef.getSelected()
  }

  onTabChange($event) {
    this.tabRef.select($event)
  }

  async getUserProfile() {
    try {
      const res = await this.onBoardingService.getUserProfile().toPromise()
      this.profile = res.data
    } catch (error) {
      console.log(error)
    }
  }

  // loades channel.io widget on desktop size devices only
  loadScripts() {
    const dynamicScripts = '../../../../assets/js/channel.js'
    const node = document.createElement('script')
    node.src = dynamicScripts
    node.type = 'text/javascript'
    node.async = false
    document.getElementsByTagName('head')[0].appendChild(node)
  }
}
