import { NgModule } from '@angular/core';

import { PagesRoutes } from './pages.routes';

import { ShareModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';








@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ListUsersComponent,
        ProfileComponent,
        EditUserComponent,
        
    ],
    imports: [BrowserModule,RouterModule,ShareModule, 
                PagesRoutes, PipesModule,FormsModule,NgbModule],
    exports: [
        PagesComponent,
        DashboardComponent,
        ListUsersComponent,
        ShareModule
        
        
        ],
    providers: [],
  
})
export class PagesModule { }