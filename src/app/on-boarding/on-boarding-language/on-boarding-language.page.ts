import {SharedService} from './../../services/shared.service'
import {OnBoardingService} from './../../services/on-boarding.service'
import {NavController, Platform} from '@ionic/angular'
import {GlobalService} from './../../global/global.service'
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-on-boarding-language',
  templateUrl: './on-boarding-language.page.html',
  styleUrls: ['./on-boarding-language.page.scss'],
})
export class OnBoardingLanguagePage implements OnInit {
  selectedLanguage
  isLanguageSelected: boolean
  subTitleLanguages = new Array()

  constructor(
    public globalService: GlobalService,
    public sharedService: SharedService,
    private onBoardingService: OnBoardingService,
    public platform: Platform,
    public router: Router,
    public navController: NavController,
  ) {
    this.sharedService.gaTrackView('On-Boarding Language Selection Screen')
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getSubTitleLanguages()
  }

  getSubTitleLanguages() {
    try {
      this.sharedService.presentLoader('Please wait...')
      this.onBoardingService.getSubTitleLanguages().subscribe(
        (res) => {
          this.subTitleLanguages = res.data
          this.sharedService.dismissLoader()
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

  selectLanguage(language) {
    this.sharedService.gaTrackEvent('SelectedLanguage', language)
    this.isLanguageSelected = true
    this.selectedLanguage = language
  }

  nextQuestion() {
    try {
      this.sharedService.gaTrackEvent(
        'LanguageNextQuestion',
        '{"Screen":"Select Language Screen" "selectin":"Next"}',
      )

      this.onBoardingService
        .setUserSubTitleLanguage({
          subTitleLanguageId: this.selectedLanguage._id,
        })
        .subscribe(
          async (res) => {
            this.navController.setDirection('forward')
            this.router.navigate(['/on-boarding-reminder'])
          },
          (error) => {
            console.log(error)
          },
        )
    } catch (error) {
      console.log(error)
    }
  }
}
