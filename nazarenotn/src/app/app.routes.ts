import { Routes, RouterModule } from "@angular/router";

//Componentes
import { AuthComponent } from "./auth/auth.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: '**', component: NopagefoundComponent }
];

export const AppRouting = RouterModule.forRoot( routes, { useHash: true } );
