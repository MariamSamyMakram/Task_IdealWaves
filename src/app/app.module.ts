import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CrudComponent }  from './form/crud.component';
import { CreateComponent }  from './create/create.component';
import { editComponent }  from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'users' , component: CrudComponent },
  { path: 'edit' , component: editComponent },
  {path: '', component: CrudComponent},
];

@NgModule({
  imports:      [ BrowserModule,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,CrudComponent ,CreateComponent,editComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
