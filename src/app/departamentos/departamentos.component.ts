import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Departamento } from '../models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentoForm: FormGroup;
  public title = 'Departamentos';
  public departamentoSelecionado: Departamento;
  public textSimple: string;

  public departamentos = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Decoração' } ,
    { id: 3, nome: 'Vestuário' }
  ];

  constructor(private fb: FormBuilder) {
    this.criarForm();    
  }

  ngOnInit() {
  }

  criarForm() {
    this.departamentoForm = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  departamentoSubmit() {
    console.log(this.departamentoForm.value);
  }

  departamentoSelect(departamento: Departamento) {
    this.departamentoSelecionado = departamento;
    this.departamentoForm.patchValue(departamento);
  }

  voltar() {
    this.departamentoSelecionado = null;
  }
}
