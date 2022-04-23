import {AuthService} from './../services/auth.service'
import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import {Router} from '@angular/router'
import {SharedService} from '../services/shared.service'
import {NavController} from '@ionic/angular'
import {MustMatch} from '../_helpers/must-match.validator'
import {BehaviorSubject} from 'rxjs'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signUpForm: FormGroup
  isSubmitted = false
  type = 'password'
  showPass = false

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    public navController: NavController,
    private authService: AuthService,
    private router: Router,
  ) {
    this.sharedService.gaTrackView('SignUpScreen')
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
            ),
          ]),
        ],
        confirmEmail: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
            ),
          ]),
        ],
        password: ['', Validators.required],
        fullName: ['', Validators.required],
        termsOfUse: [false, Validators.required],
        privacyPolicy: [false, Validators.required],
      },
      {
        validator: MustMatch('email', 'confirmEmail'),
      },
    )
  }

  get f() {
    return this.signUpForm.controls
  }

  trimEmail(event, type) {
    if (type === 'email') {
      this.signUpForm.patchValue({
        email: event.target.value.trim(),
      })
    } else {
      this.signUpForm.patchValue({
        confirmEmail: event.target.value.trim(),
      })
    }
  }

  showPassword() {
    this.showPass = !this.showPass

    if (this.showPass) {
      this.type = 'text'
    } else {
      this.type = 'password'
    }
  }

  async signUp() {
    this.sharedService.gaTrackEvent('SignUpButton', 'SignUpScreen')
    this.isSubmitted = true

    if (this.signUpForm.invalid) {
      return
    }

    if (!this.signUpForm.value.termsOfUse) {
      this.sharedService.presentToast(
        'You must agree the Terms of Use and The Privacy Policy to sign up.',
      )
      return
    }

    if (!this.signUpForm.value.privacyPolicy) {
      this.sharedService.presentToast(
        'You must agree the Terms of Use and The Privacy Policy to sign up.',
      )
      return
    }

    this.sharedService.presentLoader('Please wait...')

    const user = this.signUpForm.value
    user.email = this.signUpForm.value.email.trim()
    user.fullName = this.signUpForm.value.fullName.trim()
    user.loginType = 'Email'

    this.sharedService.removeNativeStorage('reminder')
    this.sharedService.setNativeStorage('isHelpModeDone', false)
    this.sharedService.setNativeStorage('isHelpScreenForDictationStepDone', false)
    this.sharedService.setNativeStorage('isHelpScreenForReviewStepDone', false)
    this.sharedService.setNativeStorage('isHelpScreenForPracticeStepDone', false)
    this.sharedService.setNativeStorage('isTodayLessonHelpModeDone', false)
    this.sharedService.setNativeStorage('isReviewHelpModeDone', false)

    try {
      const res = await this.authService.signUp(user).toPromise()

      if (res) {
        const loginRes = await this.authService
          .login({
            email: user.email,
            password: user.password,
            loginType: user.loginType,
          })
          .toPromise()

        if (loginRes.token) {
          await this.sharedService.setNativeStorage('token', loginRes.token)
          this.authService.token$ = new BehaviorSubject(loginRes.token)
          this.authService.authSubject.next(true)
          this.navController.setDirection('root')
          this.router.navigate(['/on-boarding-level'])
        }
      }
    } catch (err) {
      // console.error(err)
      this.sharedService.presentAlert('Alert', err.error)
    }

    this.sharedService.dismissLoader()
  }
}
