import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { SigninService } from '../../services/signin.service';
import { ChatService } from '../../services/chat.service';
import { SalaUsuario } from '../../models/sala_usuario';
import { Usuario } from '../../models/usuario';

import { Sala } from '../../models/sala';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss'],
})
export class ContactosComponent implements OnInit {
  public remitente: any;
  public users: any;
  public contacts: any = [];
  public salas: any;
  public idSala: number;
  public valid: boolean = false;
  public usuarioRemitente: Usuario = {
    idUsuario: 0,
    nombre: '',
    apellido: '',
    usuario: '',
    password: ''
  }
  public sala: Sala = {
    idSala: 0,
    nombre: '',
    descripcion: ''
  }
  public sala_usuario: SalaUsuario = {
    idSala: 0,
    idUsuario: 0

  }
  constructor(
    private navParams: NavParams,
    public signInService: SigninService,
    private modalController: ModalController,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.users = this.navParams.get('users')
    this.sala_usuario.idUsuario = this.users.idUSUARIO;
    console.log(this.sala_usuario.idUsuario)
    this.signInService.getContacts(this.users.usuario).subscribe(
      res => {
        this.contacts = res;
        console.log(this.contacts);
      }
    )
    //this.sala.nombre=this.users.nombre;
  }
  addSala(nombre: string) {
    this.sala.nombre = nombre;
    this.getUser(this.sala.nombre);
    this.chatService.addSala(this.sala).subscribe(
      res => {
        console.log(res);
        this.getSalaPorNombre(nombre);
        this.modalController.dismiss();
        
      },
      err => {
        console.error(err)
      }
    )
     
  }
  getUser(usuario: string) {
    this.signInService.getUser(usuario).subscribe(
      res => {
        this.remitente = res;
        console.log(this.remitente.idUSUARIO)
        console.log(res);
      }
    )
  }
  insertSala() {
    this.valid = true;
    console.log(this.sala_usuario)
    this.chatService.insertSala(this.sala_usuario).subscribe(
      res => {
        console.log(res);
      }
    )
  }
  getSalaPorNombre(nombre: string) {
    this.chatService.getSalaporNombre(nombre).subscribe(
      res => {
        this.salas = res;
        this.sala.idSala = this.salas[0].idSALA;
        this.sala_usuario.idSala = this.salas[0].idSALA;
        console.log(this.sala_usuario);
        this.insertSala();
        this.sala_usuario.idUsuario = this.remitente.idUSUARIO;
        this.insertSala();
        console.log(this.sala_usuario.idSala);
      }
    )
  }
  return() {
    this.modalController.dismiss();
  }
}
