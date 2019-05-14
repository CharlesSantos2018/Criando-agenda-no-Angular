import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './contatos/contatos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheContatoComponent } from './detalhe-contato/detalhe-contato.component';
import { MessagesComponent } from './messages/messages.component';
import { PainelComponent } from './painel/painel.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ContatoSearchComponent } from './contato-search/contato-search.component';
import { TopContatosComponent } from './top-contatos/top-contatos.component';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    DetalheContatoComponent,
    MessagesComponent,
    PainelComponent,
    ContatoSearchComponent,
    TopContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
