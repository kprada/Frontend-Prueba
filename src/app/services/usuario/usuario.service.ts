import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.models';
import { HttpClient,HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import  Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public url: string;
usuario: Usuario;
token: string;
menu:any=[]=[];
  constructor(public http: HttpClient,
              public router: Router             
              ) { 
    this.url = URL_SERVICIOS;

    this.loadStorage();
    
    
  }

  verifyLogin(){
    return (this.token.length > 5) ? true : false;
  }
  loadStorage(){
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));//toca parsear el objeto porque viene como un string
      this.menu = JSON.parse(localStorage.getItem('menu'));//toca parsear el objeto porque viene como un string

    }
    else{
      this.token = '';
      this.usuario = null;
      this.menu=[];
    }
  }

  saveStorage(id:string, token :string, usuario:Usuario, menu:any){
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));//EL LOCAL STORAGE SOLO RECIBE STRING
    localStorage.setItem('menu', JSON.stringify(menu));//EL LOCAL STORAGE SOLO RECIBE STRING


    this.usuario=usuario;
    this.token=token;
    this.menu=menu;
  }
  

 

logOut(){
  this.usuario=null;
  this.token;
  localStorage.removeItem('id');
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  localStorage.removeItem('menu');


  this.router.navigate(['/login']);
}


  login(usuario:Usuario){
    let url = URL_SERVICIOS + 'login';
    return this.http.post(url,usuario).pipe(map((res:any)=>{
      this.saveStorage(res.id, res. token, res.usuario,res.menu);

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
  actualizarPerfil(usuario:Usuario){
   
    let url =URL_SERVICIOS+'Apirest/usuario/'+ this.usuario._id;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
      });

      
    return this.http.put(url, usuario, {headers}).pipe(map((res:any)=>{

      let usuarioDB:Usuario =res.usuario;
      this.saveStorage(usuarioDB._id,this.token,usuarioDB,this.menu);
      this.loadStorage();

      Swal.fire({
        title:'Actualizacion exitosa',
        icon:'success'
      });

      return true;
    }));
  }/////end perfil

  actualizarUsuarios(usuario:Usuario){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
      });
    let url = `${URL_SERVICIOS}apirest/usuario/${usuario._id}`;
   

      
    return this.http.put(url, usuario, {headers}).pipe(map((res:any)=>{

      this.cargarUsuarios()

      Swal.fire({
        title:'Actualizacion exitosa',
        icon:'success'
      });

      return true;
    }));
  }

  


  cambiarImagen(file: File, id: string){
this.subirArchivo(file,id)
.then((res:any)=>{
  console.log(res);
this.usuario.avatar=res.usuario.avatar;
  Swal.fire({
    title:'Actualizacion de imagen exitosa',
    icon:'success'
  });
  this.saveStorage(id,this.token, this.usuario,this.menu);
})
.catch(res=>{
console.log(res);

});

  }

  cambiarImagenUsuarios(file: File,usuario:Usuario){
    var id = usuario._id;
    
 
    
    this.subirArchivo(file,id)
    .then((res:any)=>{
      /* usuario.avatar=res.usuario.avatar;
      console.log(res.usuario.avatar); */

      Swal.fire({
        title:'Actualizacion de imagen exitosa',
        icon:'success'
      });

    })
    .catch(res=>{
    console.log(res);
    
    });
    
      }






  subirArchivo(archivo:File,id:string){


    return new Promise((resolve,reject)=>{
    
      let formData= new FormData();
      let xhr= new XMLHttpRequest();
    
      formData.append('avatar',archivo,archivo.name);
    
      xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
    
    
          if (xhr.status===200) {
            console.log('imagen subida');
    
            resolve(JSON.parse(xhr.response));
            
          }else{
            console.log(' no se cargo la imagen');
            reject(xhr.response);
          }
        }
      };

      let url = `${URL_SERVICIOS}apirest/img/${id}`;
      xhr.open('PUT',url,true);
      xhr.setRequestHeader('Authorization',`Bearer ${this.token}`);
      xhr.send(formData);
    
    });
    
    }//ende subir archivo
    
    cargarUsuarios(desde:number=0){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
        });
      let url = `${URL_SERVICIOS}apirest/usuarios?desde=${desde}`;
      return this.http.get(url,{headers});
    }//end cargarusuario


    borrarUsuario(id:string){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
        });
      let url = `${URL_SERVICIOS}apirest/usuario/${id}`;

      return this.http.delete(url,{headers}).pipe(map(res=>{
        Swal.fire(
          'Eliminado!',
          'El Usuario ha sido Eliminado.',
          'success'
        );
        return true;

        
      }));
    }



   
 
  }

 


