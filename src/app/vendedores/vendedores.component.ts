import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Vendedor } from '../models/Vendedor';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  
  public vendedorForm: FormGroup;
  public title = 'Vendedores';
  public vendedorSelecionado: Vendedor;
  public textSimple: string;

  public vendedores = [
    { id: 1, nome: 'Diogo', cpf: '000', email: 'diogo@gmail.com', baseSalarial: 2500 },
    { id: 2, nome: 'João', cpf: '111', email: 'joao@gmail.com', baseSalarial: 1800 },
    { id: 3, nome: 'Laura', cpf: '222', email: 'laura@gmail.com', baseSalarial: 2200}    
  ];

  modalRef?: BsModalRef;    
   
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'gray modal-lg' }));
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit(): void {
  }

  criarForm() {
    this.vendedorForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      baseSalarial: ['', Validators.required]
    });
  }

  vendedorSubmit() {
    console.log(this.vendedorForm.value);
  }

  vendedorSelect(vendedor: Vendedor) {
    this.vendedorSelecionado = vendedor;
    this.vendedorForm.patchValue(vendedor);
  }

  voltar() {
    this.vendedorSelecionado = null;
  }

}