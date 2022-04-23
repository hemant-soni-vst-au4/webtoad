import {Router} from '@angular/router'
import {NavController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
import {SharedService} from 'src/app/services/shared.service'

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {
  constructor(
    public navController: NavController,
    public router: Router,
    public sharedService: SharedService,
  ) {
    this.sharedService.gaTrackView('Delete Account Screen')
  }

  ngOnInit() {}

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/account'])
  }
}
