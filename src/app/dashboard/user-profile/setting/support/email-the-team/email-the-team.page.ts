import {SharedService} from './../../../../../services/shared.service'
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-email-the-team',
  templateUrl: './email-the-team.page.html',
  styleUrls: ['./email-the-team.page.scss'],
})
export class EmailTheTeamPage implements OnInit {
  mailForm: FormGroup
  isSubmitted = false
  profile

  constructor(
    public navController: NavController,
    public formBuilder: FormBuilder,
    public sharedService: SharedService,
    private router: Router,
    private onBoardingService: OnBoardingService,
  ) {
    this.sharedService.gaTrackView('EmailTeam Screen')
    this.mailForm = this.formBuilder.group({
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  ionViewWillEnter() {
    this.getUserProfile()
  }

  get f() {
    return this.mailForm.controls
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  ngOnInit() {}

  getUserProfile() {
    try {
      this.onBoardingService.getUserProfile().subscribe(
        (res) => {
          this.profile = res.data
        },
        (error) => {},
      )
    } catch (error) {
      console.log(error)
    }
  }

  submit() {
    this.sharedService.gaTrackEvent('EmailSubmit', 'SupportPage')
    this.isSubmitted = true

    if (this.mailForm.invalid) {
      return
    }

    const obj = {
      email: this.profile.email,
      message: this.mailForm.value.message,
    }

    this.sharedService.presentLoader('Please wait...')

    this.onBoardingService.contactToAdmin(obj).subscribe(
      async (res) => {
        if (res.message) {
          this.sharedService.presentToast(res.message)
          this.navController.setDirection('back')
          this.router.navigate(['/support'])
        }

        this.sharedService.dismissLoader()
      },
      (error) => {
        this.sharedService.dismissLoader()
      },
    )
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/support'])
  }
}
