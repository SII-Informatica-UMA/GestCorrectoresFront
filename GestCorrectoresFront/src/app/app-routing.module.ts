import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './corrector/lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/correctores', pathMatch: 'full' },
  { path: 'correctores', component: ListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
