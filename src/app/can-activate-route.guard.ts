import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthserviceService } from './services/authservice.service';
import { Router } from '@angular/router';
import { User } from './authentication/user';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private _authService: AuthserviceService, private router: Router) { }
  auth: string;
  user: User;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this._authService.isUserAuthenticated(this._authService.getBearerToken()).subscribe(
      res => {this.user = res as User;  this.auth = this.user.message; console.log(this.auth);}
    )
    //console.log(this.auth);
    if(this.auth == "Authenticated")
      return true;
    else{
      this.router.navigate(['home']);
      return false;
    }
    
  }
}
