import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import  {SigninService}  from '../../services/signin.service';
import { promise } from 'protractor';
import { ModalController } from '@ionic/angular'
import { ECONNREFUSED } from 'constants';
import { Usuario } from '../../models/usuario';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private servicio: SigninService,
    private _router: Router,
    public actionSheetController: ActionSheetController
    ) { }
  usuarios:any = [];
  usuario: Usuario;
  ngOnInit() {
    this.getUsers();
  }

  iniciarSesion(crearForm: NgForm) {
    return new Promise((resolve,rejected)=>{
      var user2: string = crearForm.value.user;
      var password: string = crearForm.value.password;
      this.servicio.login(user2, password).subscribe(
        user => {
          resolve(user);
          var respuesta: string = user['inicio'];
          if (respuesta == '1') {
            
            this._router.navigate(['/home/'+ user2]);
            this.servicio.isValid(true,false);
  
          } else {
            alert("Usuario o contraseña inválida");
            crearForm.reset();
            this.servicio.isValid(false,true);

            this._router.navigate(['/login']);
          }
        }, (error) => {
          rejected(error);
        },
      );
    });
  }
  getUsers(){
    this.servicio.getUsers().subscribe(
      res=>{
       this.usuarios = res;
      }
    )
  }
  getUser(usuario:string){
    this.servicio.getUser(usuario).subscribe(
      res=>{
        this.usuario = res[0];
      }
    )
  }
  return(){
    this._router.navigate(['login-admin'])

  }
  admin(){
    this._router.navigate(['admin'])

  }
}
