import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Sexo } from "../../models/sexo.model";

@Injectable({
  providedIn: 'root'
})
export class SexoService {
  API_URI='http://localhost/api/sexo';

  constructor(private http: HttpClient) { }

  getSexos(){
    return this.http.get(`${this.API_URI}/getSexo.php`);
  }

  getSexo(codsexo: string){
    return this.http.get(`${this.API_URI}/sexo/${codsexo}`);
  }

  saveSexo(sexo: Sexo){
    return this.http.post(`${this.API_URI}/sexo`, sexo);
  }

  deleteSexo(codsexo: string){
    return this.http.delete(`${this.API_URI}/sexo/${codsexo}`);
  }

  updateSexo(codsexo: string | number, updateSexo: Sexo){
    return this.http.put(`${this.API_URI}/sexo/${codsexo}`, updateSexo);
  }
}
