import { Component, OnInit } from '@angular/core';

import { EventoService } from "../../services/datos/evento.service";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  eventos: any=[];
  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEvento();
  }
  
  getEvento(){
    this.eventoService.getEventos().subscribe(
      res=>{ this.eventos=res},
      err=>console.error(err)
    );
  }

  eliminarEvento(codevento:string){
    this.eventoService.deleteEvento(codevento).subscribe(
      res=>{
        this.getEvento();
      },
      err=>console.log(err)
    )
  }

}
