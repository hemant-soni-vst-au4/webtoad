import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import {catchError, retry, map} from 'rxjs/operators'
import {ApiService} from './api.service'
import {OnBoardingService} from './on-boarding.service'

@Injectable()
export class LessonsService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
    private onBoardingService: OnBoardingService,
  ) {}
  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  getTodaysLessons(data): Observable<any> {
    return this.apiService.get(`/lesson/recommendation/${data}`)
  }

  getNewUploadsLessons(page): Observable<any> {
    const today = this.weekdays[new Date().getDay()]
    const profile = this.onBoardingService.profileCache.profile
    const payload = {
      day: today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today,
      videoLevel: profile.userLevelName,
    }
    return this.apiService.post(`/lesson/get-newUploadLessons/${page}`, payload)
  }

  getTodaysLesson(): Observable<any> {
    const day = this.weekdays[new Date().getDay()]
    return this.getSubLessonDetails({day}, false)
  }

  getSubLessonDetails(data, isDraft) {
    if (isDraft === true) {
      return this.apiService.post(`/lesson/drafted-lesson-details`, data)
    } else {
      return this.apiService.post(`/lesson/details-lessons`, data)
    }
  }

  getDraftLessonsForAdmin(page) {
    return this.apiService.get(`/lesson/drafted-lessons/${page}`)
  }

  getDraftSubLessonDetails(data) {
    return this.apiService.get(`/lesson/drafted-lesson-details`, data)
  }

  saveLesson(data) {
    return this.apiService.post(`/lesson/add-savedLesson`, data)
  }

  removeSavedLesson(data) {
    return this.apiService.post(`/lesson/remove-savedLesson`, data)
  }

  getSavedLessons(page) {
    return this.apiService.get(`/lesson/savedLessons/${page}`)
  }

  getPopularLessons(page) {
    return this.apiService.get(`/lesson/popularLessons/${page}`)
  }

  getCourseList(page, data) {
    return this.apiService.post(`/lesson/course-list/${page}`, data)
  }

  getMyCourse() {
    return this.apiService.get(`/lesson/my-course`)
  }

  getCompletedLessons() {
    return this.apiService.get(`/lesson/completedLessons`)
  }

  getCourseDetails(lessonId, type) {
    return this.apiService.get(`/lesson/course-details/${lessonId}/${type}`)
  }

  completeLesson(data) {
    return this.apiService.post(`/lesson/completed`, data)
  }

  addMyCourseLesson(data) {
    return this.apiService.post(`/lesson/add-course-lesson`, data)
  }

  completedLessonsWithTimeRange(data) {
    return this.apiService.post(`/lesson/completedLessons-within-timeRange`, data)
  }

  reportAnIssueToAdmin(data) {
    return this.apiService.post(`/reportIssues/user/set-report-issue`, data)
  }

  setUserNotes(data) {
    return this.apiService.post(`/user/set-notes`, data)
  }

  getUserNotes(page) {
    return this.apiService.get(`/user/get-notes/${page}`)
  }

  deleteUserNotes(data) {
    return this.apiService.post(`/user/delete-notes`, data)
  }

  getAcronymsList() {
    return this.apiService.get(`/user/acronyms-list`)
  }

  // Find a meaning for word
  findWordMeaning(entry: string): Observable<any> {
    const url = `https://twinword-word-graph-dictionary.p.rapidapi.com/definition_kr/?entry=${entry}`
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-rapidapi-key': 'cRKV2Kl60tmshr5Yw1eForDx52Fdp19YCpQjsn0SpP4r1sNWol',
      }),
    }

    return this.httpClient.get(url, options).pipe(
      map((res) => res),
      retry(1),
      catchError((err) => {
        console.log(err)

        return throwError(err)
      }),
    )
  }
}
