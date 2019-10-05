import { Component, OnInit } from '@angular/core';
import { AuthService, SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public sideBar: SidebarService,
    public authService: AuthService
  ) { }

  ngOnInit() {
  }

}
