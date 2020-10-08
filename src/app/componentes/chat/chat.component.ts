import { Component, OnInit } from '@angular/core';
import { NavParams,ModalController} from '@ionic/angular';
import { Mensaje } from '../../models/mensaje'
import { ChatService } from '../../services/chat.service';
import { SigninService } from '../../services/signin.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chat: any;
  public user: any;
  public mensajes:any =[];
  public sala: any;
  public msg : string;
  public id_sala:number;
  public id_user:number;
  public nombreUsuario:string;
  //public mensaje: Mensaje;
  constructor(
    private navParams: NavParams, 
    private modal:ModalController, 
    private chatService:ChatService,
    private signInService: SigninService
    ) { }
    
  ngOnInit() {
    this.chat = this.chatService.getSala(this.chat.idSala).subscribe(
      sala =>{
        console.log(sala);
        this.id_sala = this.chat.idSala;
        console.log(this.chat.idSala)
        this.sala = sala;
        this.obtenerMensajes();
    })
    this.chat = this.navParams.get('chat');
    this.user = this.navParams.get('users')
    this.id_user = this.user.idUSUARIO
    this.nombreUsuario = this.user.usuario
    console.log(this.nombreUsuario);
  }

  closeChat(){
    this.modal.dismiss();
  }
  
  obtenerMensajes(){
    this.chatService.getMensajes(this.id_sala).subscribe(
      res =>{
      this.mensajes = res;
        console.log(res);
      }
    )
  }
  delete(contenido:String){
    const mensaje: Mensaje ={
      idUsuario: this.id_user,
      contenido:  this.msg,
      sala: this.id_sala,
      estado_eliminado: true,
      nombreEmisor: this.nombreUsuario,
      fecha_envio:'',
      contenido_eliminado: ''
    }
   this.chatService.deleteMensaje(contenido,mensaje).subscribe(
      res =>{
        console.log(res);
        this.obtenerMensajes();
      }
    )
  }

  sendMessage(){
    const mensaje: Mensaje ={
      idUsuario: this.id_user,
      contenido:  this.msg,
      sala: this.id_sala,
      estado_eliminado: false,
      nombreEmisor: this.nombreUsuario,
      fecha_envio: Date.toString(),
      contenido_eliminado: ''
    }
    //console.log(mensaje);
    console.log(mensaje);
    console.log(this.id_user)
    this.mensajes.push(mensaje)
    console.log(this.id_sala)
    this.chatService.guardarMensaje(this.id_sala,mensaje).subscribe(res =>{
      console.log(res);
      this.obtenerMensajes();
      this.msg=' ';
    });
  }
}
