import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.page.html',
  styleUrls: ['./usuario-nuevo.page.scss'],
})
export class UsuarioNuevoPage implements OnInit {

  user: Usuario = {
    nombre: ' ',
    apellido: ' ',
    usuario: ' ',
    password: ''
  }

  constructor(
    public signInService: SigninService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  return() {
    this._router.navigate(['/usuarios-admin']);
  }
  addUser() {
    console.log(this.user);
    this.signInService.addUser(this.user).subscribe(
      res => {
        this.return();
      },
      err => console.error(err)
    )
  }
}
