import { Component, OnInit } from '@angular/core';
import { SimpatizantesService } from "../../services/datos/simpatizantes.service";

@Component({
  selector: 'app-simpatizante',
  templateUrl: './simpatizante.component.html',
  styleUrls: ['./simpatizante.component.css']
})
export class SimpatizanteComponent implements OnInit {
  simpatizantes: any=[];
  constructor(private simpatizanteService: SimpatizantesService) { }

  ngOnInit() {
    this.getSimpatizantes();
  }
  
  getSimpatizantes(){
    this.simpatizanteService.getSimpatizantes().subscribe(
      result=>this.simpatizantes=result
    );
  }

}
