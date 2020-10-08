import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SigninService } from '../../services/signin.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
})
export class AdministradorPage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
    public signInService: SigninService,
    private _router: Router

  ) { }

  ngOnInit() {
  }

  adminUsuarios(){
    this._router.navigate(['/usuarios-admin']);
  }
  reportes(){
    this._router.navigate(['/reportes']);
  }
  adminChats(){
    this._router.navigate(['/adminchats']);

  }
  onLogout() {
    this.signInService.isValid(false, true);
    if (this.signInService.loginState.value == true) {
      this._router.navigate(['/login-admin']);
    }

  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onLogout();
        }
      }]
    });
    await actionSheet.present();
  }
}
