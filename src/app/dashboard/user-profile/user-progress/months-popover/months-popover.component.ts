import {NavParams, PopoverController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-months-popover',
  templateUrl: './months-popover.component.html',
  styleUrls: ['./months-popover.component.scss'],
})
export class MonthsPopoverComponent implements OnInit {
  currentMonth
  months = new Array()

  constructor(private navParams: NavParams, public popoverController: PopoverController) {
    this.months = this.navParams.get('months')
    this.currentMonth = this.navParams.get('currentMonth')
  }

  ngOnInit() {}

  selectMonth(month, index) {
    this.popoverController.dismiss({month, index})
  }
}
