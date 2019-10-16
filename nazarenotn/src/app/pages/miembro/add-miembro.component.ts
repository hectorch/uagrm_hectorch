import { Component, OnInit } from '@angular/core';
import { Miembro } from '../../models/miembro.model';

import { EstadocivilService, SexoService, MiembroService } from '../../services/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-miembro',
  templateUrl: './add-miembro.component.html',
  styleUrls: ['./add-miembro.component.css']
})
export class AddMiembroComponent implements OnInit {

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
  sexo=null;
  estadocivil=null;

  constructor(private sexoService: SexoService,
              private estadocivilService: EstadocivilService,
              private miembroService: MiembroService,
              private router: Router) { }

  ngOnInit() {
    this.getSexo();
    this.getEstadocivil();
  }

  getSexo(){
    this.sexoService.getSexos().subscribe(
      result=>this.sexo=result
    );
  }

  getEstadocivil(){
    this.estadocivilService.getEstadocivils().subscribe(
      result=>this.estadocivil=result
    );
  }

  addmiembro(){
    this.miembroService.saveMiembro(this.miembro).subscribe(
      datos=>{
        if(datos['resultado']==='OK'){
          alert(datos['mensaje']);
          this.router.navigate(['/miembro']);
        }
      }
    );
  }

}
