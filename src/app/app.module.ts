import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CrudComponent }  from './form/crud.component';
import { CreateComponent }  from './create/create.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'Create', component: CreateComponent },
  { path: 'Users' , component: CrudComponent },
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,CrudComponent ,CreateComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
