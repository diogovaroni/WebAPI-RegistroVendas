import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../models/Vendedor';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  
  public title = 'Vendedores';
  public vendedorSelecionado: Vendedor;
  public textSimple: string;

  public vendedores = [
    { id: 1, nome: 'Diogo', cpf: '000', email: 'diogo@gmail.com', baseSalarial: 2500 },
    { id: 2, nome: 'João', cpf: '111', email: 'joao@gmail.com', baseSalarial: 1800 },
    { id: 3, nome: 'Laura', cpf: '222', email: 'laura@gmail.com', baseSalarial: 2200}    
  ];

  constructor() { 
    
  }

  vendedorSelect(vendedor: Vendedor) {
    this.vendedorSelecionado = vendedor;
  }

  voltar() {
    this.vendedorSelecionado = null;
  }

  ngOnInit(): void {
  }
}
