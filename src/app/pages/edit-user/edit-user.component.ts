import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
usuario:Usuario;
  constructor(public modal: NgbActiveModal,
    public usuarioService:UsuarioService ) { }

  ngOnInit(): void {

    console.log(this.usuario);
    
  }
  ActualizarUsuario(usuario:Usuario){

    this.usuario.nombre=usuario.nombre;
    this.usuario.apellido=usuario.apellido;
    this.usuario.email=this.usuario.email;
    this.usuario.password=usuario.password;
    this.usuario.fecha_nacimiento=usuario.fecha_nacimiento;
    this.usuario.pais=usuario.pais;
    this.usuario.ciudad=usuario.ciudad;

    this.usuarioService.actualizarUsuarios(usuario).subscribe(res=>{
      console.log(res);
      
    });
  }

}
