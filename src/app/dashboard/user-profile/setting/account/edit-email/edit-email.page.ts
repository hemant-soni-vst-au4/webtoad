import {SharedService} from './../../../../../services/shared.service'
import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {NavController} from '@ionic/angular'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.page.html',
  styleUrls: ['./edit-email.page.scss'],
})
export class EditEmailPage implements OnInit {
  userForm: FormGroup
  isSubmitted = false

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public navController: NavController,
    private onBoardingService: OnBoardingService,
    public sharedService: SharedService,
  ) {
    this.sharedService.gaTrackView('Edit Email Screen')
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
          ),
        ]),
      ],
      _id: ['', Validators.required],
    })
  }

  get f() {
    return this.userForm.controls
  }

  ionViewWillEnter() {
    this.getUserProfile()
  }

  getUserProfile() {
    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService.getUserProfile().subscribe(
        async (res) => {
          this.sharedService.dismissLoader()

          if (res.data) {
            this.userForm.get('email').setValue(res.data.email)
            this.userForm.get('_id').setValue(res.data._id)
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

  onSubmit() {
    this.sharedService.gaTrackEvent('SaveEditEmail', 'EditEmailScreen')

    this.isSubmitted = true

    if (this.userForm.invalid) {
      return
    }

    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService.updateUserEmail(this.userForm.value).subscribe(
        async (res) => {
          this.sharedService.dismissLoader()
          this.sharedService.presentToast(res.message)

          this.back()
        },
        (error) => {
          console.log(error)
          this.sharedService.dismissLoader()
        },
      )
    } catch (error) {
      console.log(error)
      this.sharedService.dismissLoader()
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/account'])
  }
}
