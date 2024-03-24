import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaReproduccionComponent } from './lista-reproduccion/lista-reproduccion.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CrearListaReproduccionComponent } from './crear-lista-reproduccion/crear-lista-reproduccion.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'lista-reproduccion', component: ListaReproduccionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'crear-lista-reproduccion', component: CrearListaReproduccionComponent },
    // Puedes agregar más rutas aquí según sea necesario
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }