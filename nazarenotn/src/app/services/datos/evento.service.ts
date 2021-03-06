import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Evento } from "../../models/evento.model";

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  API_URI='http://localhost/api/evento';

  constructor(private http: HttpClient) { }

  getEventos(){
    return this.http.get(`${this.API_URI}/getEvento.php`);
  }

  getEvento(codevento: string){
    return this.http.get(`${this.API_URI}/evento/${codevento}`);
  }

  saveEvento(evento: Evento){
    return this.http.post(`${this.API_URI}/saveEvento.php`, JSON.stringify(evento));
  }

  deleteEvento(codevento: string){
    return this.http.delete(`${this.API_URI}/evento/${codevento}`);
  }

  updateEvento(codevento: string | number, updateEvento: Evento){
    return this.http.put(`${this.API_URI}/evento/${codevento}`, updateEvento);
  }
}
