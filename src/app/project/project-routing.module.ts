import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectFormComponent } from './project-form/project-form.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent
    },
    {
        path: 'add',
        component: ProjectFormComponent
    },
    {
        path: ':id',
        component: ProjectFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
