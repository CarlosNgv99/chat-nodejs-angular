import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {Usuario} from '../models/usuario';
@Injectable({
  providedIn: 'root'
})
export class SigninService {
  authState = new BehaviorSubject(false);
  loginState = new BehaviorSubject(true);
  constructor(private http: HttpClient) { }
  login(user: string, password: string) {
    return this.http.post('http://localhost:3000/signin', {
      user: user,
      password: password,
    });
  }
  isValid(boolean1: boolean,boolean2:boolean) {
    this.authState.next(boolean1);
    this.loginState.next(boolean2);
    console.log(this.authState.value)
    console.log(this.loginState.value)
  }
  getContacts(user:string){
    return this.http.get('http://localhost:3000/contactos/'+user);

  }
  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
  getUser(usuario:string){
    return this.http.get('http://localhost:3000/users/'+usuario);

  }
  getUserPerID(idUSUARIO:number){
    return this.http.get('http://localhost:3000/user/'+idUSUARIO);
  }
  deleteUser(user:String){
    return this.http.delete('http://localhost:3000/users/'+user);
  }
  updateUser(user:string, userUpdated:Usuario){
    return this.http.put('http://localhost:3000/users/'+user,userUpdated);
  }
  addUser(user: Usuario){
    return this.http.post('http://localhost:3000/users',user);

  }
}
