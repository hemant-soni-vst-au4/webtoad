import {Router, ActivatedRoute} from '@angular/router'
import {GlobalService} from './../../../../global/global.service'
import {SharedService} from '../../../../services/shared.service'
import {NavController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  faqs = []
  searchFaq
  isFocus = false

  constructor(
    public navController: NavController,
    public router: Router,
    private route: ActivatedRoute,
    public globalService: GlobalService,
    public sharedService: SharedService,
  ) {
    this.sharedService.gaTrackView('Support Screen')

    this.route.params.subscribe((params) => {
      this.faqs = this.faqs.concat(
        this.globalService.subscriptionsAndBillingFaqs,
        this.globalService.appFeaturesFaqs,
        this.globalService.studyMethods,
        this.globalService.suggestions,
      )
    })
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

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

  ngOnInit() {}

  onCancel() {
    this.isFocus = false
    this.searchFaq = undefined
  }

  clearInput() {
    this.searchFaq = undefined
  }

  onSearch(searchFaq?) {
    if (searchFaq !== undefined || searchFaq !== '') {
    } else {
      this.focusOnSearch(true)
    }
  }

  focusOnSearch(isFocus) {
    this.searchFaq = undefined
    this.isFocus = isFocus
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/setting'])
  }
}
