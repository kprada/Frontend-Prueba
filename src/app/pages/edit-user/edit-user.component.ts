import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
usuario:Usuario;

  constructor(public modal: NgbActiveModal,
    public usuarioService:UsuarioService ) { 
    }

  ngOnInit(): void {

  }
  
    
    
  ActualizarUsuario(usuario:Usuario){
    this.usuario.nombre=usuario.nombre;
    this.usuario.apellido=usuario.apellido;
    this.usuario.email=this.usuario.email;
    this.usuario.password=usuario.password;
    this.usuario.fecha_nacimiento=usuario.fecha_nacimiento;
    this.usuario.pais=usuario.pais;
    this.usuario.ciudad=usuario.ciudad;
    this.usuario.tipo_usuario=usuario.tipo_usuario;
    this.modal.close('cancel');

  console.log(usuario);

    
  }


  


}
 