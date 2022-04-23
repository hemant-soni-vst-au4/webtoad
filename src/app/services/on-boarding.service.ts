import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {catchError, tap, map, shareReplay, switchMap} from 'rxjs/operators'
import {ApiService} from './api.service'

@Injectable()
export class OnBoardingService {
  token: any
  public profileCache: any

  constructor(public apiService: ApiService) {}

  userGuid(data): Observable<any> {
    return this.apiService.post('/static/user-guide', data)
  }

  levelList(): Observable<any> {
    return this.apiService.get('/changelevel/list')
  }

  changeLevel(data): Observable<any> {
    return this.apiService.post('/changelevel/update', data)
  }

  getUserProfile(noCache: boolean = false): Observable<any> {
    const self = this
    const req = this.apiService.get('/user/get-profile').pipe(
      tap((e) => {
        self.profileCache = {
          timestamp: +new Date(),
          profile: e.data,
        }
      }),
    )
    if (noCache) {
      return req
    }
    if (this.profileCache) {
      if (+new Date() - this.profileCache.timestamp < 5000) {
        return of({data: this.profileCache.profile})
      }
    }
    return req
  }

  verifyEmail(email): Observable<any> {
    return this.apiService.post('/user/resend-email', {email})
  }

  updateUserName(data): Observable<any> {
    return this.apiService.post('/user/update-name', data)
  }

  updateUserEmail(data): Observable<any> {
    return this.apiService.post('/user/update-email', data)
  }

  updateUserPassword(data): Observable<any> {
    return this.apiService.post('/user/update-password', data)
  }

  contactToAdmin(data): Observable<any> {
    return this.apiService.post('/contactus/user/set-contact-us', data)
  }

  getSubTitleLanguages(): Observable<any> {
    return this.apiService.get('/subTitleLanguages/list')
  }

  setUserSubTitleLanguage(data): Observable<any> {
    return this.apiService.post('/user/set-subtitleLanguage', data)
  }

  uploadProfilePicture(data): Observable<any> {
    return this.apiService.post('/user/uploadProfilePicture', data)
  }

  getUserSubTitleLanguage(subTitleLanguageId): Observable<any> {
    return this.apiService.get('/subTitleLanguages/details/' + subTitleLanguageId)
  }
}
