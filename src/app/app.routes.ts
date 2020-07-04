import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';


const approutes: Routes = [

{ path: '',
 component: PagesComponent,
  children:[

  { path: 'dashboard', component: DashboardComponent },
  { path: 'progress', component: ProgressComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },



]
},
{ path: 'login',
 component: LoginComponent,
children:[{ path: 'register', component: RegisterComponent }]

},




{ path: '**', component: NopagefoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
