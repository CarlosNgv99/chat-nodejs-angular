import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin.service';
import { Router,ActivatedRoute } from '@angular/router';
import { NavParams,ModalController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsuarioComponent implements OnInit {
  public user: any;
  public nombreUsuario:string;
  usuario: Usuario = {
    nombre: ' ',
    apellido: ' ',
    usuario: ' ',
    password: ' '
  };
  constructor(
    private navParams: NavParams, 
    private _router: Router,
    public signInService: SigninService,
    private modal:ModalController,
  ) { }

  ngOnInit() {
    this.user = this.navParams.get('user')
   // console.log(this.user);
    this.nombreUsuario = this.user.usuario
    this.usuario = this.user;
    console.log(this.usuario);
  }
  return() {
    this.modal.dismiss();
  }

  updateUser(crearForm: NgForm){
    this.signInService.updateUser(this.nombreUsuario,crearForm.value).subscribe(
      res => {
        console.log(res);
        this.modal.dismiss();
      },
      err =>console.error(err)
    )
  }

}
