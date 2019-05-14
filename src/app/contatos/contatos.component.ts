import { Component, OnInit } from '@angular/core';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.getContatos();
  }

  getContatos(): void {
    this.contatoService.getContatos()
      .subscribe(contatos => this.contatos = contatos);
  }
  
  delete(contato: Contato): void {
    this.contatos = this.contatos.filter(c => c !== contato);
    this.contatoService.deleteContato(contato).subscribe();
  }


}
