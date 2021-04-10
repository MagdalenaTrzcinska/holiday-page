import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {HotelsService} from './hotels.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: HotelsService, private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated().then((auth: boolean) => {
      if (auth) {
        return true;
      } else {
        this.service.errorMessage = 'You must login!';
        this.router.navigate(['login']);
      }
    });
  }

  isAuthenticated(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.service.loggedIn);
      }, 500);
    });
  }
}
