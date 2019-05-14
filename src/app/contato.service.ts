import { Injectable } from '@angular/core';
import { Contato } from './contato';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatosUrl = 'api/contatos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getContatos(): Observable<Contato[]> {
    //this.messageService.add("Mudando de página!!");
    return this.http.get<Contato[]>(this.contatosUrl)
      .pipe(
        /*tap(_ => this.log('Contatos buscados')),*/
        catchError(this.handleError<Contato[]>('getContatos', []))
      );
  }

  getHeroNo404<Data>(id: number): Observable<Contato> {
    const url = `${this.contatosUrl}/?id=${id}`;
    return this.http.get<Contato[]>(url)
      .pipe(
        map(contatos => contatos[0]), // returns a {0|1} element array
        /*tap(c => {
          const outcome = c ? `fetched` : `did not find`;
          this.log(`${outcome} Contato id=${id}`);
        }),*/
        catchError(this.handleError<Contato>(`getContato id=${id}`))
      );
  }

  getContato(id: number): Observable<Contato> {
    //this.messageService.add(`Serviço de Contato: ID do contato buscado id=${id}`);
    const url = `${this.contatosUrl}/${id}`;
    return this.http.get<Contato>(url).pipe(
      //tap(_ => this.log(`Contatos buscados por id=${id}`)),
      catchError(this.handleError<Contato>(`Busca contato id=${id}`))
    );
  }

  searchContato(term: string): Observable<Contato[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Contato[]>(`${this.contatosUrl}/?name=${term}`).pipe(
      //tap(_ => this.log(`Contato correspondente encontrado "${term}"`)),
      catchError(this.handleError<Contato[]>('', []))
    );
  }

  addContato(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.contatosUrl, contato, httpOptions).pipe(
      //tap((newContato: Contato) => this.log(`Contato adicionado id=${newContato.id}`)),
      catchError(this.handleError<Contato>('Erro encontrado ao adicionar'))
    );
  }

  updateContato(contato: Contato): Observable<any> {
    return this.http.put(this.contatosUrl, contato, httpOptions).pipe(
      //tap(_ => this.log(`Contato atualizado id=${contato.id}`)),
      catchError(this.handleError<any>('Não foi atualizado'))
    );
  }

  deleteContato(contato: Contato | number): Observable<Contato> {
    const id = typeof contato === 'number' ? contato : contato.id;
    const url = `${this.contatosUrl}/${id}`;

    return this.http.delete<Contato>(url, httpOptions).pipe(
      //tap((_ => this.log(`Contato excluido id=${id}`))),
      catchError(this.handleError<Contato>('Erro encontrado ao excluir'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} falhou: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`Serviço de Contato: ${message}`);
  }
}
