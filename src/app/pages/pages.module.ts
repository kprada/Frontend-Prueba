import { NgModule } from '@angular/core';

import { PagesRoutes } from './pages.routes';

import { ShareModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        ListUsersComponent,
        ProfileComponent,
    ],
    imports: [RouterModule,ShareModule, 
                PagesRoutes, PipesModule,FormsModule,
                 ],
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