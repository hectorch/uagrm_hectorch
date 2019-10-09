import { Component, OnInit } from '@angular/core';

declare function init_plugins();
declare function init_plugins_charts()
declare function init_plugins_charts2();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    init_plugins_charts()
    init_plugins_charts2();
  }

}
