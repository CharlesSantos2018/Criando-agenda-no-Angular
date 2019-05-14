import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../contato';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe-contato',
  templateUrl: './detalhe-contato.component.html',
  styleUrls: ['./detalhe-contato.component.css']
})
export class DetalheContatoComponent implements OnInit {

  @Input() contato: Contato;
  
  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContato();
  }

  getContato(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contatoService.getContato(id)
      .subscribe(contato => this.contato = contato);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.contatoService.updateContato(this.contato)
      .subscribe(() => this.goBack());
  }
}
