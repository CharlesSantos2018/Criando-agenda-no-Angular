import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const contatos = [
      {id: 1, name: 'Thaiene', address: 'Av. Maria de Jesus Condeixa, 234', city: 'Ribeirão Preto', state: 'SP',  telephone: '(16) 9 8198-7480'},
      {id: 2, name: 'Lucimar', address: 'Rua Brondon, 359', city: 'Ribeirão Pires', state: 'SP', telephone: '(11) 3029-4398'},
      {id: 3, name: 'Marcão', address: 'Av. Antonio Gount, 438', city: 'São Paulo', state: 'SP', telephone: '(11) 9 9823-7321'},
      {id: 4, name: 'Lino', address: 'Rua Afonso Sereno, 9348', city: 'Copacabana', state: 'RJ', telephone: '(11) 9 8198-2245'},
      {id: 5, name: 'Ícaro', address: 'Av. Santo Antonio, 439', city: 'São Luiz do Maranhão', state: 'MA', telephone: '(11) 9 9245-6722'},
      {id: 6, name: 'Odamir', address: 'Rua Pereira Sentol, 7348', city: 'Brumado', state: 'BH', telephone: '(11) 9 9178-7394'},
      {id: 7, name: 'Brunão', address: 'Av. Holdon, 532', city: 'Sertãozinho', state: 'SP', telephone: '(16) 3918-3829'},
      {id: 8, name: 'Haynes', address: 'Rua Maria Teresa, 3984', city: 'Browdoski', state: 'SP', telephone: '(16) 3927-3421'},
      {id: 9, name: 'Tiago', address: 'Av. Chapolim, 2341', city: 'Altinópolis', state: 'SP', telephone: '(16) 3012-3748'},
      {id: 10, name: 'Natalia', address: 'Rua Kiko, 9843', city: 'Jardinópolis', state: 'SP', telephone: '(16) 3919-1154'}
    ];
    return {contatos};
  }

  genId(contatos: Contato[]): number {
    return contatos.length > 0 ? Math.max(...contatos.map(contato => contato.id)) + 1: 11;
  }
  constructor() { }
}
