import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {
  
  public title = 'Vendedores';
  public vendedores = [
    'Diogo',
    'João',
    'José',
    'Laura',
    'Luana'
  ];
  
  constructor() { }
  ngOnInit(): void {
  }
}
