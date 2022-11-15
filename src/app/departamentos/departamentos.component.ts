import { Component, OnInit } from '@angular/core';
import { Departamento } from '../models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public title = 'Departamentos';
  public departamentoSelecionado: Departamento;
  public departamentos = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Decoração' } ,
    { id: 3, nome: 'Vestuário' }
  ];


  constructor() {     
  }

  departamentoSelect(departamento: Departamento) {
    this.departamentoSelecionado = departamento;
  }

  voltar() {
    this.departamentoSelecionado = null;
  }

  ngOnInit() {
  }

}
