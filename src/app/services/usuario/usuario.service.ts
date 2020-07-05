import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
usuario: Usuario;
token: string;
  constructor(public http: HttpClient,
    public router: Router) { 
    this.loadStorage();
    console.log('servicio usuario');
    
    
  }

  verifyLogin(){
    return (this.token.length > 5) ? true : false;
  }
  loadStorage(){
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));//toca parsear el objeto porque viene como un string
    }
    else{
      this.token = '';
      this.usuario = null;
    }
  }

  saveStorage(id:string, token :string, usuario:Usuario){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));//EL LOCAL STORAGE SOLO RECIBE STRING
  

    this.usuario=usuario;
    this.token=token;
  }

logOut(){
  this.usuario=null;
  this.token;
  localStorage.removeItem('id');
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');

  this.router.navigate(['/login']);
}


  login(usuario:Usuario){
    let url = URL_SERVICIOS + 'login';
    return this.http.post(url,usuario).pipe(map((res:any)=>{
      this.saveStorage(res.id, res. token, res.usuario);

return true;

    }));
    }


  createUser(usuario: Usuario){
let url = URL_SERVICIOS+ 'apirest/create-usuario' ;
return this.http.post(url, usuario).pipe(map((res:any)=>{
  Swal.fire({
    title:'Registro Exitoso',
    icon:'success'
  });

return res.usuario;
}));
  }



}





