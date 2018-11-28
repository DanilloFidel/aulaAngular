import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from '../acesso/acesso.component';
import { AutenticacaoGuard } from '../_services/autenticao-guard.service';
import { IncluirPublicacaoComponent } from '../home/incluir-publicacao/incluir-publicacao.component';

const ROUTES: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'home', component: HomeComponent, canActivate: [ AutenticacaoGuard ]  },
  { path: 'publicar', component: IncluirPublicacaoComponent, canActivate: [ AutenticacaoGuard ]  }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
