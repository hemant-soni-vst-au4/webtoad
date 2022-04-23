import {DatePicker} from '@ionic-native/date-picker/ngx'
import {NavController, AlertController, Platform} from '@ionic/angular'
import {Router} from '@angular/router'
import {SharedService} from './../../../../services/shared.service'
import {Component, OnInit} from '@angular/core'
import {DatePipe} from '@angular/common'
import {Plugins} from '@capacitor/core'
const {LocalNotifications} = Plugins

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
  reminder: boolean = false
  reminderTime
  isDesktop = false
  isStart = false

  constructor(
    public router: Router,
    public alertController: AlertController,
    private datePicker: DatePicker,
    private datePipe: DatePipe,
    public platform: Platform,
    public sharedService: SharedService,
    public navController: NavController,
  ) {}
  ngOnInit() {}

  ionViewWillEnter() {
    LocalNotifications.requestPermission()
    Promise.all([this.sharedService.getNativeStorage('reminder')]).then(([reminder]) => {
      if (reminder?.data) {
        this.reminderTime = new Date(reminder.data).toISOString()
        this.reminder = true
        this.setReminderTime(new Date(reminder.data))
      }
    })
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

      const alert = await this.alertController.create({
        header: 'Reminder is set!',
        message:
          'Perfect. We will send you a nudge at <strong>' +
          this.datePipe.transform(date, 'h:mm a') +
          '</strong> everyday',
        cssClass: 'user-level-alert',
        buttons: ['OK'],
      })

      await alert.present()
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

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/setting'])
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

    console.log('scheduled notifications', notifs)
  }
}
