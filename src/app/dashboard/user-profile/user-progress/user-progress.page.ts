import {Router} from '@angular/router'

import {LessonsService} from './../../../services/lessons.service'
import {SharedService} from './../../../services/shared.service'
import {MonthsPopoverComponent} from './months-popover/months-popover.component'
import {Platform, PopoverController, NavController, AlertController} from '@ionic/angular'
import {Component, OnInit, Input} from '@angular/core'
import * as moment from 'moment'

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.page.html',
  styleUrls: ['./user-progress.page.scss'],
})
export class UserProgressPage implements OnInit {
  @Input() profile
  weekDays = new Array()
  months = new Array()
  currentMonthDates = new Array()
  currentMonth
  daysInThisMonth = new Array()
  daysInLastMonth = new Array()
  daysInNextMonth = new Array()
  currentYear: any
  currentDate: any
  date = new Date()
  currentMonthCompletedLessons = new Array()
  totalCompletedLessons = new Array()
  upperBeginnerCompletedLessons = new Array()
  intermediateCompletedLessons = new Array()
  advanceCompletedLessons = new Array()

  constructor(
    public popoverController: PopoverController,
    private router: Router,
    public platform: Platform,
    private navController: NavController,
    private lessonsService: LessonsService,
    private sharedService: SharedService,
    public alertController: AlertController,
  ) {
    this.sharedService.gaTrackView('Profile User Progress')

    moment.locale('en')
    this.months = moment.months()

    this.currentMonth = this.months[new Date().getMonth()]
    const monthStartDate = new Date(
      this.date.getFullYear(),
      this.date.getMonth(),
      1,
    ).toISOString()
    const monthEndDate = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + 1,
      0,
    ).toISOString()

    if (monthStartDate && monthEndDate) {
      this.getCompletedLessonsByMonth(monthStartDate, monthEndDate)
    }
    // this.weekDays = moment.weekdaysMin();
    // if ( this.weekDays.length && this.months.length ) {
    //   this.currentMonth = this.months[new Date().getMonth()];
    //   this.currentMonthDates = this.getDaysInMonth( new Date().getMonth(), new Date().getFullYear() );
    // }
    // this.getDaysOfMonth();

    this.getCompletedUserLessons()
  }

  ngOnInit() {}

  getCompletedUserLessons() {
    try {
      this.lessonsService.getCompletedLessons().subscribe(
        (res) => {
          const total = res.data
          const intermediate = total.filter((l) => l.level === 'Intermediate')
          const upperBeginner = total.filter((l) => l.level === 'Advanced')
          const advance = total.filter((l) => l.level === 'Elementary')

          this.totalCompletedLessons = total
          this.intermediateCompletedLessons = intermediate
          this.advanceCompletedLessons = upperBeginner
          this.upperBeginnerCompletedLessons = advance
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  async getCompletedLessonsByMonth(startDate, endDate) {
    try {
      const res = await this.lessonsService
        .completedLessonsWithTimeRange({startDate, endDate})
        .toPromise()
      this.currentMonthCompletedLessons = res.data || []
    } catch (error) {
      console.log(error)
    }
  }

  async onMonthChange(event) {
    const popover = await this.popoverController.create({
      component: MonthsPopoverComponent,
      event,
      componentProps: {currentMonth: this.currentMonth, months: this.months},
      mode: 'md',
      cssClass: ['lessonScenesPopover'],
    })

    await popover.present()

    const res = await popover.onDidDismiss()

    if (res.data) {
      this.currentMonth = res.data.month
      this.sharedService.gaTrackEvent('MonthChangeUserProgress', this.currentMonth)

      const monthStartDate = new Date(
        this.date.getFullYear(),
        res.data.index,
        1,
      ).toISOString()
      const monthEndDate = new Date(
        this.date.getFullYear(),
        res.data.index + 1,
        0,
      ).toISOString()

      if (monthStartDate && monthEndDate) {
        await this.getCompletedLessonsByMonth(monthStartDate, monthEndDate)
      }
    }
  }

  async onSubscription() {
    this.navController.setDirection('forward')
    this.router.navigate(['/subscription'])
  }

  // getDaysInMonth ( month, year ) {
  //   const date = new Date( Date.UTC( year, month, 1 ) );
  //   const days = [];
  //   while ( date.getMonth() === month ) {
  //     days.push( {
  //       date: new Date( date ).getDate(),
  //       year: new Date( date ).getFullYear(),
  //       month: this.months[new Date( date ).getMonth()],
  //       day: this.weekDays[new Date( date ).getDay()]
  //     } );
  //     date.setDate( date.getDate() + 1 );
  //   }
  //   return days;
  // }

  // getDaysOfMonth () {

  //   this.currentMonth = this.months[this.date.getMonth()];
  //   this.currentYear = this.date.getFullYear();

  //   if ( this.date.getMonth() === new Date().getMonth() ) {
  //     this.currentDate = new Date().getDate();
  //   } else {
  //     this.currentDate = 999;
  //   }

  //   const firstDayThisMonth = new Date( this.date.getFullYear(), this.date.getMonth(), 1 ).getDay();
  //   const prevNumOfDays = new Date( this.date.getFullYear(), this.date.getMonth(), 0 ).getDate();
  //   for ( let i = prevNumOfDays - ( firstDayThisMonth - 1 ); i <= prevNumOfDays; i++ ) {
  //     this.daysInLastMonth.push( i );
  //   }

  //   const thisNumOfDays = new Date( this.date.getFullYear(), this.date.getMonth() + 1, 0 ).getDate();
  //   for ( let i = 0; i < thisNumOfDays; i++ ) {
  //     this.daysInThisMonth.push( i + 1 );
  //   }

  //   const lastDayThisMonth = new Date( this.date.getFullYear(), this.date.getMonth() + 1, 0 ).getDay();
  //   for ( let i = 0; i < ( 6 - lastDayThisMonth ); i++ ) {
  //     this.daysInNextMonth.push( i + 1 );
  //   }
  //   const totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
  //   if ( totalDays < 36 ) {
  //     for ( let i = ( 7 - lastDayThisMonth ); i < ( ( 7 - lastDayThisMonth ) + 7 ); i++ ) {
  //       this.daysInNextMonth.push( i );
  //     }
  //   }
  // }

  // goToLastMonth () {
  //   this.date = new Date( this.date.getFullYear(), this.date.getMonth(), 0 );
  //   this.getDaysOfMonth();
  // }

  // goToNextMonth () {
  //   this.date = new Date( this.date.getFullYear(), this.date.getMonth() + 2, 0 );
  //   this.getDaysOfMonth();
  // }
}
