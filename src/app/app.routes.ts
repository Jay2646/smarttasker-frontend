import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'project',
        loadChildren: () => import('../app/project/project.module').then(project => project.ProjectModule)
    },
    {
        path: 'task',
        loadChildren: () => import('../app/task/task.module').then(task => task.TaskModule)
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
