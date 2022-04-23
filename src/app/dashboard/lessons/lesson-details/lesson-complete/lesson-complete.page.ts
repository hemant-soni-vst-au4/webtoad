import {environment} from './../../../../../environments/environment'
import {LessonsService} from './../../../../services/lessons.service'
import {SharedService} from 'src/app/services/shared.service'
import {OnBoardingService} from './../../../../services/on-boarding.service'
import {NavController, Platform, AlertController} from '@ionic/angular'
import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'
import {Media, MediaObject} from '@ionic-native/media/ngx/'
import * as moment from 'moment'
import {NativeAudio} from '@ionic-native/native-audio/ngx'

@Component({
  selector: 'app-lesson-complete',
  templateUrl: './lesson-complete.page.html',
  styleUrls: ['./lesson-complete.page.scss'],
})
export class LessonCompletePage implements OnInit {
  profile
  subscriptionMonthCompletedLessons = []
  currentMonthCompletedLessons = []
  date = new Date()
  months = new Array()
  currentMonth

  constructor(
    private router: Router,
    private onBoardingService: OnBoardingService,
    private navController: NavController,
    public sharedService: SharedService,
    public alertController: AlertController,
    private lessonsService: LessonsService,
    private nativeAudio: NativeAudio,
    public platform: Platform,

    private media: Media,
  ) {
    moment.locale('en')
    this.months = moment.months()
    this.currentMonth = this.months[new Date().getMonth()]
  }

  ngOnInit() {
    this.getUserProfile()

    const monthStartDate = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      1,
    ).toISOString()
    const monthEndDate = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0,
    ).toISOString()

    if (monthStartDate && monthEndDate) {
      this.getCompletedLessonsByCurrentMonth(monthStartDate, monthEndDate)
    }
  }

  getUserProfile() {
    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService.getUserProfile().subscribe(
        (res) => {
          this.profile = res.data

          if (this.profile.currentPackage === 'Subscription') {
            this.getCompletedLessonsInSubscriptionSchedule(
              this.profile.userSubscriptionStartDate,
              this.profile.userSubscriptionEndDate,
            )
          }

          this.sharedService.dismissLoader()

          if (this.platform.is('ios')) {
            const file: MediaObject = this.media.create(
              environment.assetBaseUrl + 'audioFile/SMALL_CROWD_APPLAUSE.wav',
            )
            // console.log( ' MediaObject ====================================' );
            // console.log( file );
            // console.log( ' MediaObject ====================================' );
            file.play()
          } else {
            const file: MediaObject = this.media.create(
              environment.assetBaseUrl + 'audioFile/SMALL_CROWD_APPLAUSE.mp3',
            )
            // console.log( ' MediaObject ====================================' );
            // console.log( file );
            // console.log( ' MediaObject ====================================' );
            file.play()
          }
        },
        (error) => {
          console.log(error)
          this.sharedService.dismissLoader()
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  getCompletedLessonsByCurrentMonth(startDate, endDate) {
    try {
      this.lessonsService.completedLessonsWithTimeRange({startDate, endDate}).subscribe(
        (res) => {
          this.currentMonthCompletedLessons = []
          if (res.data.length) {
            this.currentMonthCompletedLessons = res.data
            // console.log( this.currentMonthCompletedLessons.length )
            if (this.currentMonthCompletedLessons.length === 2) {
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
          }
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  async presentAlert(store, storeUrl) {
    const alert = await this.alertController.create({
      header: 'Enjoying this app?',
      buttons: [
        {
          text: 'Not really',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah')
          },
        },
        {
          text: 'Yes!',
          handler: () => {
            console.log('Confirm Okay')
            this.presentAlertConfirm(store, storeUrl)
          },
        },
      ],
    })
    await alert.present()
  }

  async presentAlertConfirm(store, storeUrl) {
    const alert = await this.alertController.create({
      message: 'How about a rating on the <strong>' + store + '</strong>?',
      buttons: [
        {
          text: 'No, thanks',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah')
          },
        },
        {
          text: 'Okay, sure!',
          handler: () => {
            console.log('Confirm Okay')
            window.open(storeUrl, '_blank')
          },
        },
      ],
    })
    await alert.present()
  }

  getCompletedLessonsInSubscriptionSchedule(startDate, endDate) {
    try {
      this.lessonsService.completedLessonsWithTimeRange({startDate, endDate}).subscribe(
        (res) => {
          this.subscriptionMonthCompletedLessons = []

          if (res.data.length) {
            this.subscriptionMonthCompletedLessons = res.data
          }
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  home() {
    this.navController.setDirection('root')
    this.router.navigate(['/dashboard/lessons'])
  }

  back() {
    this.navController.setDirection('root')
    this.router.navigate(['/dashboard/search'])
  }
}
