import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService
  ) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      endereco: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      endereco: ['', Validators.required],
      cidade: [],
      estado: [],
      telefone: ['', Validators.required]
    });
  }

  verDados() {
    console.log(this.formulario.value);
  }

  add() {
    const contato: Contato = new Contato({
      name: this.formulario.value.nome,
      address: this.formulario.value.endereco,
      city: this.formulario.value.cidade,
      state: this.formulario.value.estado,
      telephone: this.formulario.value.telefone
    });
    this.contatoService.addContato(contato)
      .subscribe((contato => console.log(alert(`Contato adicionado ${contato.name}`)))
      );
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get endereco(){
    return this.formulario.get('endereco');
  }

  get telefone(){
    return this.formulario.get('telefone');
  }
}