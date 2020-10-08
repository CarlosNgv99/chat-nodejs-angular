import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SigninService } from '../../services/signin.service';
import { ChatService } from '../../services/chat.service';
import {salaChat} from '../../models/salaChat'
import { ModalController } from '@ionic/angular'
import { ChatComponent } from '../chat/chat.component';
import { ActionSheetController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ContactosComponent } from '../contactos/contactos.component'
interface chat {
  nombre: string
  descripcion: string
  imagen: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public chats:any = [];
  public users:any =[];
  public user: string;
  constructor(private activatedRoute:ActivatedRoute,
    private modalController: ModalController,
    private _router: Router,
    private chatSerivce:ChatService,
    public signInService: SigninService,
    public actionSheetController: ActionSheetController,
    private menu: MenuController
    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.usuario){
      this.signInService.getUser(params.usuario)
      .subscribe(
        res => {
         this.users = res;
         this.getSalasdeUsuario(this.users.usuario);
         console.log(this.users.usuario )
        },
        err => console.error(err)
      )
    }
    
  }
  getSalasdeUsuario(usuario: string){
    this.chatSerivce.getSalasDeUsuario(usuario).subscribe(res =>{
      this.chats = res;
      console.log(this.chats)
    })
  }
  openContacts(users){
    this.modalController.create({
      component: ContactosComponent,
      componentProps : {
        users:users
      }
    }).then( (modal)=> modal.present())
  }

  openChat(chat,users){
      this.modalController.create({
      component: ChatComponent,
      componentProps : {
        chat: chat,
        users: users
      }
    }).then( (modal)=> modal.present())
  }
  
  onLogout() {
    this.signInService.isValid(false, true);
    if (this.signInService.loginState.value == true) {
      this._router.navigate(['/login']);
    }

  }


}
