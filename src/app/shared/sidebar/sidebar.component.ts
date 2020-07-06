import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
usuario :Usuario;
  constructor(public _sidebar:SidebarService,
              public usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuario=this.usuarioService.usuario;
  }



  logOut(){
    this.usuarioService.logOut();
  }
}
