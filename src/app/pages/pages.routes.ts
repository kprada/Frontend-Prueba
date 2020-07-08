
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';


const pagesRoutes: Routes = [
    { path: '',
    component: PagesComponent,
    canActivate:[LoginGuardGuard],
     children:[
   
     { path: 'dashboard', component: DashboardComponent },
     { path: 'profile', component: ProfileComponent },


     //MANTENIMIENTOS
     { path: 'listarUsuarios', component: ListUsersComponent, data:{titulo:'Mantenimiento usuarios'} },
     { path: 'profile', component: ProfileComponent },

     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   
   
   
   ]
   },

];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutes {}
