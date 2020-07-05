import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.models';
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor(public route: Router,
    public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    init_plugins();
  }


  ingresar(forma:NgForm){
if (forma.invalid) {
  return;
}

let usuario= new Usuario(null,null,forma.value.email,forma.value.password);

this.usuarioService.login(usuario).subscribe((res:any)=>{
  console.log(res.usuario);
  
  this.route.navigate(['/dashboard']);
  
})




/* this.route.navigate(['/dashboard']);
 */  }

}
