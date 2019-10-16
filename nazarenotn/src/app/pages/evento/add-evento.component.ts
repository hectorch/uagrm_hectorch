import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Evento } from '../../models/evento.model';

// Importando servicios
import { TipocampService, EventoService } from 'src/app/services/service.index';
import { Tipocamp } from 'src/app/models/tipocamp.model';


@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {
  tipocamps: any = [];

  evento: Evento = {
    codevento:0,
    nombre:'',
    lugar:'',
    fecha_ini:'',
    fecha_fin:'',
    hora:'',
    codtipoc:0,
    tipo_evento:''
  };

  tipoevento: Tipocamp ={
    codtipoc:0,
    nombre:'',
    descripcion:''
  }

    constructor(private tipocampService: TipocampService,
              private eventoService: EventoService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tipocampService.getTipocamps().subscribe(
      res=>{ this.tipocamps=res},
      err=>console.error(err)
    );
  }

  addevento(){
    delete this.evento.codevento;
    delete this.evento.tipo_evento;
    console.log(this.evento);
    this.eventoService.saveEvento(this.evento)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/evento']);
      },
      err=>console.log(err)
    )
  }

  addTipoevento(){
    delete this.tipoevento.codtipoc;
    console.log(Tipocamp);
  }

}
