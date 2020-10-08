import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  constructor( private _router: Router,
    public actionSheetController: ActionSheetController
    ) { }

  ngOnInit() {
  }
  iniciarSesion(crearForm: NgForm): void {
    var user: string = crearForm.value.user;
    var password: string = crearForm.value.password;
    if(user=="admin" && password=="admin"){
      this._router.navigate(['/administrador']);
    }else{
      alert("Usuario o contraseña inválida");
      crearForm.reset();

    }
  }
  return(){
    this._router.navigate(['login'])

  }

}
