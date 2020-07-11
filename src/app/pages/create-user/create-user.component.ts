import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.models';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent implements OnInit {
  forma:FormGroup;

  constructor(public modal: NgbActiveModal,
    public usuarioService:UsuarioService) { }

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
   

    let usuario = new Usuario(//crea una varibale de tipo Usuario y la llena con los valores que vienen en el form
      this.forma.value.nombre,
      this.forma.value.apellido,
      this.forma.value.email,
      this.forma.value.password
    );
      this.usuarioService.createUser(usuario).subscribe(res=>{
     
      console.log(res);
      this.modal.close();
    });
 
  }
}
