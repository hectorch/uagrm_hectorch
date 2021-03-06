import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';

import { GuardsGuard } from '../services/service.index';
import { SimpatizanteComponent } from './simpatizante/simpatizante.component';
import { CargoComponent } from './cargo/cargo.component';
import { UsuarioComponent } from './usuario/usuario.component';
// Evento
import { EventoComponent } from './evento/evento.component';
import { AddEventoComponent } from "./evento/add-evento.component";
import { EditEventoComponent } from "./evento/edit-evento.component";

//Miembros
import { MiembroComponent } from './miembro/miembro.component';
import { AddMiembroComponent } from "./miembro/add-miembro.component";
import { EditMiembroComponent } from "./miembro/edit-miembro.component";

import { OrganizacionComponent } from './organizacion/organizacion.component';
import { DiscipuladoComponent } from './discipulado/discipulado.component';
import { VisitaComponent } from './visita/visita.component';
import { PerfilComponent } from './perfil/perfil.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        //canActivate: [ GuardsGuard ],
        children: [
            { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
            { path: 'miembro', component: MiembroComponent, data: { titulo: 'Miembro' } },
            { path: 'addmiembro', component: AddMiembroComponent, data: { titulo: 'Agregar miembro' } },
            { path: 'editmiembro/:id', component: EditMiembroComponent, data: { titulo: 'Editar miembro' } },
            { path: 'simpatizante', component: SimpatizanteComponent, data: { titulo: 'Simpatizante' } },
            { path: 'cargo', component: CargoComponent, data: { titulo: 'Cargo' } },
            { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuario' } },
            { path: 'evento', component: EventoComponent, data: { titulo: 'Campaña' } },
            { path: 'addevento', component: AddEventoComponent, data: { titulo: 'Registrar campaña' } },
            { path: 'editevento/:id', component: EditEventoComponent, data: { titulo: 'Editar campaña' } },
            { path: 'organizacion', component: OrganizacionComponent, data: { titulo: 'Organización' } },
            { path: 'discipulado', component: DiscipuladoComponent, data: { titulo: 'Discipulado' } },
            { path: 'visita', component: VisitaComponent, data: { titulo: 'Visitas' } },
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const PagesRoutes = RouterModule.forChild( pagesRoutes );