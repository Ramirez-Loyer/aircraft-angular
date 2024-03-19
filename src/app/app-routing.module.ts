import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { AlertComponent } from './components/alert/alert.component';

const routes: Routes = [
 
    {path : "aircrafts", component : AircraftsComponent},
    {path : "alert", component : AlertComponent}, 
    {path : "404", component : NotFoundComponent},
    {path : "**", redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
