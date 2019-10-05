import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Rutas
import { AppRouting } from "./app.routes";

// Componentes
import { AuthComponent } from "./auth/auth.component";

// Servicios
import { ServiceModule } from './services/service.module';

import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    PagesModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
