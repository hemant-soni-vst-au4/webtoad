import {Router} from '@angular/router'
import {Platform, NavController, AlertController} from '@ionic/angular'
import {GlobalService} from './../../global/global.service'
import {OnBoardingService} from './../../services/on-boarding.service'
import {SharedService} from './../../services/shared.service'
import {SearchService} from './../../services/search.service'
import {Component, OnInit, HostListener} from '@angular/core'
import {Plugins} from '@capacitor/core'
const {Keyboard} = Plugins

const weeklyImages = {
  Monday: '../../../assets/images/search/news.png',
  Tuesday: '../../../assets/images/search/general-english.png',
  Wednesday: '../../../assets/images/search/tv-shows-movies.png',
  Thursday: '../../../assets/images/search/business-english.png',
  Friday: '../../../assets/images/search/speech.png',
  Weekend: '../../../assets/images/search/pop-songs.png',
}

// It's UGLY!!! duplicated with lessons.page.ts
const userLevelIds = {
  '5b117087602e39d075e7cfcc': 'Elementary',
  '5b117088602e39d075e7cfcd': 'Advanced',
}

@Component({
  selector: 'app-search-lessons',
  templateUrl: './search-lessons.page.html',
  styleUrls: ['./search-lessons.page.scss'],
})
export class SearchLessonsPage implements OnInit {
  profile
  suggestedCurriculums = []
  searchKeyWord
  today
  nextPage = 1
  lessons = []
  totalPages = 0
  userLevel
  isSearch = false
  searchNotFound = false
  isFocus = false
  isDesktop = false

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.searchKeyWord !== undefined && event.key === 'Enter') {
      this.getLessons()
    }
  }

  constructor(
    private searchService: SearchService,
    private globalService: GlobalService,
    public platform: Platform,
    public navController: NavController,
    private router: Router,
    public sharedService: SharedService,
    public alertController: AlertController,
    private onBoardingService: OnBoardingService,
  ) {
    this.platform
      .ready()
      .then(() => {
        if (this.platform.is('android') || this.platform.is('ios')) {
          this.isDesktop = false
        } else {
          this.isDesktop = true
        }

        this.sharedService.gaTrackView('Search Lessons Screen')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ionViewWillEnter() {
    this.searchKeyWord = undefined
    this.isFocus = false

    this.today = this.globalService.weekdays[new Date().getDay()]
    if (this.today === 'Saturday' || this.today === 'Sunday') {
      this.today = 'Weekend'
    }

    this.getUserProfile()
    this.getSuggestedCurriculums()
  }

  ngOnInit() {}

  getUserProfile() {
    try {
      this.onBoardingService.getUserProfile().subscribe(
        (res) => {
          this.profile = res.data
          if (this.profile) {
            this.profile.trialLessonsLeft =
              this.profile.trialLessonLimit - this.profile.completedLesson

            this.userLevel = userLevelIds[this.profile.userLevelId] || 'Intermediate'
          }

          // console.log( this.profile );
        },
        (error) => {},
      )
    } catch (error) {
      console.log(error)
    }
  }

  trackById(i, item) {
    return item._id
  }

  getSuggestedCurriculums() {
    try {
      this.searchService.getSuggestedCurriculums().subscribe(
        (res) => {
          const suggestedCurriculums = res.data.map((el) => ({
            ...el,
            icon: weeklyImages[el.day],
          }))
          this.suggestedCurriculums = suggestedCurriculums
        },
        (error) => {},
      )
    } catch (error) {
      console.log(error)
    }
  }

  async getLessons(event?) {
    if (
      this.searchKeyWord === undefined ||
      this.searchKeyWord === '' ||
      this.userLevel === undefined
    ) {
      return
    } else if (event === undefined) {
      this.lessons = []
      this.nextPage = 1
    }

    if (event) {
      this.isSearch = false
    } else {
      this.isSearch = true
    }

    const obj = {
      videoLevel: this.userLevel,
      day: this.today,
      searchKeyWord: this.searchKeyWord.trim(),
    }

    try {
      const page = this.nextPage
      const res = await this.searchService.searchLessons(page, obj).toPromise()

      if (page === 1) {
        this.lessons = []
      }

      if (res.data.length > 0) {
        this.searchNotFound = false
        res.data.forEach((ele: any) => {
          if (ele.videoLevel === 'Elementary') {
            ele.videoLevel = 'Upper-beginner'
          }
          ele.thumbnail = 'https://img.youtube.com/vi/' + ele.youtubeId + '/mqdefault.jpg'
          this.lessons.push(ele)
        })

        this.nextPage = page + 1
        this.totalPages = res.total

        if (event) {
          event.target.complete()
        }

        this.isSearch = false
      } else {
        if (event) {
          event.target.complete()
        }

        this.searchNotFound = true
        this.isSearch = false

        if (event === undefined) {
          this.lessons = []
        }
      }
    } catch (error) {
      if (event) {
        event.target.complete()
      }
      this.isSearch = false
      this.searchNotFound = true
    }
  }

  onCancel() {
    this.isFocus = false
    this.searchKeyWord = undefined
  }

  clearInput() {
    this.lessons = []
    this.searchKeyWord = undefined
    this.nextPage = 1
  }

  onSearch(searchKeyWord?) {
    this.nextPage = 1
    if (this.platform.is('capacitor')) {
      Keyboard.show()
    }
    if (searchKeyWord !== undefined || searchKeyWord !== '') {
      this.getLessons()
    } else {
      this.focusOnSearch(true)
    }
  }

  loadData(event) {
    this.getLessons(event)
    setTimeout(() => {
      if (this.nextPage >= this.totalPages) {
        event.target.disabled = true
      }
    }, 500)
  }

  shareNow() {}

  focusOnSearch(isFocus) {
    this.searchKeyWord = undefined
    this.isFocus = isFocus
  }

  ionViewWillLeave() {
    this.lessons = []
    this.isSearch = false
    this.searchKeyWord = undefined
    this.nextPage = 1
  }

  onLessonDetails(subLessonId) {
    this.navController.setDirection('forward')
    this.router.navigate(['/lesson-details', subLessonId, false, false])
  }

  async onSubscription() {
    this.navController.setDirection('forward')
    this.router.navigate(['/subscription'])
  }
}
