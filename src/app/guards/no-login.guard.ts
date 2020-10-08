import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../services/signin.service';
import { LoginPage } from '../componentes/login/login.page';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor(private _router: Router,
    public signInService: SigninService
      ) {}

  canActivate(): boolean {
    if(this.signInService.loginState.value == false){
      this._router.navigate(['/home']);

    }
    return this.signInService.loginState.value;

  }
}
