import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './corrector/lista/lista.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCorrectorComponent } from './corrector/add-corrector/add-corrector.component';
import { EditarCorrectorComponent } from './corrector/editar-corrector/editar-corrector.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AddCorrectorComponent,
    EditarCorrectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
