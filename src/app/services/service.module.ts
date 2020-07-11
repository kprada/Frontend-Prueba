import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService, UsuarioService, LoginGuardGuard,AdminGuardGuard} from './service.index';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [ CommonModule, HttpClientModule],
    exports: [],
    providers: [SharedService, SidebarService, UsuarioService, LoginGuardGuard,AdminGuardGuard],
})
export class ServiceModule {}