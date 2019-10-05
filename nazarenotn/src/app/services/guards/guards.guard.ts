import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Models
import { User } from "../../models/user";

// Servicios
import { AuthService } from "../datos/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  usuario: User;
  token: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}
  canActivate() {

    if ( this.authService.login(this.usuario) ) {
      console.log( 'PASO EL GUARD');
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}
