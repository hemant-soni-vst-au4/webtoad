import {OnBoardingService} from './../../../services/on-boarding.service'
import {GlobalService} from './../../../global/global.service'
import {LessonsService} from './../../../services/lessons.service'
import {NavController, IonInfiniteScroll} from '@ionic/angular'
import {SharedService} from './../../../services/shared.service'
import {Router} from '@angular/router'
import {Component, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-new-uploads',
  templateUrl: './new-uploads.page.html',
  styleUrls: ['./new-uploads.page.scss'],
})
export class NewUploadsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll
  newUploadsLessons = []
  total = 0
  today
  nextPage = 1
  isNewUploadLessons = false
  profile
  userLevel

  constructor(
    public router: Router,
    public sharedService: SharedService,
    private onBoardingService: OnBoardingService,
    public navController: NavController,
    private lessonsService: LessonsService,
    private globalService: GlobalService,
  ) {
    this.sharedService.gaTrackView('New Uploaded Lessons Screen')

    this.isNewUploadLessons = true
    this.today = this.globalService.weekdays[new Date().getDay()]
  }

  ionViewWillEnter() {
    this.getUserProfile()
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  getUserProfile() {
    try {
      this.onBoardingService.getUserProfile().subscribe(
        (res) => {
          this.profile = res.data

          if (this.profile) {
            if (this.profile.userLevelId === '5b117087602e39d075e7cfcc') {
              this.userLevel = 'Elementary'
            } else if (this.profile.userLevelId === '5b117088602e39d075e7cfcd') {
              this.userLevel = 'Advanced'
            } else {
              this.userLevel = 'Intermediate'
            }

            this.getNewUploadsLessons()
          }
        },
        (error) => {},
      )
    } catch (error) {
      console.log(error)
    }
  }

  getNewUploadsLessons(event?) {
    if (this.today === 'Saturday' || this.today === 'Sunday') {
      this.today = 'Weekend'
    }

    try {
      this.lessonsService.getNewUploadsLessons(this.nextPage).subscribe(
        (res) => {
          if (this.nextPage === 1) {
            this.newUploadsLessons = []
          }

          if (res.data.length) {
            res.data.forEach((ele) => {
              if (ele['videoLevel'] === 'Elementary') {
                ele['videoLevel'] = 'Upper-beginner'
              }
              ele['thumbnail'] =
                'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
              this.newUploadsLessons.push(ele)
            })

            this.nextPage++
            this.total = res.total
          }

          if (event) {
            event.target.complete()
          }
          this.isNewUploadLessons = false
        },
        (error) => {},
      )
    } catch (error) {
      this.isNewUploadLessons = false
      console.log(error)
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/dashboard/lessons'])
  }

  loadData(event) {
    setTimeout(() => {
      if (this.nextPage === this.total) {
        event.target.disabled = true
      }
      this.isNewUploadLessons = true
      this.getNewUploadsLessons(event)
    }, 500)
  }
}
