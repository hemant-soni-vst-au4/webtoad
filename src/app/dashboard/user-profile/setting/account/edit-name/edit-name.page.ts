import {SharedService} from './../../../../../services/shared.service'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {NavController} from '@ionic/angular'
import {OnBoardingService} from './../../../../../services/on-boarding.service'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.page.html',
  styleUrls: ['./edit-name.page.scss'],
})
export class EditNamePage implements OnInit {
  userForm: FormGroup
  isSubmitted = false

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public navController: NavController,
    private onBoardingService: OnBoardingService,
    public sharedService: SharedService,
  ) {
    this.sharedService.gaTrackView('Edit Name Screen')
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
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
            this.userForm.get('fullName').setValue(res.data.fullName)
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
    this.sharedService.gaTrackEvent('SaveEditName', 'EditNameScreen')

    this.isSubmitted = true

    if (this.userForm.invalid) {
      return
    }

    this.userForm.value.fullName = this.userForm.value.fullName.toLowerCase()

    try {
      this.sharedService.presentLoader('Please wait...')

      this.onBoardingService.updateUserName(this.userForm.value).subscribe(
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
