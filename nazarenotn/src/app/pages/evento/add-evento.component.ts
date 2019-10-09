import { Component, OnInit } from '@angular/core';

import { Evento } from '../../models/evento.model';

// Importando servicios
import { TipocampService, EventoService } from 'src/app/services/service.index';


@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {
  tipocamps:any=[];

  evento:Evento={
    codevento:0,
    nombre:'',
    lugar:'',
    fecha_ini:'',
    fecha_fin:'',
    hora:'',
    codtipoc:0
  }

  constructor(private tipocampService: TipocampService,
              private eventoService: EventoService) { }

  ngOnInit() {
    this.tipocampService.getTipocamps().subscribe(
      res=>{ this.tipocamps=res},
      err=>console.error(err)
    );
  }

  addevento(){
    delete this.evento.codevento;
    this.eventoService.saveEvento(this.evento)
    .subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }

}
