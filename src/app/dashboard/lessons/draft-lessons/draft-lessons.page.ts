import {LessonsService} from './../../../services/lessons.service'
import {SharedService} from './../../../services/shared.service'
import {Router} from '@angular/router'
import {IonInfiniteScroll, NavController} from '@ionic/angular'
import {Component, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-draft-lessons',
  templateUrl: './draft-lessons.page.html',
  styleUrls: ['./draft-lessons.page.scss'],
})
export class DraftLessonsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll
  draftLessons = []
  total = 0
  today
  nextPage = 1
  isDraftLessons = false

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    private lessonsService: LessonsService,
  ) {
    this.isDraftLessons = true

    this.sharedService.gaTrackView('Popular Lessons Screen')
  }

  ionViewWillEnter() {
    this.getDraftLessons()
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  getDraftLessons(event?) {
    try {
      this.lessonsService.getDraftLessonsForAdmin(this.nextPage).subscribe(
        (res) => {
          if (this.nextPage === 1) {
            this.draftLessons = []
          }

          if (res.data.length) {
            res.data.map((ele: any) => {
              if (ele.videoLevel === 'Elementary') {
                ele.videoLevel = 'Upper-beginner'
              }
              ele.thumbnail =
                'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
              this.draftLessons.push(ele)
            })

            this.nextPage++
            this.total = res.total
          }

          if (event) {
            event.target.complete()
          }
          this.isDraftLessons = false
        },
        (error) => {},
      )
    } catch (error) {
      this.isDraftLessons = false
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
      this.isDraftLessons = true
      this.getDraftLessons(event)
    }, 500)
  }
}
