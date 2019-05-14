import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-top-contatos',
  templateUrl: './top-contatos.component.html',
  styleUrls: ['./top-contatos.component.css']
})
export class TopContatosComponent implements OnInit {

  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.getContatos();
  }

  getContatos(): void {
    this.contatoService.getContatos()
      .subscribe(contatos => this.contatos = contatos.slice(0, 4));
  }

}
