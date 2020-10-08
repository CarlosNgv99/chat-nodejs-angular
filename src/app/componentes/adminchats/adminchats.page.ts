import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
import { Sala } from '../../models/sala';
@Component({
  selector: 'app-adminchats',
  templateUrl: './adminchats.page.html',
  styleUrls: ['./adminchats.page.scss'],
})
export class AdminchatsPage implements OnInit {
  chats: any = [];
  chat: any;
  sala: Sala = {
    idSala: 0,
    descripcion: '',
    nombre: '',

  }
  constructor(
    private chatService: ChatService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getChats();
  }

  getChats() {
    this.chatService.getChats().subscribe(
      res => {
        this.chats = res;
        console.log(this.chats);
      }
    )
  }
  deleteMensajesSala(idSala: number, nombre: string) {
    this.chatService.deleteMensajesSala(idSala).subscribe(
      res => {
        this.deleteSalasUsuario(this.sala.idSala);
        this.deleteSala(nombre);
      },
      err=> {
        console.error(err)
      }
    );
  }
  getChat(nombre: string) {
    this.chatService.getSalaporNombre(nombre).subscribe(
      res => {
        this.sala = res[0];
        this.sala.idSala = res[0].idSALA
        console.log(this.sala.idSala)
        console.log(nombre);
        this.deleteMensajesSala(this.sala.idSala,nombre);
      }
    )
  }
  deleteSala(nombre: string) {
    this.chatService.deleteSala(nombre).subscribe(
      res => {
        this.getChats();
      },
      err => {
        console.error(err)
      }
    )
  }
  deleteSalasUsuario(idSala: number) {
    this.chatService.deleteSalasUsuario(idSala).subscribe(
      res => {
        console.log(res);
        this.getChats();

      }
    );
  }
  return() {
    this._router.navigate(["/administrador"]);
  }
}
