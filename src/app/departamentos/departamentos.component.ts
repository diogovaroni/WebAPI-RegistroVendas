import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public title = 'Departamentos';
  public departamentoSelecionado: string;
  public departamentos = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Decoração' } ,
    { id: 3, nome: 'Vestuário' }
  ];


  constructor() { 
    this.departamentoSelecionado = ''
  }

  departamentoSelect(departamento: any) {
    this.departamentoSelecionado = departamento.nome;
  }

  voltar() {
    this.departamentoSelecionado = '';
  }

  ngOnInit() {
  }

}
