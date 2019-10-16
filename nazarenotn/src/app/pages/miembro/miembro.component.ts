import { Component, OnInit } from '@angular/core';

import { MiembroService } from "../../services/service.index";
import { Miembro } from 'src/app/models/miembro.model';


@Component({
  selector: 'app-miembro',
  templateUrl: './miembro.component.html',
  styleUrls: ['./miembro.component.css']
})
export class MiembroComponent implements OnInit {

  miembros: any=[];

  miembro: Miembro={
    foto:'',
    ci:'',
    nombre:'',
    apellido:'',
    direccion:'',
    telefono:'',
    gps:'',
    estado_per:1,
    codsexo:0,
    fechamembresia:'',
    fechanacimiento:'',
    fechabautizo:'',
    codpersona:0
  }

  constructor(private miembroService: MiembroService) { }

  ngOnInit() {
    this.getMiembros();
  }
  
  getMiembros(){
    this.miembroService.getMiembros().subscribe(
      result=>this.miembros=result
    );
  }

  getMiembro(codpersona){
    this.miembroService.getMiembro(codpersona).subscribe(
      result=>this.miembro=result[0]
    );
  }
/*
  deleteMiembro(codpersona){
  this.miembroService.deleteMiembro(codpersona, this.miembro).subscribe(
      datos=>{
        if(datos['resultado']==='OK'){
          alert(datos['mensaje']);
          this.getMiembros();
        }
      }
    )
  }
*/

}
