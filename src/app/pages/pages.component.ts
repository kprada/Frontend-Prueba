import { Component,OnInit } from '@angular/core';
declare function init_plugins();//asi puedo llamar un script de js o jq en angular

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    init_plugins();
  }
}
