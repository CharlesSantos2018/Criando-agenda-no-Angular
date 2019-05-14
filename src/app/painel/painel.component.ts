import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  }

  add(name: string, address: string, city: string, state: string, telephone: string): void { 
    const data = new Contato(); 

    data.name = name;
    data.address = address;
    data.city = city;
    data.state = state;
    data.telephone = telephone;

    this.contatoService.addContato(data)
      .subscribe((data => this.contatos.push(data)));
    console.log(data);

    /*name = name.trim();
    if (!name) { return; }
    this.contatoService.addContato({ name } as Contato)
      .subscribe(contato => {
        this.contatos.push(contato);
      });*/
  }

}
