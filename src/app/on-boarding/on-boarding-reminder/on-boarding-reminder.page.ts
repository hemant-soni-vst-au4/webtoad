import {NavController, Platform} from '@ionic/angular'
import {Router} from '@angular/router'
import {SharedService} from './../../services/shared.service'
import {Component, OnInit} from '@angular/core'
import {DatePicker} from '@ionic-native/date-picker/ngx'
import {Plugins} from '@capacitor/core'
const {LocalNotifications} = Plugins

@Component({
  selector: 'app-on-boarding-reminder',
  templateUrl: './on-boarding-reminder.page.html',
  styleUrls: ['./on-boarding-reminder.page.scss'],
})
export class OnBoardingReminderPage implements OnInit {
  reminder: boolean
  reminderTime
  isStart = false
  isDesktop = false

  constructor(
    private datePicker: DatePicker,
    public sharedService: SharedService,
    public router: Router,
    public platform: Platform,
    public navController: NavController,
  ) {
    this.platform
      .ready()
      .then(() => {
        if (this.platform.is('android') || this.platform.is('ios')) {
          this.isDesktop = false
        } else {
          this.isDesktop = true
        }

        this.sharedService.gaTrackView('On-Boarding Set Reminder Screen')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ngOnInit() {}

  ionViewWillEnter() {
    LocalNotifications.requestPermission()
  }

  async setReminder() {
    try {
      const date = await this.datePicker.show({
        date: new Date(),
        mode: 'time',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
      })

      this.sharedService.setNativeStorage('reminder', date.getTime())

      await this.setReminderTime(date)
      this.reminderTime = date.getTime()
      this.reminder = true
    } catch (err) {
      console.log('Error occurred while getting date: ', err)
    }
  }

  onChangeReminder(event) {
    console.log(event)
    if (event.detail.checked === false) {
      this.sharedService.removeNativeStorage('reminder')
      this.reminder = false
      this.reminderTime = undefined
      LocalNotifications.cancel({notifications: [{id: '42'}]})
    } else if (event.detail.checked) {
      this.setReminder()
    } else {
      this.sharedService.removeNativeStorage('reminder')
      this.reminderTime = undefined
      LocalNotifications.cancel({notifications: [{id: '42'}]})
    }
  }

  async setReminderTime(date) {
    const time = new Date(date.getTime())
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          id: 42,
          title: 'SpeakyPeaky',
          body: '20 mins a day = big gains in 3 months',
          schedule: {
            repeats: true,
            every: 'day',
            on: {
              hour: time.getHours(),
              minute: time.getMinutes(),
            },
          },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: null,
        },
      ],
    })
  }

  goToDashboard() {
    this.isStart = true

    this.sharedService.setNativeStorage('isOnBoarding', true)

    setTimeout(() => {
      this.navController.setDirection('root')
      this.router.navigate(['/dashboard'])
    }, 5000)
  }
}
