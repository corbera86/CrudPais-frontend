import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Componente/listar/listar.component';
import { AgregarComponent } from './Componente/agregar/agregar.component';
import { EditarComponent } from './Componente/editar/editar.component';
import { EliminarComponent } from './Componente/eliminar/eliminar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioService } from './Service/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // este es un modulo de servicio nos va permitir realizar solicitudes http
    FormsModule, // se utiliza para realizar todas las importaciones necesarias para la implemenatcion de formularios
    ReactiveFormsModule // esta importa la infraestructura o las directivas para los forms

  ],
  providers: [ServicioService], // este me va hacer un servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
