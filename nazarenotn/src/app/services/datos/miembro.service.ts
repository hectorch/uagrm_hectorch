import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Miembro } from "../../models/miembro.model";

@Injectable({
  providedIn: 'root'
})
export class MiembroService {
  API_URI='http://localhost/api/miembro';

  constructor(private http: HttpClient) { }

  getMiembros(){
    return this.http.get(`${this.API_URI}/getMiembro.php`);
  }

  getMiembro(codpersona: string){
    return this.http.get(`${this.API_URI}/getOneMiembro.php?codpersona=${codpersona}`);
  }

  saveMiembro(miembro: Miembro){
    return this.http.post(`${this.API_URI}/saveMiembro.php`, JSON.stringify(miembro));
  }

  deleteMiembro(codpersona: string | number, updateMiembro: Miembro){
    return this.http.put(`${this.API_URI}/deleteMiembro.php?codpersona=${codpersona}`, updateMiembro);
  }
/*
  updateMiembro(miembro){
    return this.http.post(`${this.API_URI}/updateMiembro.php`, JSON.stringify(miembro));
  }
  */

  updateMiembro(codpersona: string | number, updateMiembro: Miembro){
    return this.http.put(`${this.API_URI}/updateMiembro.php?${codpersona}`, JSON.stringify(updateMiembro));
  }

}
