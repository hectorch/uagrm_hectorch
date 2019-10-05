import { NgModule } from '@angular/core';
import { PagesRoutes } from './pages.routes';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { HomeComponent } from "./home/home.component";
import { MiembroComponent } from './miembro/miembro.component';
import { SimpatizanteComponent } from "./simpatizante/simpatizante.component";
import { CargoComponent } from './cargo/cargo.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { DiscipuladoComponent } from './discipulado/discipulado.component';
import { VisitaComponent } from './visita/visita.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        MiembroComponent,
        SimpatizanteComponent,
        CargoComponent,
        UsuarioComponent,
        EventoComponent,
        OrganizacionComponent,
        DiscipuladoComponent,
        VisitaComponent,
        PerfilComponent

    ],
    exports: [
        HomeComponent,
        MiembroComponent,
        SimpatizanteComponent,
        CargoComponent,
        UsuarioComponent,
        EventoComponent,
        OrganizacionComponent,
        DiscipuladoComponent,
        VisitaComponent,
        PerfilComponent
    ],
    imports: [
        SharedModule,
        PagesRoutes,
        FormsModule,
        BrowserModule
    ]
})
export class PagesModule { }