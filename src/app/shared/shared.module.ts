import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
