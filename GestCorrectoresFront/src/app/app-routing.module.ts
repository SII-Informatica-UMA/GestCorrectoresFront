import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './corrector/lista/lista.component';
import {AddCorrectorComponent} from "./corrector/add-corrector/add-corrector.component";
import {EditarCorrectorComponent} from "./corrector/editar-corrector/editar-corrector.component";

const routes: Routes = [
  { path: '', redirectTo: '/correctores', pathMatch: 'full' },
  { path: 'correctores', component: ListaComponent },
  { path: 'add-corrector', component: AddCorrectorComponent },
  {path: 'editar/:id', component: EditarCorrectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
