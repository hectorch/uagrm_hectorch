import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Administracion',
      icono: 'fa fa-home',
      submenu: [
        { titulo: 'Miembro', url: '/miembro' },
        { titulo : 'Simpatizante', url: '/simpatizante' },
        { titulo: 'Cargo', url: '/cargo' },
        { titulo: 'Usuario', url: '/usuario' }
      ]
    },
    {
      titulo: 'Evento',
      icono: 'fa fa-book',
      submenu: [
        { titulo: 'Campaña', url: '/evento' },
        { titulo : 'Organización', url: '/organizacion' }
      ]
    },
    {
      titulo: 'Consolidacion',
      icono: 'fa fa-book',
      submenu: [
        { titulo: 'Discipulado', url: '/discipulado' },
        { titulo : 'Visitas', url: '/visita' }
      ]
    }
  ];

  constructor() { }

}