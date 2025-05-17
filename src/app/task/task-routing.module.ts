import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";

const routes: Route[] = [
    {
        path: '',
        component: TaskListComponent
    },
    {
        path: 'add',
        component: TaskFormComponent
    },
    {
        path: ':id',
        component: TaskFormComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class TaskRoutingModule { }