import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes =[
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: 'projects', component: ProjectsComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:name', component: ProjectDetailComponent },
    { path: 'contact', component: ContactComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
