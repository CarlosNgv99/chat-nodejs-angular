import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {SigninService} from '../services/signin.service'
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router,
    public signInService: SigninService
      ) {}

  canActivate(): boolean {
    if(this.signInService.authState.value==false){
      this._router.navigate(['/login']);
    }
    return this.signInService.authState.value;
  }
}
