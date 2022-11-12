import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  public departamentos = [
    'Informática',
    'Decoração',
    'Vestuário'
  ];
  title = 'Departamentos';

  constructor() { }

  ngOnInit() {
  }

}
