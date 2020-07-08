import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/service.index';
import { NgForm } from '@angular/forms';
import { URL_SERVICIOS } from '../../config/config';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  imagenSubir:File;
  public url :string;
usuario: Usuario;

  constructor(public usuarioService: UsuarioService) {

    this.url=URL_SERVICIOS;
   }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;

  }
      
      actualizar(usuario:Usuario){
      console.log(usuario);
      
      this.usuario.nombre=usuario.nombre;
      this.usuario.apellido=usuario.apellido;
      this.usuario.email=this.usuario.email;
      this.usuario.password=usuario.password;
      this.usuario.fecha_nacimiento=usuario.fecha_nacimiento;
      this.usuario.pais=usuario.pais;
      this.usuario.ciudad=usuario.ciudad; 
      
      
      this.usuarioService.actualizarPerfil(usuario).subscribe(res=>{
        console.log(res);
        
      });

      
      
      
      
      
      }


      seleccionImage(archivo:File){
        if (!archivo) {

          this.imagenSubir=null;
          return;
        }
        this.imagenSubir=archivo;
      }
      cambiarImagen(){
        console.log('presionado');
        
  this.usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);
  this.usuarioService.saveStorage(this.usuario._id,this.usuarioService.token,this.usuario);
}

      



}
