import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, throwError, from} from 'rxjs'
import {environment} from './../../environments/environment'
import {catchError, retry, map, shareReplay, switchMap} from 'rxjs/operators'
import {SharedService} from './shared.service'
import {Router} from '@angular/router'

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(
    private router: Router,
    private httpClient: HttpClient,
    public sharedService: SharedService,
  ) {}

  post(path: string, data: object): Observable<any> {
    return from(this.sharedService.getNativeStorage('token')).pipe(
      switchMap((token) => {
        const url = environment.API_URL + path
        return this.httpClient.post(url, data, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accesstoken: token?.data,
          }),
        })
      }),
      // shareReplay(1),
      // map((res) => res),
      // retry(1),
      catchError((err) => {
        console.log(err)

        this.sharedService.presentAlert('Alert', err.error)

        if (err.error.status === 502) {
          this.sharedService.removeNativeStorage('token')
          this.router.navigate(['/login'])

          return throwError(err.error)
        } else {
          return throwError(err.error)
        }
      }),
    )
  }

  postWithoutToken(path: string, data: object): Observable<any> {
    const url = environment.API_URL + path
    return this.httpClient
      .post(url, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        catchError((err) => {
          // this.sharedService.presentAlert('Alert', err.error)
          return throwError(err.error)
        }),
      )
  }

  get(path: string, data?: object): Observable<any> {
    return from(this.sharedService.getNativeStorage('token')).pipe(
      switchMap((token) => {
        const options = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            accesstoken: token?.data,
          }),
          data,
        }
        const url = environment.API_URL + path
        return this.httpClient.get(url, options)
      }),
      catchError((err) => {
        this.sharedService.presentAlert('Alert', '', err.error.error)

        return throwError(err.error)
        // if (err.error.status === 502 || err.error.error === ERR_TOKEN_EXP) {
        //   // this.sharedService.removeNativeStorage('token')
        //   // this.router.navigate(['/login'])

        //   return throwError(err.error)
        // } else {
        //   return throwError(err.error)
        // }
      }),
    )
  }

  getWithoutToken(path: string, data?: object): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      data,
    }
    const url = environment.API_URL + path
    return this.httpClient.get(url, options).pipe(
      catchError((err) => {
        console.log(err)
        // this.sharedService.presentAlert('Alert', err.error)
        return throwError(err.error)
      }),
    )
  }
}
