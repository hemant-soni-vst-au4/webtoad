import {LessonsService} from './../../../services/lessons.service'
import {SharedService} from './../../../services/shared.service'
import {Router} from '@angular/router'
import {IonInfiniteScroll, NavController} from '@ionic/angular'
import {Component, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.page.html',
  styleUrls: ['./my-courses.page.scss'],
})
export class MyCoursesPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false})
  infiniteScroll: IonInfiniteScroll
  myCourses = []
  total = 0
  today
  nextPage = 1
  isMyCourses = false

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public navController: NavController,
    private lessonsService: LessonsService,
  ) {
    this.sharedService.gaTrackView('My Course Lessons Screen')
    this.isMyCourses = true
  }

  ionViewWillEnter() {
    this.getMyCourse()
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  getMyCourse(event?) {
    try {
      this.lessonsService.getMyCourse().subscribe(
        (res) => {
          if (res.data.length) {
            this.myCourses = []

            for (let i = 0; i < res.data.length; i++) {
              let ele: any = res.data[i]
              let sublessons = res.data[i].subLessons

              sublessons.sort((a, b) => {
                var nameA = a.startTime.toUpperCase()
                var nameB = b.startTime.toUpperCase()

                if (nameA < nameB) {
                  return -1
                }
                if (nameA > nameB) {
                  return 1
                }
                return 0
              })

              if (ele['videoLevel'] === 'Elementary') {
                ele['videoLevel'] = 'Upper-beginner'
              }

              ele.thumbnail =
                'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
              ele.expanded = false
              ele.subLessons = sublessons
              this.myCourses.push(ele)
            }
          }

          this.isMyCourses = false
        },
        (error) => {},
      )
    } catch (error) {
      this.isMyCourses = false
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
      this.isMyCourses = true
      this.getMyCourse(event)
    }, 500)
  }
}
