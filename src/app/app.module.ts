import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedoresComponent } from './vendedores/vendedores.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';

@NgModule({
  declarations: [	
    AppComponent,
    VendedoresComponent,
      DepartamentosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
