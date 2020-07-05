import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
menu: any=[
  {
    titulo: 'Administracion',
    icono: 'mdi mdi-gauge',

    submenu:[
     {titulo: 'Listar Usuarios', url: '/listarUsuarios' },
     {titulo: 'Crear Usuarios', url: '/progress' },

    
    ]

  },
]
  constructor() { }
}
