import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';


import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.models';
import { Router } from '@angular/router';

import  Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
forma:FormGroup;
  constructor(public usaurioService: UsuarioService,
              public router: Router) { }

    passEquals(campo1: string, campo2: string){
    return (group: FormGroup) =>{

    let pass1 =group.controls[campo1].value;
    let pass2 =group.controls[campo2].value;


    if (pass1 === pass2) {

      return null;
    }
    return {
      passEquals: true
    };
    };

}
  ngOnInit(): void {

      this.forma = new FormGroup({
      nombre: new FormControl(null , Validators.required),
      apellido: new FormControl(null , Validators.required),
      email: new FormControl(null , [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    },
{validators: this.passEquals('password','password2')}

    );

  }

  registro(){


    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      Swal.fire({
        title:'Importante',
        text:'Debe Aceptar las condiciones',
        icon:'error'
      });
      return;
    }

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.apellido,
      this.forma.value.email,
      this.forma.value.password
    );
    this.usaurioService.createUser(usuario).subscribe(res=>{
      console.log(res);
     
      this.router.navigate(['/login']);
      
    })
 
  }

}
