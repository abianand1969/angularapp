import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('loginStatus') == 'true'){
        return true
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }

  constructor(private authSvc: AuthService,
    private router: Router){

  }

//  canActivate(): boolean{
//     if(localStorage.getItem('loginStatus') == 'true'){
//       return true
//     }else{
//       this.router.navigate(['/login'])
//       return false;
//     }
//   }
  
}
