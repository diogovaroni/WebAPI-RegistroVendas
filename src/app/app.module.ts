import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { VendasComponent } from './vendas/vendas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [				
    AppComponent,
    VendedoresComponent,
      DepartamentosComponent,
      VendasComponent,
      DashboardComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
