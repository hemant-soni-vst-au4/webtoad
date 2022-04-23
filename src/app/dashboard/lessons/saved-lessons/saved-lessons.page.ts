import {LessonsService} from './../../../services/lessons.service'
import {Router} from '@angular/router'
import {IonInfiniteScroll, NavController} from '@ionic/angular'
import {Component, OnInit, ViewChild} from '@angular/core'
import {SharedService} from 'src/app/services/shared.service'

@Component({
  selector: 'app-saved-lessons',
  templateUrl: './saved-lessons.page.html',
  styleUrls: ['./saved-lessons.page.scss'],
})
export class SavedLessonsPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll
  savedLessons = []
  total = 0
  today
  nextPage = 1
  isSavedLessons = false

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    private lessonsService: LessonsService,
  ) {
    this.sharedService.gaTrackView('Saved Lesson Screen')
    this.isSavedLessons = true
  }

  ionViewWillEnter() {
    this.getSavedLessons()
  }

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  ngOnInit() {}

  getSavedLessons(event?) {
    try {
      this.lessonsService.getSavedLessons(this.nextPage).subscribe(
        (res) => {
          if (this.nextPage === 1) {
            this.savedLessons = []
          }

          if (res.data.length) {
            res.data.forEach((ele) => {
              if (ele['videoLevel'] === 'Elementary') {
                ele['videoLevel'] = 'Upper-beginner'
              }
              ele['thumbnail'] =
                'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
              this.savedLessons.push(ele)
            })

            this.nextPage++
            this.total = res.total
          }

          if (event) {
            event.target.complete()
          }
          this.isSavedLessons = false
        },
        (error) => {},
      )
    } catch (error) {
      this.isSavedLessons = false
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
      this.isSavedLessons = true
      this.getSavedLessons(event)
    }, 500)
  }
}
