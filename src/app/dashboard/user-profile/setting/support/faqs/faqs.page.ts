import {ActivatedRoute, Router} from '@angular/router'
import {GlobalService} from './../../../../../global/global.service'
import {SharedService} from './../../../../../services/shared.service'
import {Component, OnInit} from '@angular/core'
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.page.html',
  styleUrls: ['./faqs.page.scss'],
})
export class FaqsPage implements OnInit {
  faqType
  faqs = []
  searchFaq

  constructor(
    public navController: NavController,
    public globalService: GlobalService,
    private router: Router,
    private route: ActivatedRoute,
    public sharedService: SharedService,
  ) {
    this.sharedService.gaTrackView("FAQ's Screen")

    this.route.params.subscribe((params) => {
      if (params.type === 'Subscriptions_and_Billing') {
        this.faqs = this.globalService.subscriptionsAndBillingFaqs
      } else if (params.type === 'App_Features') {
        this.faqs = this.globalService.appFeaturesFaqs
      } else if (params.type === 'Study_Methods') {
        this.faqs = this.globalService.studyMethods
      } else if (params.type === 'Suggestions') {
        this.faqs = this.globalService.suggestions
      }
    })
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  ngOnInit() {}

  expandItem(faq): void {
    if (faq.expanded) {
      faq.expanded = false
    } else {
      this.faqs.map((item) => {
        if (faq === item) {
          item.expanded = !item.expanded
        } else {
          item.expanded = false
        }
        return item
      })
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/support'])
  }
}
