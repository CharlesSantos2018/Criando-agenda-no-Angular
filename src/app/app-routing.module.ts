import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos/contatos.component';
import { PainelComponent } from './painel/painel.component';
import { DetalheContatoComponent } from './detalhe-contato/detalhe-contato.component';
import { DataFormComponent } from './data-form/data-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'dataForm', pathMatch: 'full' },
  { path: 'painel', component: PainelComponent},
  { path: 'detalhe/:id', component: DetalheContatoComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'dataForm', component: DataFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
