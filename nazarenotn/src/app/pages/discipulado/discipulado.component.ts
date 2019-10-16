import { Component, OnInit } from '@angular/core';
import { SimpatizantesService } from "../../services/datos/simpatizantes.service";


@Component({
  selector: 'app-discipulado',
  templateUrl: './discipulado.component.html',
  styleUrls: ['./discipulado.component.css']
})
export class DiscipuladoComponent implements OnInit {
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
