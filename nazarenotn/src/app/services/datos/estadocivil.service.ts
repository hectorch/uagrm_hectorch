import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Estadocivil } from "../../models/estadocivil.model";

@Injectable({
  providedIn: 'root'
})
export class EstadocivilService {
  API_URI='http://localhost/api/estadocivil';

  constructor(private http: HttpClient) { }

  getEstadocivils(){
    return this.http.get(`${this.API_URI}/getEstadocivil.php`);
  }

  getEstadocivil(codestadoc: string){
    return this.http.get(`${this.API_URI}/estadocivil/${codestadoc}`);
  }

  saveEstadocivil(estadocivil: Estadocivil){
    return this.http.post(`${this.API_URI}/estadocivil`, estadocivil);
  }

  deleteEstadocivil(codestadoc: string){
    return this.http.delete(`${this.API_URI}/estadocivil/${codestadoc}`);
  }

  updateEstadocivil(codestadoc: string | number, updateEstadocivil: Estadocivil){
    return this.http.put(`${this.API_URI}/estadocivil/${codestadoc}`, updateEstadocivil);
  }
}
