import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from '../../models/mensaje'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.page.html',
  styleUrls: ['./reporte1.page.scss'],
})
export class Reporte1Page implements OnInit {
  public mensajes: any = [];
  constructor(
    private chatService:ChatService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obtenerMensajesEliminados();
  }
  return(){
    this._router.navigate(['/reportes']);

  }

  obtenerMensajesEliminados(){
    this.chatService.getMensajesEliminados().subscribe(
      res => {
        this.mensajes = res;
        console.log(this.mensajes);
      }
    )
  }
}
