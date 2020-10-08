import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SigninService } from '../../services/signin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular'
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component'
@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.page.html',
  styleUrls: ['./usuarios-admin.page.scss'],
})
export class UsuariosAdminPage implements OnInit {
  public users: any = [];

  constructor(
    public actionSheetController: ActionSheetController,
    public signInService: SigninService,
    private _router: Router,
    private modalController: ModalController
  ) {this.getUsers(); }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.signInService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      }
    )
  }
  return() {
    this._router.navigate(['/administrador']);
  }
  openEdit(user) {
    this.modalController.create({
      component: EditarUsuarioComponent,
      componentProps: {
        user: user
      }
    }).then((modal) => modal.present())
  }
  openNewUser() {
    this._router.navigate(['/usuario-nuevo']);

  }
  delete(user: String) {
    this.signInService.deleteUser(user).subscribe(
      res => {
        this.getUsers();
      }
    )
  }
}
