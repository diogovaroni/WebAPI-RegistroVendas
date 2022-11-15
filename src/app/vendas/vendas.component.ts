import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venda } from '../models/Venda';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  public vendaForm: FormGroup;
  public title = "Vendas";
  public vendaSelecionada: Venda;
  public textSimple: string;
  
  public vendas = [
    { id: 1, valor: 1000, idVendedor: 1, idDepartamento: 2 },
    { id: 2, valor: 800, idVendedor: 2, idDepartamento: 1 },
    { id: 3, valor: 1500, idVendedor: 1, idDepartamento: 1 }
    
  ];
  
  constructor(private fb: FormBuilder) { 
    this.criarForm();  
  }

  ngOnInit() {
  }

  criarForm() {
    this.vendaForm = this.fb.group({
      valor: ['', Validators.required],
      idVendedor: ['', Validators.required],
      idDepartamento: ['', Validators.required],
    });
  }

  vendaSubmit() {
    console.log(this.vendaForm.value);
  }

  vendaSelect(venda: Venda) {
    this.vendaSelecionada = venda;
    this.vendaForm.patchValue(venda);
  }

  voltar() {
    this.vendaSelecionada = null;
  }
}
