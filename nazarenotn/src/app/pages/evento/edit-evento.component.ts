import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService, TipocampService } from '../../services/service.index';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-edit-evento',
  templateUrl: './edit-evento.component.html',
  styleUrls: ['./edit-evento.component.css']
})
export class EditEventoComponent implements OnInit {
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

  constructor(private tipocampService: TipocampService, private eventoService: EventoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tipocampService.getTipocamps().subscribe(
      res=>{ this.tipocamps=res},
      err=>console.error(err)
    );
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.eventoService.getEvento(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.evento=res as any;
          },
          err => console.log(err)
        )
    }
  }

  updateEvento() {
    delete this.evento.tipo_evento;
    this.eventoService.updateEvento(this.evento.codevento, this.evento)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/evento']);
        },
        err => console.error(err)
      )
  }
}
