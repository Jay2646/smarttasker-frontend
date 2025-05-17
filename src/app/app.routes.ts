import { Routes } from '@angular/router';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashbaordComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    }
];
