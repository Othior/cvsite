import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ProjetComponent } from '../app/projet/projet.component';
import { ContactComponent } from '../app/contact/contact.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"projet",
    component : ProjetComponent
  },
  {
    path:"contact",
    component : ContactComponent
  },
  { 
    path: '**', component: PageNotFoundComponentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
