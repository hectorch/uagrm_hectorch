import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Simpatizante } from "../../models/Simpatizante";

@Injectable({
  providedIn: 'root'
})
export class SimpatizantesService {
  API_URI='http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getSimpatizantes(){
    return this.http.get(`${this.API_URI}/simpatizante`);
  }

  getSimpatizante(codsimpatizante: string){
    return this.http.get(`${this.API_URI}/simpatizantes/{codsimpatizante}`);
  }

  saveSimpatizante(simpatizante: Simpatizante){
    return this.http.post(`${this.API_URI}/simpatizantes`, simpatizante);
  }

  deleteSimpatizante(codsimpatizante: string){
    return this.http.delete(`${this.API_URI}/simpatizantes/{codsimpatizante}`);
  }

  updateSimpatizante(codsimpatizante: string, updatedSimpatizante: Simpatizante){
    return this.http.put(`${this.API_URI}/simpatizantes/{codsimpatizante}`, updatedSimpatizante);
  }
}
