import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contato-search',
  templateUrl: './contato-search.component.html',
  styleUrls: ['./contato-search.component.css']
})
export class ContatoSearchComponent implements OnInit {

  contatos$: Observable<Contato[]>;
  private searchTerms = new Subject<string>();

  constructor(private contatoService: ContatoService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.contatos$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.contatoService.searchContato(term)),
    );
  }

}
