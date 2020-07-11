import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {


  constructor(public usuariosService:UsuarioService
    ){

  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

if (this.usuariosService.usuario.tipo_usuario==='ADMIN_USER') {
  return true;
}else{
  console.log('bloqueado por el admin gard');
  this.usuariosService.logOut();
  return false;
  
}

    return true;
  }
  
}
