import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentos = [
    { id: 1, nome: 'Informática' },
    { id: 2, nome: 'Decoração' } ,
    { id: 3, nome: 'Vestuário' }
  ];
  title = 'Departamentos';

  constructor() { }

  ngOnInit() {
  }

}
