import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Tipocamp } from "../../models/tipocamp.model";

@Injectable({
  providedIn: 'root'
})
export class TipocampService {
  API_URI='http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getTipocamps(){
    return this.http.get(`${this.API_URI}/tipocamp`);
  }

  getTipocamp(codtipoc: string){
    return this.http.get(`${this.API_URI}/tipocamp/{codtipoc}`);
  }

  saveTipocamp(tipocamp: Tipocamp){
    return this.http.post(`${this.API_URI}/tipocamp`, tipocamp);
  }

  deleteTipocamp(codtipoc: string){
    return this.http.delete(`${this.API_URI}/tipocamp/{codtipoc}`);
  }

  updateTipocamp(codtipoc: string, updateTipocamp: Tipocamp){
    return this.http.put(`${this.API_URI}/tipocamp/{codtipoc}`, updateTipocamp);
  }
}
