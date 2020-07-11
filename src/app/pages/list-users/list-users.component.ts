import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { UsuarioService } from '../../services/service.index';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { EditPhotoComponent } from '../edit-user/edit-photo.component';
import { CreateUserComponent } from '../create-user/create-user.component';





@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
usuarios: Usuario[]=[];
desde: number=0;
totalReg: number =0;
cargando:boolean=true;
userlogued:boolean=false;
  constructor(public usuarioService: UsuarioService,
              public router : Router,
              public modalService: NgbModal) {

     }

  ngOnInit(): void {

    this.cargarUsuario();
  
     
  }
  //EDITAR ELEMENTOS EN UN MODAL CON LA LIBRERIA NGBOSTRAP
editItem(usuario:Usuario){//RECIBO EN EL PARAMETRO EL USUARIO
  const ref=this.modalService.open(EditUserComponent,{ size: 'lg' }); //se inicializa una constatnte de referencia  con el servicio NgModal y se le pasa el componente donde va a trabajar y como segundo parametro el tamaño del modal
  ref.componentInstance.usuario= usuario; //se pasa en una instancia de referencia de una variable llenandola con el usuario que viene en el parametro de la funcion
  ref.result.then((yes)=>{ //abre el modal y devuelve una promesa

    this.usuarioService.actualizarUsuarios(usuario).subscribe(res=>{
      this.cargarUsuario();

      console.log('ok click');

    });

  },(cancel)=>{
    console.log('cancel click');
    this.cargarUsuario();


  })
  


}
editPhoto(usuario:Usuario){//RECIBO EN EL PARAMETRO EL USUARIO
  const ref=this.modalService.open(EditPhotoComponent); //se inicializa una constatnte de referencia  con el servicio NgModal y se le pasa el componente donde va a trabajar y como segundo parametro el tamaño del modal
  ref.componentInstance.usuario= usuario; //se pasa en una instancia de referencia de una variable llenandola con el usuario que viene en el parametro de la funcion
  ref.result.then((yes)=>{ //abre el modal y devuelve una promesa
    this.cargarUsuario();

  
  },(cancel)=>{
    console.log('cancel click');
    this.cargarUsuario();


  })


}

createUser(){//RECIBO EN EL PARAMETRO EL USUARIO
  const ref=this.modalService.open(CreateUserComponent); //se inicializa una constatnte de referencia  con el servicio NgModal y se le pasa el componente donde va a trabajar y como segundo parametro el tamaño del modal
  ref.componentInstance.usuario //se pasa en una instancia de referencia de una variable llenandola con el usuario que viene en el parametro de la funcion

  


}









cargarUsuario(){
this.usuarioService.cargarUsuarios(this.desde)
.subscribe((res:any)=>{
this.totalReg=res.total;
console.log(this.totalReg);

this.usuarios=res.usuarios;  
this.cargando=false;

});
}//cargar usuario end



cambiarDesde(valor:number){

      
    let desde = this.desde +valor;
    
    if(desde>= this.totalReg){
      return;
    }
    if (desde<0) {
      let desde = this.desde -valor;
    
    
      return;
    }
    this.desde+= valor;
    this.cargarUsuario();
}
  

borrar(usuario:Usuario){
if (usuario._id===this.usuarioService.usuario._id) {
return;
}
console.log(usuario);
  
Swal.fire({
          title: 'Estas seguro?',
          text: "Estas a punto de borrar a "+usuario.nombre+' '+usuario.apellido+'!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, borrar esto!'
        }).then((result) => {
          if (result) {

        this.usuarioService.borrarUsuario(usuario._id).subscribe((res:any)=>{
        this.cargarUsuario();


});

        
          }
        })
      



}// end borrar usuario


guardarUsuario(usuario:Usuario){
  console.log(usuario._id);
  
  this.usuarioService.actualizarUsuarios(usuario).subscribe(res=>{
    console.log(res);
    
  });
}





}

