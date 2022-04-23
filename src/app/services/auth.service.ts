import {Injectable} from '@angular/core'
import {Observable, BehaviorSubject} from 'rxjs'
import {first} from 'rxjs/operators'
import {SharedService} from './shared.service'
import {ApiService} from './api.service'

@Injectable({providedIn: 'root'})
export class AuthService {
  token: any
  authSubject = new BehaviorSubject(true)
  token$: BehaviorSubject<any>

  constructor(public sharedService: SharedService, public apiService: ApiService) {}

  login(user): Observable<any> {
    return this.apiService.postWithoutToken('/user/authenticate', user)
  }

  signUp(user): Observable<any> {
    return this.apiService.postWithoutToken('/user/signup', user)
  }

  forgotPassword(email): Observable<any> {
    return this.apiService.postWithoutToken('/user/requestPasswordURL', email)
  }

  get isLoggedIn(): Observable<boolean> {
    return this.authSubject.pipe(first())
  }
}
