import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vendedores', component: VendedoresComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'vendas', component: VendasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
