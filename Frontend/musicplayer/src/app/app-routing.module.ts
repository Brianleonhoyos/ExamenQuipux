import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearListaReproduccionComponent } from './crear-lista-reproduccion/crear-lista-reproduccion.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';

const routes: Routes = [
  { path: 'crear-lista-reproduccion', component: CrearListaReproduccionComponent },
  { path: 'lista-reproduccion', component: ListaReproduccionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
