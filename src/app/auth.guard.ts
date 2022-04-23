import {NavController} from '@ionic/angular'
import {AuthService} from './services/auth.service'
import {Injectable} from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router'
import {Observable} from 'rxjs'
import {map, catchError, retry} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private navController: NavController,
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn.pipe(
      map((res) => {
        if (res) {
          return true
        } else {
          this.navController.setDirection('root')
          this.router.navigate(['/login'])
          return false
        }
      }),
    )
  }
}
