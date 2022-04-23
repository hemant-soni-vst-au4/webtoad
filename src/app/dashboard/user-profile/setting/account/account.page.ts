import {SharedService} from 'src/app/services/shared.service'
import {SubscriptionService} from './../../../../services/subscription.service'
import {OnBoardingService} from './../../../../services/on-boarding.service'
import {NavController, AlertController} from '@ionic/angular'
import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  profile

  constructor(
    public router: Router,
    public navController: NavController,
    public alertController: AlertController,
    public sharedService: SharedService,
    private subscriptionService: SubscriptionService,
    private onBoardingService: OnBoardingService,
  ) {
    this.sharedService.gaTrackView('Settings Account')
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getUserProfile()
  }

  async getUserProfile() {
    const SUBSCRIPTION_LABELS = {
      Subscription: 'Subscription',
      SubscriptionExpired: 'Subscription Expired',
      Trial: 'Free Trial',
    }

    try {
      const {data: profile} = await this.onBoardingService.getUserProfile().toPromise()
      console.log(profile)
      if (
        profile.currentPackage === 'Subscription' &&
        profile.subscriptionType &&
        (await this.checkIsExpired(profile.subscriptionType))
      ) {
        profile.currentPackage = 'SubscriptionExpired'
      }

      this.profile = {
        fullName: profile.fullName,
        email: profile.email,
        currentPackage: profile.currentPackage,
        subscriptionLabel: SUBSCRIPTION_LABELS[profile.currentPackage],
      }
    } catch (error) {
      console.log(error)
    }
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  async checkIsExpired(subscriptionType) {
    try {
      const res = await this.subscriptionService
        .getUserSubscription({subscriptionType})
        .toPromise()

      return res.message === 'Your subscription has been canceled.'
    } catch (error) {
      console.log(error)
    }
    return false
  }

  async onSubscription() {
    const path =
      this.profile.currentPackage === 'Subscription'
        ? '/subscription'
        : '/subscriptionplans'
    this.navController.setDirection('forward')
    this.router.navigate([path])
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/setting'])
  }
}
