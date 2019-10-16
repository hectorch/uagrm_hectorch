import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Cargo } from "../../models/cargo.model";

@Injectable({
  providedIn: 'root'
})
export class CargoService {
  API_URI='http://localhost/api/cargo';

  constructor(private http: HttpClient) { }

  getCargos(){
    return this.http.get(`${this.API_URI}/getCargo.php`);
  }

  getCargo(codcargo: string){
    return this.http.get(`${this.API_URI}/getOneCargo.php?codcargo=${codcargo}`);
  }

  saveCargo(cargo: Cargo){
    return this.http.post(`${this.API_URI}/saveCargo.php`, JSON.stringify(cargo));
  }

  deleteCargo(codcargo: string | number, updateCargo: Cargo){
    return this.http.put(`${this.API_URI}/deleteCargo.php?codcargo=${codcargo}`, updateCargo);
  }
/*
  updateCargo(cargo){
    return this.http.post(`${this.API_URI}/updateCargo.php`, JSON.stringify(cargo));
  }
  */

  updateCargo(codcargo: string | number, updateCargo: Cargo){
    return this.http.put(`${this.API_URI}/updateCargo.php?${codcargo}`, JSON.stringify(updateCargo));
  }

}
