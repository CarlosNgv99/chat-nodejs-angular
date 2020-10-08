import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mensaje } from '../models/mensaje'
import { Sala } from '../models/sala'
import { SalaUsuario } from '../models/sala_usuario'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getChats (){
    return this.http.get('http://localhost:3000/salas');
  }

  getSala(idSala:number){
    return this.http.get('http://localhost:3000/salas/'+idSala);
  }
  
  getMensajes(idSala:number){
    return this.http.get('http://localhost:3000/salas/'+idSala+"/mensajes");

  }
  deleteMensajesSala(idSala:number){
    return this.http.delete('http://localhost:3000/salas/'+idSala+"/mensajes");

  }
  guardarMensaje(idSala:number,mensaje:Mensaje){
    return this.http.post('http://localhost:3000/salas/'+idSala+"/mensajes",mensaje);

  }
  getSalasDeUsuario(usuario:string){
    return this.http.get('http://localhost:3000/salas_usuario/'+usuario);
  }
  deleteSala(nombre:string){
    return this.http.delete('http://localhost:3000/salas/eliminar/'+nombre);

  }
  addSala(sala:Sala){
    return this.http.post('http://localhost:3000/salas/',sala);
  }
  insertSala(sala_usuario:SalaUsuario){
    return this.http.post('http://localhost:3000/salasUsuario',sala_usuario);
  }
  getSalasUsuario(){
    return this.http.get('http://localhost:3000/salasUsuario');

  }
  getSalaporNombre(nombre:string){
    return this.http.get('http://localhost:3000/salas/'+nombre);

  }
  deleteSalasUsuario(idSala:number){
    return this.http.delete('http://localhost:3000/salasUsuario/'+idSala);
  }
  deleteMensaje(contenido:String, mensajeEliminado:Mensaje){
    return this.http.put('http://localhost:3000/mensajes/'+contenido,mensajeEliminado);

  }
  getMensajesEliminados(){
    return this.http.get('http://localhost:3000/mensajeseliminados');

  }
}
