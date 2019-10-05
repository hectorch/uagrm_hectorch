import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

// Servicios
import { AuthService } from '../services/service.index';

declare function init_plugins();

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  usuario: string;
  recuerdame: boolean = false;

  constructor(public router: Router,
    public authService: AuthService) { }

  ngOnInit() {
    init_plugins();
    this.usuario = localStorage.getItem('usuario') || '';
    if ( this.usuario.length > 1 ) {
      this.recuerdame = true;
    }
  }

  login() {
  /* if ( forma.invalid ) {
      return;
    }

    let usuario = new User(null, forma.value.username, forma.value.password );

    this.authService.login( usuario )
                  .subscribe( correcto => this.router.navigate(['/home'])  ); 
*/
    this.router.navigate([ '/home' ]);

  }

}
