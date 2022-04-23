import {SharedService} from './../../../../../services/shared.service'
import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {NavController, AlertController} from '@ionic/angular'
import {Router} from '@angular/router'
import {GlobalService} from './../../../../../global/global.service'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  selectedLanguage
  isLanguageSelected: boolean
  subTitleLanguages = new Array()
  profile

  constructor(
    public globalService: GlobalService,
    public sharedService: SharedService,
    public alertController: AlertController,
    private onBoardingService: OnBoardingService,
    public router: Router,
    public navController: NavController,
  ) {
    this.sharedService.gaTrackView('change Language Screen')
  }

  ionViewWillEnter() {
    this.getUserProfile()
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  ngOnInit() {}

  getUserProfile() {
    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService.getUserProfile().subscribe(
        async (res) => {
          if (res.data) {
            this.profile = res.data

            this.getSubTitleLanguages()

            if (this.profile.subTitleLanguage) {
              this.getUserSubTitleLanguage(this.profile.subTitleLanguage)
            }
          }
        },
        (error) => {
          this.sharedService.dismissLoader()
          console.log(error)
        },
      )
    } catch (error) {
      this.sharedService.dismissLoader()
      console.log(error)
    }
  }

  getUserSubTitleLanguage(subTitleLanguage) {
    try {
      this.onBoardingService.getUserSubTitleLanguage(subTitleLanguage).subscribe(
        (details) => {
          this.selectedLanguage = details.data[0]
          this.subTitleLanguages.forEach((ele) => {
            if (ele._id === this.selectedLanguage._id) {
              ele.checked = true
            } else {
              ele.checked = false
            }
          })
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  getSubTitleLanguages() {
    try {
      this.onBoardingService.getSubTitleLanguages().subscribe(
        (res) => {
          this.subTitleLanguages = res.data
          this.subTitleLanguages.forEach((ele) => {
            ele.checked = false
          })

          this.sharedService.dismissLoader()
        },
        (error) => {
          console.log(error)
          this.sharedService.dismissLoader()
        },
      )
    } catch (error) {
      this.sharedService.dismissLoader()
      console.log(error)
    }
  }

  selectLanguage(language) {
    this.isLanguageSelected = true
    this.selectedLanguage = language

    this.sharedService.gaTrackEvent('ChangeLanguage', this.selectedLanguage)

    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService
        .setUserSubTitleLanguage({
          subTitleLanguageId: this.selectedLanguage._id,
        })
        .subscribe(
          async (res) => {
            this.sharedService.dismissLoader()

            const alert = await this.alertController.create({
              message: res.message,
              buttons: ['OK'],
            })

            await alert.present()
          },
          (error) => {
            this.sharedService.dismissLoader()
            console.log(error)
          },
        )
    } catch (error) {
      console.log(error)
      this.sharedService.dismissLoader()
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/setting'])
  }
}
