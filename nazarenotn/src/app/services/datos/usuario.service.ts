import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API_URI='http://localhost/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/getUsuario.php`);
  }

  getUsuario(codusuario: string){
    return this.http.get(`${this.API_URI}/getOneUsuario.php?codusuario=${codusuario}`);
  }

  saveUsuario(usuario: User){
    return this.http.post(`${this.API_URI}/saveUsuario.php`, JSON.stringify(usuario));
  }

  deleteUsuario(codusuario: string | number, updateUsuario: User){
    return this.http.put(`${this.API_URI}/deleteUsuario.php?codusuario=${codusuario}`, updateUsuario);
  }
/*
  updateUsuario(usuario){
    return this.http.post(`${this.API_URI}/updateUsuario.php`, JSON.stringify(usuario));
  }
  */

  updateUsuario(codusuario: string | number, updateUsuario: User){
    return this.http.put(`${this.API_URI}/updateUsuario.php?${codusuario}`, JSON.stringify(updateUsuario));
  }

}
