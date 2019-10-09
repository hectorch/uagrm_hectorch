import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SettingsService,
    SidebarService,
    SharedService,
    GuardsGuard,
    AuthService,
    EventoService,
    TipocampService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService,
    SidebarService,
    SharedService,
    GuardsGuard,
    AuthService,
    EventoService,
    TipocampService
  ],
  declarations: []
})
export class ServiceModule { }