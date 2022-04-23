import {LessonsService} from './../../../services/lessons.service'
import {NavController, IonInfiniteScroll} from '@ionic/angular'
import {SharedService} from './../../../services/shared.service'
import {Component, OnInit, ViewChild} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'app-popular-lessons',
  templateUrl: './popular-lessons.page.html',
  styleUrls: ['./popular-lessons.page.scss'],
})
export class PopularLessonsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll
  popularLessons = []
  total = 0
  today
  nextPage = 1
  isPopularLessons = false

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    private lessonsService: LessonsService,
  ) {
    this.isPopularLessons = true

    this.sharedService.gaTrackView('Popular Lessons Screen')
  }

  ionViewWillEnter() {
    this.getPopularLessons()
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  getPopularLessons(event?) {
    try {
      this.lessonsService.getPopularLessons(this.nextPage).subscribe(
        (res) => {
          if (this.nextPage === 1) {
            this.popularLessons = []
          }

          if (res.data.length) {
            res.data.forEach((ele) => {
              if (ele['videoLevel'] === 'Elementary') {
                ele['videoLevel'] = 'Upper-beginner'
              }
              ele['thumbnail'] =
                'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
              this.popularLessons.push(ele)
            })

            this.nextPage++
            this.total = res.total
          }

          if (event) {
            event.target.complete()
          }
          this.isPopularLessons = false
        },
        (error) => {},
      )
    } catch (error) {
      this.isPopularLessons = false
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
      this.isPopularLessons = true
      this.getPopularLessons(event)
    }, 500)
  }
}
