import {BehaviorSubject} from 'rxjs'
import {AuthService} from './../services/auth.service'
import {Component, OnInit, HostListener, ViewChild} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {SharedService} from '../services/shared.service'
import {IonInput, NavController, Platform} from '@ionic/angular'
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('emailInput') emailInput: IonInput
  loginForm: FormGroup
  isSubmitted = false
  type = 'password'
  showPass = false
  userPlatform

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.loginForm.valid && event.key === 'Enter') {
      this.login()
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    public navController: NavController,
    private authService: AuthService,
    private router: Router,
    public platform: Platform,
  ) {
    this.sharedService.gaTrackView('LoginScreen')

    this.sharedService.getDeviceInfo().then((info) => {
      this.userPlatform = `${info.manufacturer} ( ${info.platform} ) ${info.model} ( ${info.osVersion} ) - ${info.appVersion}`
    })
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
          ),
        ]),
      ],
      password: ['', Validators.required],
    })
  }

  ionViewWillEnter() {
    // setTimeout(() => this.emailInput.setFocus(), 300)
  }

  get f() {
    return this.loginForm.controls
  }

  showPassword() {
    this.showPass = !this.showPass

    if (this.showPass) {
      this.type = 'text'
    } else {
      this.type = 'password'
    }
  }

  trimEmail(event) {
    this.loginForm.patchValue({
      email: event.target.value.trim(),
    })
  }
  handleSubmit() {
    setTimeout(() => {
      this.login()
    }, 300)
  }

  async login() {
    this.isSubmitted = true

    if (this.loginForm.invalid) {
      return
    }

    this.sharedService.gaTrackEvent('SignInButton', 'SignInScreen')

    this.sharedService.presentLoader('Please wait...')

    const user = this.loginForm.value
    user.email = this.loginForm.value.email.trim().toLowerCase()
    user.loginType = 'Email'
    user.userPlatform = this.userPlatform

    try {
      const res = await this.authService.login(user).toPromise()

      if (res.token) {
        const data = jwtDecode(res.token)
        // console.log({data})
        this.sharedService.setNativeStorage('isAdmin', !!data.isAdmin)
        this.sharedService.setNativeStorage('isOnBoarding', true)
        await this.sharedService.setNativeStorage('token', res.token)

        this.authService.token$ = new BehaviorSubject(res.token)
        this.authService.authSubject.next(true)
        this.sharedService.presentToast('Login successfully.')
        this.navController.setDirection('root')
        this.router.navigate(['/dashboard'])
      }
    } catch (err) {
      this.sharedService.presentAlert('Alert', err.error)
    }
    this.sharedService.dismissLoader()
  }
}
