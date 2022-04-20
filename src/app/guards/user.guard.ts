import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {

  constructor(private router: Router,
    private authSvc: AuthService){

  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      console.log(this.authSvc.isAdmin())
      if(this.authSvc.isAdmin()){
        return true
      }else{
        this.router.navigate(['/login'])
        return false;
      }
  }
  
}
