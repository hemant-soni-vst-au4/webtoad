import {AuthService} from './../services/auth.service'
import {Component, OnInit, NgZone} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {SharedService} from '../services/shared.service'
import {NavController, AlertController} from '@ionic/angular'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup
  isSubmitted = false

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    public navController: NavController,
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    public alertController: AlertController,
  ) {
    this.sharedService.gaTrackView('ForgotPasswordScreen')
  }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
          ),
        ]),
      ],
    })
  }

  get f() {
    return this.forgotPasswordForm.controls
  }

  submit() {
    this.sharedService.gaTrackEvent('SubmitForgotPassword', 'ForgotPasswordScreen')
    this.isSubmitted = true
    if (this.forgotPasswordForm.invalid) {
      return
    }

    this.sharedService.presentLoader('Please wait...')

    const email = this.forgotPasswordForm.value.email.trim().toLowerCase()

    this.authService.forgotPassword({email}).subscribe(
      async (res) => {
        this.sharedService.dismissLoader()

        const alert = await this.alertController.create({
          header: 'Check you mail.',
          message: 'Password reset link has been sent!',
          buttons: [
            {
              text: 'OK',
              handler: (): void => {
                this.navController.setDirection('root')
                this.ngZone.run(() => this.router.navigate(['/login']).then())
              },
            },
          ],
        })

        await alert.present()
      },
      (error) => {
        this.sharedService.dismissLoader()
        // this.sharedService.presentToast( error );
      },
    )
  }
}
