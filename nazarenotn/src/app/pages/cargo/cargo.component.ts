import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/datos/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
cargos=null;
  constructor(private cargoService:CargoService) { }

  ngOnInit() {
    this.getMiembros();
  }
  
  getMiembros(){
    this.cargoService.getCargos().subscribe(
      result=>this.cargos=result
    );
  }
}

