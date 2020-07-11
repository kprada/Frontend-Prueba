import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../../services/usuario/usuario.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
})
export class EditPhotoComponent implements OnInit {
  usuarios:Usuario[]=[];
  desde: number=0;
  totalReg: number =0;


  imagenSubir:File;
  imagenTemporal:string | ArrayBuffer;
  usuario:Usuario
  constructor(public modal: NgbActiveModal,
    public usuarioService:UsuarioService) { }

  ngOnInit(): void {
/* this.cargarUsuario()
 */  }

  cargarUsuario(){
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe((res:any)=>{
    this.totalReg=res.total;
    this.usuarios=res.usuarios;  
    
    });
    }//cargar usuario end

  seleccionImage(archivo:File){
    if (!archivo) {

      this.imagenSubir=null;
      return;
    }console.log(archivo);
    if(archivo.type.indexOf('image')<0){
      Swal.fire({
        
        icon: 'error',
        title: 'El archicho seleccionado no es una imagen',
        showConfirmButton: false,
        timer: 1500
      }),
      this.imagenSubir=null;
      return;
    }

    this.imagenSubir=archivo;
    let reader= new FileReader();
    let urlImagenTemporal= reader.readAsDataURL(archivo);
    reader.onloadend= () => this.imagenTemporal=reader.result;

    
  }
  
    
  cambiarImagen(usuario:Usuario){
     
    
    this.usuarioService.cambiarImagenUsuarios(this.imagenSubir,usuario);
this.modal.close('cancel')
this.cargarUsuario();


  ;
    }




}
