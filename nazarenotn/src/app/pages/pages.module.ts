import { NgModule } from '@angular/core';
import { PagesRoutes } from './pages.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

// servicios
import { EventoService } from "../services/service.index";

//Componentes
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
import { AddSimpatizanteComponent } from './simpatizante/add-simpatizante.component';
import { EditSimpatizanteComponent } from './simpatizante/edit-simpatizante.component';
import { EditEventoComponent } from './evento/edit-evento.component';
import { AddEventoComponent } from './evento/add-evento.component';
import { AppComponent } from '../app.component';
import { AddMiembroComponent } from "./miembro/add-miembro.component";
import { EditMiembroComponent } from './miembro/edit-miembro.component';

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
        PerfilComponent,
        AddSimpatizanteComponent,
        EditSimpatizanteComponent,
        EditEventoComponent,
        AddEventoComponent,
        AddMiembroComponent,
        EditMiembroComponent

    ],
    exports: [
        HomeComponent,
        MiembroComponent,
        SimpatizanteComponent,
        CargoComponent,
        UsuarioComponent,
        EventoComponent,
        EditEventoComponent,
        AddEventoComponent,
        OrganizacionComponent,
        DiscipuladoComponent,
        VisitaComponent,
        PerfilComponent
    ],
    imports: [
        SharedModule,
        PagesRoutes,
        FormsModule,
        HttpClientModule,
        BrowserModule
    ],
    providers:[
        EventoService
    ],
    bootstrap:[AppComponent]
})
export class PagesModule { }