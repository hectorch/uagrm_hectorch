import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/datos/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios=null;
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  
  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      result=>this.usuarios=result
    );
  }
}
