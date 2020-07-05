import { NgModule } from '@angular/core';

import { PagesRoutes } from './pages.routes';

import { ShareModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        ListUsersComponent,
    ],
    imports: [RouterModule,ShareModule, 
                PagesRoutes ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        ListUsersComponent,
        ShareModule
        ],
    providers: [],
})
export class PagesModule { }