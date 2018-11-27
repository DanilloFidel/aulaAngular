import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from '../acesso/acesso.component';

const ROUTES: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'home', component: HomeComponent  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
