import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiembroService, SexoService, EstadocivilService } from '../../services/service.index';
import { Miembro } from '../../models/miembro.model';

@Component({
  selector: 'app-edit-miembro',
  templateUrl: './edit-miembro.component.html',
  styleUrls: ['./edit-miembro.component.css']
})
export class EditMiembroComponent implements OnInit {
 sexo=null;
 estadocivil=null;


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
  constructor(private sexoService: SexoService,
              private estadocivilService: EstadocivilService,
              private miembroService:MiembroService,
              private router: Router, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSexo();
    this.getEstadocivil();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMiembro(id);
        
  }

  getMiembro(codpersona){
    this.miembroService.getMiembro(codpersona).subscribe(
      result=>this.miembro=result[0]
    );
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

  editMiembro(){
    this.miembroService.updateMiembro(this.miembro.codpersona, this.miembro).subscribe(
      datos=>{
        if(datos['resultado']==='OK'){
          alert(datos['Mensaje']);
          this.router.navigate(['/miembro']);
        }
      }
    );
  }

}
