import {LessonsService} from './../../../services/lessons.service'
import {SearchService} from './../../../services/search.service'
import {GlobalService} from './../../../global/global.service'
import {NavController, IonInfiniteScroll} from '@ionic/angular'
import {SharedService} from './../../../services/shared.service'
import {Router, ActivatedRoute} from '@angular/router'
import {Component, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll
  elementaryCourse = new Array()
  intermediateCourse = new Array()
  advancedCourse = new Array()
  total = 0
  nextPage = 1
  isSearchLessonsList = false
  videoLevel = 'Elementary'
  suggestedCurriculumId
  suggestedCurriculumTitle
  suggestedCurriculumDay

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public sharedService: SharedService,
    public navController: NavController,
    // private lessonsService: SearchService,
    private lessonsService: LessonsService,
    private globalService: GlobalService,
  ) {
    this.sharedService.gaTrackView('Search List Screen')
    this.isSearchLessonsList = true
  }

  ionViewWillEnter() {
    this.route.params.subscribe((params) => {
      this.suggestedCurriculumId = params.suggestedCurriculumId
      this.suggestedCurriculumTitle = params.suggestedCurriculumTitle
      this.suggestedCurriculumDay = params.suggestedCurriculumDay

      this.getTopicLessonsByUserLevel()
    })
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['/dashboard/lessons'])
    this.navController.setDirection('root')
  }

  async getTopicLessonsByUserLevel(event?) {
    const obj = {
      videoLevel: this.videoLevel,
      lessonTopicId: this.suggestedCurriculumId,
    }

    try {
      const res = await this.lessonsService.getCourseList(this.nextPage, obj).toPromise()

      switch (this.videoLevel) {
        case 'Elementary':
          if (this.nextPage === 1) {
            this.elementaryCourse = []
          }

          break

        case 'Intermediate':
          if (this.nextPage === 1) {
            this.intermediateCourse = []
          }

          break

        default:
          if (this.nextPage === 1) {
            this.advancedCourse = []
          }

          break
      }

      if (res.data.length) {
        for (let i = 0; i < res.data.length; i++) {
          let ele = res.data[i]

          // ele.subLessons.sort((a, b) => {
          //   if (a.startTime.toUpperCase() < b.startTime.toUpperCase()) {
          //     return -1
          //   }
          //   if (a.startTime.toUpperCase() > b.startTime.toUpperCase()) {
          //     return 1
          //   }
          //   return 0
          // })

          ele.thumbnail = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
          // ele.expanded = true
          ele.expanded = false

          switch (ele.videoLevel) {
            case 'Elementary':
              this.elementaryCourse.push(ele)

              break

            case 'Intermediate':
              this.intermediateCourse.push(ele)

              break

            default:
              this.advancedCourse.push(ele)

              break
          }
        }

        this.nextPage++
        this.total = res.totalLessons
      }

      if (event) {
        event.target.complete()
      }
      this.isSearchLessonsList = false
    } catch (error) {
      if (event) {
        event.target.complete()
      }
      this.isSearchLessonsList = false
    }
  }

  onExpandItem(searchLesson): void {
    if (searchLesson.expanded) {
      searchLesson.expanded = false
    } else {
      switch (this.videoLevel) {
        case 'Elementary':
          this.elementaryCourse.map((item) => {
            if (searchLesson === item) {
              item.expanded = !item.expanded
            } else {
              item.expanded = false
            }
            return item
          })

          break

        case 'Intermediate':
          this.intermediateCourse.map((item) => {
            if (searchLesson === item) {
              item.expanded = !item.expanded
            } else {
              item.expanded = false
            }
            return item
          })

          break

        default:
          this.advancedCourse.map((item) => {
            if (searchLesson === item) {
              item.expanded = !item.expanded
            } else {
              item.expanded = false
            }
            return item
          })

          break
      }
    }
  }

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/dashboard/search-lessons'])
  }

  segmentChanged(event) {
    this.isSearchLessonsList = true
    this.nextPage = 1
    this.videoLevel = event.detail.value
    this.getTopicLessonsByUserLevel()
    this.infiniteScroll.disabled = false

    this.elementaryCourse = []
    this.intermediateCourse = []
    this.advancedCourse = []
  }

  loadData(event) {
    switch (this.videoLevel) {
      case 'Elementary':
        setTimeout(() => {
          if (this.elementaryCourse.length === this.total) {
            this.infiniteScroll.disabled = true
          } else {
            this.isSearchLessonsList = true
            this.getTopicLessonsByUserLevel(event)
          }
        }, 500)

        break

      case 'Intermediate':
        setTimeout(() => {
          if (this.intermediateCourse.length === this.total) {
            this.infiniteScroll.disabled = true
          } else {
            this.isSearchLessonsList = true
            this.getTopicLessonsByUserLevel(event)
          }
        }, 500)

        break

      default:
        setTimeout(() => {
          if (this.advancedCourse.length === this.total) {
            this.infiniteScroll.disabled = true
          } else {
            this.isSearchLessonsList = true
            this.getTopicLessonsByUserLevel(event)
          }
        }, 500)

        break
    }
  }

  onCourseDetails(lesson) {
    this.navController.setDirection('forward')
    this.router.navigate(['/course-details', lesson._id, 'search'])
  }
}
